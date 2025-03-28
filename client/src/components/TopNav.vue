<script setup>
import { TestState } from '@/AppState.js';
import { computed } from 'vue';


// const salesNavLInks = computed(()=> TestState.siteNavigation)
const salesNavLInks = computed(()=> [])

</script>

<template>
<div class="container-fluid h-100">
  <section class="row align-items-center h-100">
    <div class="col-1">
      <h5>Bear Creek</h5>
    </div>
    <nav class="col h-100 d-flex align-items-end" >
        <RouterLink
        v-for="link in salesNavLInks" :key="link.name"
         :to="`${link.route}`"
          class="pb-3 p-2 router-link">
          <span>{{ link.alias ?? link.name }}</span>
        </RouterLink>
    </nav>
    <div class="col-2">
      <button class="btn">Something</button>
    </div>
  </section>
</div>
</template>


<style lang="scss" scoped>
nav{
 display: flex;
 gap: 2px;
}

.router-link{
  --tab-radius: 10px;
  text-decoration: none;
  border-top-left-radius: var(--tab-radius);
  border-top-right-radius: var(--tab-radius);
  border: 1px solid rgba(255, 255, 255, 0.164);
  border-bottom: 0;
  min-width: 12ch;
  text-align: center;
  min-height: 70%;
  transition: all .2s linear;
  font-weight: bold;
}

.router-link-active{
  background-color: var(--bs-light);
  // min-height: 80% !important;
}
</style>