<script setup>
import { logger } from '@/utils/Logger.js'
import { ref } from 'vue'

const emit = defineEmits(['searchTable'])

const searchTerm = ref(null)

function searchTable(){
  // logger.log('searching', searchTerm.value)
  if(searchTerm.value == '') return clearSearch()
  emit('searchTable', searchTerm.value)
}

function clearSearch(){
  searchTerm.value = null
  emit('searchTable', null)
}

</script>


<template>
      <form @submit.prevent="searchTable" >
        <div class="mb-3 d-md-flex align-items-center">
          <label for="table-search" class="me-2">search</label>
          <input @input="searchTable" v-model.trim="searchTerm" type="text" class="form-control">
        </div>
      </form>
</template>


<style lang="scss" scoped>

</style>