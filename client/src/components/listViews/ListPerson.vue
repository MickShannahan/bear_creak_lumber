<script setup>

const props = defineProps({
  data: {type: Object}
})

</script>


<template>
<section class="d-flex gap-2">
  <span><i class="mdi mdi-account-outline"></i> {{ data.firstName }} {{ data.lastName }} </span>
  <span v-if="data.email"><i class="mdi mdi-email-outline"></i>{{ data.email }} </span>
  <span v-if="data.address"><i class="mdi mdi-map-marker-outline"></i>{{ data.state }}  {{data.city}} {{ data.address }} </span>
</section>
</template>


<style lang="scss" scoped>

</style>