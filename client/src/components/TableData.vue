<script setup>
import { logger } from '@/utils/Logger.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Highlight from './Highlight.vue'


const props = defineProps({
  columns: { type: Array, default: () => [] },
  data: { type: Array, default: () => [] },
  highlight: {type: String, default: ''}
})

const emit = defineEmits(['sortBy'])

const lastSorted = ref([null, 1])
function sortItemsBy(columnName, order = 1){
  logger.log('sorting', columnName)
  let last = lastSorted.value
  if(!last){
    lastSorted.value = [columnName, order]
  } else {
    order = lastSorted.value[1] * -1
    lastSorted.value = [columnName, order]
  }

  emit('sortBy', [columnName, order])
}

const isResizing = ref(null)
const colSizes = ref({})
const initialMouseX = ref(0)
const initialColSize = ref(0)
const minColWidth = ref(5)

onMounted(() => {
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('mousemove', handleMouseMove)
  initializeColSizes()
})

onUnmounted(() => {
  document.removeEventListener('mouseup', handleMouseUp)
  document.removeEventListener('mousemove', handleMouseMove)
})

function initializeColSizes() {
  props.columns.forEach((c) => (colSizes.value[c] = 100 / props.columns.length))
}

function handleMouseDown(ev, columnGrabbed) {
  initialMouseX.value = ev.clientX
  initialColSize.value = colSizes.value[columnGrabbed]
  isResizing.value = columnGrabbed
}

function handleMouseUp() {
  if(!isResizing.value) {return}
  isResizing.value = null
  logger.log('🐁⬆️')
}

let throttleMouse = false
function handleMouseMove(ev) {
  if (!isResizing.value || throttleMouse) {return}
  throttleMouse = true
  setTimeout(() => (throttleMouse = false), 35)
  resizeColumn(ev, isResizing.value)
}

function resizeColumn(ev, columnKey) {
  const mouseMoveX = ev.clientX - initialMouseX.value
  const tableWidth = ev.target.closest('table').offsetWidth
  const newColSize = initialColSize.value + (mouseMoveX / tableWidth) * 100
  if (newColSize < minColWidth.value) {
    console.log(`Column ${columnKey} has reached the minimum width of ${minColWidth.value}%`)
    return
  }
  colSizes.value[columnKey] = Math.max(newColSize, minColWidth.value) // Ensure minimum column width
  // logger.log('🐁🔄️', mouseMoveX)
}
</script>


<template>
  <table class="table table-hover">
    <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="'table-head-'+index" :style="`--col-width: ${colSizes[column]}%`" :class="{resizing: isResizing == column, 'text-primary': lastSorted[0]== column}">
            <span @click="sortItemsBy(column)" class="sort-btn" >
              <i v-if="lastSorted[0]==null || lastSorted[0] != column" class="mdi mdi-menu-right"></i>
              <i v-else-if="lastSorted[1] ==1" class="mdi mdi-menu-up"></i>
              <i v-else class="mdi mdi-menu-down"></i>
            </span>
            <span>{{ column }}</span>
            <i @mousedown="(ev) => handleMouseDown(ev, column)" :title="`${colSizes[column]}%`" class="mdi mdi-dots-vertical handle"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="'table-data-'+rowIndex">
        <td v-for="(cell, colKey) in columns" :data-type="columns[cell]" :key="colKey" :style="`--col-width: ${colSizes[cell]}%`" :class="{resizing: isResizing == cell}">
          <span><Highlight :highlight>{{ row[cell] }}</Highlight></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<style lang="scss" scoped>
table {
  user-select: none;
  overflow: auto;
  .mdi{
    font-size: 1.25em;
  }
}

thead{
position: sticky;
top: 0;
}

tr {
  display: flex;
  box-sizing: border-box;
}

th {
  padding-left: 2.5ch;
  // flex-grow: 1;
  flex: 0 0 max( 12ch,var(--col-width));
  // width: var(--col-width);
  box-sizing: border-box;
  position: relative;
  background-color: rgba(var(--bs-dark-rgb),.1);
  overflow: hidden;
  &:last-of-type{
    flex: unset;
    flex-grow: 1;
  }
}

td {
  // flex-grow: 1;
  flex: 0 0 max( 12ch,var(--col-width));
  // width: var(--col-width);
  overflow: hidden;
  box-sizing: border-box;
  word-break: keep-all;
  overflow-wrap: normal;
  word-wrap: normal;
  // white-space: nowrap;
  text-overflow: ellipsis;
  &:last-of-type{
    flex: unset;
    flex-grow: 1;
  }
}

.sort-btn{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: .25em 0px;
  &:hover{
    background-color: var(--bs-primary);
    color: var(--bs-light);
    cursor: pointer;
  }
}

.handle{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: .25em 0px;
  border-right: 1px solid var(--bs-dark);

  &:hover {
    cursor: ew-resize;
    background-color: var(--bs-primary);
  }
}

.resizing{
  border-left: 1px solid var(--bs-primary);
  border-right: 1px solid var(--bs-primary);
  background-color: rgba(var(--bs-primary-rgb), .1);
}
</style>