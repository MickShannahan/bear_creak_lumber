<script setup>
import { RouterView } from 'vue-router';
import TopNav from './components/TopNav.vue';
import SideNav from './components/SideNav.vue';

</script>

<template>
  <header data-bs-theme="dark" class="bg-body text-light">
    <TopNav/>
  </header>
  <section data-bs-theme="dark">
    <SideNav/>
  </section>
  <main class="p-4">
    <RouterView/>
  </main>
</template>

<style lang="scss">

#app{
  height: 100dvh;
  // grid
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-rows: 74px 1fr;
  overflow: hidden;
}

main{
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  overflow: auto;
}

header{
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}

</style>
