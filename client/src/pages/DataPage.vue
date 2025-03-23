<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const collection = computed(()=> route.params.collection)

</script>


<template>
{{ collection }}
</template>


<style lang="scss" scoped>

</style>