<script setup>
import { TestState } from '@/AppState.js';
import TableWrapper from '@/components/TableWrapper.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {Product} from '../models/Product.js'


const route = useRoute()

const data = computed(()=> TestState.products ?? [])

</script>


<template>
  <h1>
    Products
  </h1>
<section v-if="data[0]">
    <TableWrapper :columns="Product.tableColumnsView" :data tableName="products"/>
</section>
<section v-else>
  No data to show
</section>
</template>


<style lang="scss" scoped>

</style>