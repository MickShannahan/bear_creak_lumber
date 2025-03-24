<script setup>
import { TestState } from '@/AppState.js';
import TableWrapper from '@/components/TableWrapper.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const collectionName = computed(()=> route.params.collection)
const data = computed(()=> TestState[collectionName.value] ?? [])

</script>


<template>
  <h1>
    {{ collectionName }}
  </h1>
<details>
  <summary>View RAW JSON</summary>
  {{ data }}
</details>
<section v-if="data[0]">
  <TableWrapper :columns="Object.keys(data[0])" :data/>
</section>
<section v-else>
  No data to show
</section>
</template>


<style lang="scss" scoped>

</style>