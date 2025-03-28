<script setup>
import {  ref,  watch } from 'vue';


const props = defineProps({
  highlight: {type: String, default: ''},
  text: {type: String, default: ''},
  color: {type: String, default: 'primary'}
})

const width = ref(0)
const offset = ref(0)

watch(props, ()=>{
  let match = props.highlight
  let ogText = props.text
  const start = ogText?.indexOf(match)
  if(start >= 0){
    width.value = match?.length
    offset.value = (ogText?.length * -1) + start
  } else {
    width.value = 0
    offset.value = 0
  }

},{immediate: true})

</script>


<template>
<span ref="original" class="_highlight" :style="`--highlight: rgba(var(--bs-${color}-rgb), .25); --h-width: ${width}ch; --h-offset: ${offset}ch;`">
  {{ text }}
</span>
</template>


<style lang="scss" scoped>
._highlight::after{
  content: '';
  pointer-events: none;
  display: inline-block;
  height: .5em;
  background-color: var(--highlight);
  width: var(--h-width);
  margin-left: calc(var(--h-offset));
  margin-top: 2px;
  transform: translateY(.25em);
}
</style>