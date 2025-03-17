<script setup>
import { logger } from '@/utils/Logger.js'
import { computed, reactive, ref } from 'vue'
import TableSearch from './TableSearch.vue'
import TableData from './TableData.vue'

const props = defineProps({
  tableName: { type: String, default: 'standard' },
  columns: { type: Array, default: () => [] },
  data: { type: Array, default: () => [] },
})

const rowCount = ref(10)
const skipRows = ref(0)
const currentPage = ref(1)

const sortBy = ref(null)
const filterBy = ref(null)

const sortedData = computed(()=> {
  let rows = props.data
  if(filterBy.value) rows = rows.filter((item)=> JSON.stringify(item).includes(filterBy.value))
  if(sortBy.value) rows =  rows.sort((itemA, itemB) => {
    const columnName = sortBy.value[0]
    const order = sortBy.value[1]
    const valueA = itemA[columnName]
    const valueB = itemB[columnName]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB) * order
    } else if (typeof valueA === 'number' && typeof valueB === 'number') {
      return (valueA - valueB) * order
    } else if (valueA instanceof Date && valueB instanceof Date) {
      return (valueA - valueB) * order
    } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return (valueA === valueB ? 0 : valueA ? 1 : -1) * order
    } else {
      return 0
    }
  })
  return rows
})

const paginatedData = computed(()=>{
  return sortedData.value.slice(skipRows.value, skipRows.value + rowCount.value)
})

const totalPages = computed(()=> {
  return Math.ceil(sortedData.value.length/rowCount.value)
})

function changePage(pageNumber){
  currentPage.value = pageNumber
  skipRows.value = (pageNumber-1) * rowCount.value
}

const pageWindow = computed(() => {
  const start = Math.max(currentPage.value - 2, 1)
  const end = Math.min(start + 4, totalPages.value)
  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

function handleSearch(searchTerm){
  logger.log('🔍📊', searchTerm)
  filterBy.value = searchTerm
}

function handleSort(sortTuple){
  logger.log('🧫📊', sortTuple)
  sortBy.value = sortTuple
}

</script>

<template>

<section class="container-fluid">
  <div class="row justify-content-between">
    <div class="col-md-4">
      Showing 
      <span>
        <select v-model.number="rowCount" :name="`${tableName}-row-count`" :id="`${tableName}-row-count`">
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </span>
      of <span>{{ sortedData.length }}</span>
    </div>
    <div class="col-md-4">
      <TableSearch @searchTable="handleSearch"/>
    </div>
  </div>
</section>

<section class="table-wrapper">
  <TableData :columns :data="paginatedData" :rowCount :skipRows @sortBy="handleSort"/>
</section>

<section class="container-fluid">
  <div class="row">
    <div class="col-md-4">
      Page <span>{{ currentPage }}</span> of <span>{{ totalPages }}</span></div>
  </div>
  <div class="col-md-8">
    <div class="d-flex">
      <button :disabled="currentPage==1" @click="changePage(currentPage -1)" class="btn btn-outline-primary"><i class="mdi mdi-menu-left"></i></button>

      <button v-for="pageNumber in pageWindow" :key="'page-btn-'+pageNumber" class="btn" :class="{'btn-primary': pageNumber == currentPage, 'btn-outline-primary': pageNumber != currentPage}" @click="changePage(pageNumber)">
        {{ pageNumber }}
      </button>

      <button :disabled="currentPage== totalPages" @click="changePage(currentPage +1)" class="btn btn-outline-primary"><i class="mdi mdi-menu-right"></i></button>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
.table-wrapper{
  max-width: 100%;
  overflow: auto;
}


</style>