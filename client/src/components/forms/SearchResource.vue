<script setup>
import { TestState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  searchLabel: {type: String},
  resource: {type: String, default: 'products'},
  searchLimit: {type: Number, default: 10}
})

const emit = defineEmits(['selected'])

const searchTerm = ref('')
const resourceData = ref([])

let searching = null
watch(searchTerm, ()=> {
  searching = clearTimeout(searching)
  searching = setTimeout(searchResource, 500)
})

function searchResource(){
  console.time('🫧searching')
  if(!searchTerm.value) {return resourceData.value =  []}
  let terms = searchTerm.value.split(' ').map(t => t.toLocaleLowerCase().replaceAll(/ |"|'/gi), '')
  let resource = [...TestState[props.resource]]
  logger.log('🔍', terms)
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    resource =  resource.filter(r => JSON.stringify(r).toLowerCase().replaceAll(/ |"|'/g, '').includes(term))
  }
  if(!resource) {return resourceData.value =  []}
  resourceData.value = resource.slice(0, props.searchLimit)
  console.timeEnd('🫧searching')
}

function selectedData(data){
  emit('selected', data)
  logger.log('👉', data)
  searchTerm.value = data.listSelect ?? JSON.stringify(data)
}
</script>


<template>
<section class="row">
  <div class="dropdown mb-2">
    <label class="text-capitalize"><i class="mdi mdi-magnify"></i> Quick Search for {{ searchLabel ?? resource }}</label>
    <input v-model.trim="searchTerm" type="text" class="form-control" data-bs-toggle="dropdown">
    <ul  class="dropdown-menu">
      <li v-for="data in resourceData" :key="`data-${data.id}`" class="dropdown-item selectable-primary" @click="selectedData(data)">
        <component v-if="data.listComponent" :is="data.listComponent" :data></component>
        <template v-else>
          <span v-for="val in data" :key="val" class="me-1">{{ val }}</span>
        </template>
      </li>
      <li v-if="!resourceData?.length">
        no results...
      </li>
    </ul>
  </div>
  
</section>
</template>


<style lang="scss" scoped>

</style>