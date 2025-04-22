<script setup>
import { TestState } from '@/AppState.js';
import TableWrapper from '@/components/TableWrapper.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {Product} from '../models/Product.js'
import FormBase from '@/components/forms/FormBase.vue';
import OffcanvasWrapper from '@/components/wrappers/OffcanvasWrapper.vue';
import ModalWrapper from '@/components/wrappers/ModalWrapper.vue';
import SearchResource from '@/components/forms/SearchResource.vue';


const route = useRoute()

const data = computed(()=> TestState.products ?? [])
const productForm =[
  {type: 'text', label: 'grade', required: true},
  {type: 'text', label: 'description'},
  {type: 'text', label: 'LF per', required: true},
  {type: 'text', label: 'WT per', required: true},
  {type: 'text', label: 'size', required: true},
  {type: 'text', label: 'species', required: true},
  {type: 'text', label: 'incoming price', required: true},
]

</script>


<template>
  
  <h1>
    Products
  </h1>

<section class="mb-4">
  <FormBase :inputs="productForm"/>
</section>

<section class="mb-4">
  <SearchResource resource="products"/>
</section>


<section v-if="data[0]">
    <TableWrapper :columns="Product.tableColumnsView" :data tableName="products"/>
</section>
<section v-else>
  No data to show
</section>
</template>


<style lang="scss" scoped>

</style>