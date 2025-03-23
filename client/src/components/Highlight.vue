<script setup>
import { logger } from '@/utils/Logger.js';
import { onMounted, ref, useTemplateRef, watch } from 'vue';


const props = defineProps({
  highlight: {type: String, default: ''},
  color: {type: String, default: 'primary'}
})

const original = useTemplateRef('original')
const clone = useTemplateRef('clone')
const width = ref(0)
const offset = ref(0)

watch([original, props], ()=>{
  let match = props.highlight
  let ogText = original.value?.textContent
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
  <slot >
    highlight me 🖊️
  </slot>
</span>
</template>


<style lang="scss" scoped>
._highlight{
  font-family: var(--mono-font);
  font-weight: 600;
}

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