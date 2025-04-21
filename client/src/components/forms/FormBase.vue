<script setup>
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref, watch } from 'vue';

const props = defineProps({
  formName : {type: String, default: 'default'},
  inputs: {type: Array, default: ()=> [{type: 'text', label: 'Test', key: 'test', required: true, size: 2}]},
  startingData: {type: Object}
})

const emit = defineEmits(['formSubmitted'])

const formData = ref({})

watch(()=>props.startingData, ()=> formData.value = {...props.startingData})

function submitForm(){
  try {
    logger.log('Submitted the form', formData.value)
    emit('formSubmitted', formData.value)
  } catch (error) {
    Pop.error(error, "Could Not Submit the Form")
  }
}

async function clearForm(){
  const confirm = await Pop.confirm("Are You Sure?", "The data in the form has not yet been saved")
  if(!confirm) {return}
  formData.value = {}
}

</script>


<template>
  <form @submit.prevent="submitForm" class="d-flex  flex-wrap">
    <div v-for="input in inputs" :key="`${formName}-${input.label}`" :class="`col-md-${input.size ?? 3}`" class="form-floating mb-2 px-2">
      <input :type="input.type" v-model="formData[input.key || input.label.toLowerCase()]" :required="input.required" class="form-control" :max="input.max" :min="input.min" :maxlength="input.maxlength ?? input.max" :minlength="input.minlength ?? input.min" :placeholder="input.placeholder ?? 'placeholder'">
      <label :for="`${formName}-${input.label}`" class="text-capitalize fw-bold ps-3">{{ input.label }}</label>
    </div>
    <div class="col-12 d-flex gap-2 justify-content-end">
      <slot name="buttons">
        <button type="button" @click="clearForm" class="btn text-secondary">clear form</button>
        <button  class="btn btn-primary py-2 px-4 text-light">Submit</button>
      </slot>
    </div>
    
  </form>
</template>


<style lang="scss" scoped>
.form-control{
  padding-top: .4rem;
}

.form-floating{
  &>label{
    font-family: var(--mono-font);
    color: rgba(var(--bs-primary-rgb), .8);
    filter:saturate(.3);
    // letter-spacing: .1em;
  }
  &>input:focus+label{
    filter:saturate(.8);
  }
}

.form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-control-plaintext ~ label, .form-floating > .form-select ~ label {
  transform: scale(0.875) translateY(-1rem) translateX(-0.25rem);
  color: rgba(var(--bs-primary-rgb), .8);
}
</style>