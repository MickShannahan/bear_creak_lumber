<script setup>
import { TestState } from '@/AppState.js';
import { computed } from 'vue';
import Icon from '@/components/globals/Icon.vue'

const salesNavLInks = computed(()=> TestState.siteNavigation.filter(l => l.group == 'sales'))
const freightsNavLInks = computed(()=> TestState.siteNavigation.filter(l => l.group == 'freights'))
const adminNavLinks = computed(()=> TestState.siteNavigation.filter(l => l.group == 'admin'))
</script>

<template>
<div class="position-relative h-100">
  <section class="bg-body nav-wrapper pt-0">
    <nav>
      <div class="sticky-top d-flex flex-column gap-1">
        <hr data-menu-title="Sales"/>
      <RouterLink v-for="link in salesNavLInks" :key="link.name" :to="link.route" class="router-link selectable">
        <button class="btn link-btn py-0">
          <i :class="`fs-5 mdi bi ${link.icon}`"></i>
          <span class="link-name">{{ link.name }}</span>
        </button>
      </RouterLink>
      <hr data-menu-title="Freights"/>
      <RouterLink v-for="link in freightsNavLInks" :key="link.name" :to="link.route" class="router-link selectable">
        <button class="btn link-btn py-0">
          <i :class="`fs-5 mdi bi ${link.icon}`"></i>
          <span class="link-name">{{ link.name }}</span>
        </button>
      </RouterLink>
      <hr data-menu-title="Admin"/>
      <RouterLink v-for="link in adminNavLinks" :key="link.name" :to="link.route" class="router-link selectable">
        <button class="btn link-btn py-0">
          <i :class="`fs-5 mdi bi ${link.icon}`"></i>
          <span class="link-name">{{ link.name }}</span>
        </button>
      </RouterLink>
      <hr data-menu-title="Links"/>
      ...
    </div>
  </nav>
  <div class="flex-grow-1"></div>
  <RouterLink to="/account">
    <button class="btn">
      <i class="mdi mdi-account-circle"></i>
      <span class="link-name">Account</span>
    </button>
  </RouterLink>
  <span class="alert-btn">
    <button class="btn">
      <i class="mdi mdi-bell"></i>
      <span class="link-name">alerts</span>
    </button>
  </span>
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

// note line break with title
hr[data-menu-title]{
  margin-top: .5em;
  margin-bottom: .45em;
  border: 1px solid var(--bs-light);
  display: inline-block;
  &::after{
    background-color: var(--bs-dark);
    color: var(--bs-light);
    content: attr(data-menu-title);
    padding: .25em .25em;
    border-radius: 4px;
    position: absolute;
    left: 1.25em;
    transform: translateY(-60%);
    opacity: 0;
    transition: all .2s ease;
    font-size: 14px;
  }
}

.nav-wrapper:hover hr[data-menu-title]{
  opacity: .55;
  &::after{
    opacity: 1;
  }
}

nav {
  // height: 100%;
  display: flex;
  flex-direction: column;

}

button.btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: .5em 1em;
  transition: all 0.3s ease;
  font-size: 14px;
  color: unset;
}

.link-name {
  max-width: 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-left: 0em; 
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
  color: rgba(var(--bs-link-color-rgb), .9);
}

.router-link-active{
    color: var(--bs-light);
    background-color: rgba(var(--bs-primary-rgb), .2);
}

// alert btn
.alert-btn{
  position: sticky;
  bottom: 0;
  color: var(--bs-light);
}

</style>