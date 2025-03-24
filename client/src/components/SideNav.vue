<script setup>
import { TestState } from '@/AppState.js';
import { computed } from 'vue';

const navigationLinks = computed(()=> TestState.navigation)
</script>

<template>
<div class="position-relative h-100">
  <section class="bg-body nav-wrapper">
    <nav>
      <div class="sticky-top d-flex flex-column gap-2">
      <RouterLink v-for="link in navigationLinks" :key="link.name" :to="link.route" class="router-link selectable">
        <button class="btn link-btn">
          <i :class="`fs-5 mdi mdi-${link.icon}`"></i>
          <span class="link-name">{{ link.name }}</span>
        </button>
      </RouterLink>
    </div>
  </nav>
  <div class="flex-grow-1"></div>
  <div class="alert-btn">
    <button class="btn">
      <i class="mdi mdi-bell"></i>
    </button>
  </div>
</section>
</div>
</template>


<style lang="scss" scoped>
.nav-wrapper {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  // bottom: 0;
  // min-width: 100%;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: .65em;
  &:hover::after{
    position: absolute;
    top: 0;
    right: -3px;
    content: '';
    filter: blur(5px);
    width: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
  }
}

nav {
  // height: 100%;
  display: flex;
  flex-direction: column;

  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding: .5em 1em;
    transition: all 0.3s ease;
    color: rgba(var(--bs-light), .7);
  }

  .link-name {
    max-width: 0;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-left: 0em; 
  }

 
}

// link grow effect
.nav-wrapper:hover{
    .link-name {
      max-width: 500px; 
      opacity: 1;
      margin-left: .5em; 
    }
}

.router-link{
  border-radius: var(--border-radius);
  display: flex;
}

.router-link-active{
    color: var(--bs-light);
    background-color: rgba(var(--bs-primary-rgb), .2);
}

// alert btn
.alert-btn{
  position: sticky;
  bottom: 0;
}

</style>