<script setup >
import { AppState, TestState } from '@/AppState.js';
import { computed } from 'vue';
import TableWrapper from '@/components/TableWrapper.vue';


let columns =  computed(()=> Object.keys(TestState.products[0] || {}))
let data = computed(()=> TestState.products)

</script>

<template>
  <div class="container-fluid">
    <section class="row p-4">
        <TableWrapper tableName="test-table" :columns :data />
    </section>
  </div>
  </template>

<style scoped lang="scss">

</style>
