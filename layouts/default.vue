<template>
  <div class="default-layout relative">
    <Nav1Vue />
    <slot />
    <FooterVue />
  </div>
</template>

<script>
import Nav1Vue from '../components/Nav1.vue'
import FooterVue from '../components/Footer.vue';

export default {
    components: {
        Nav1Vue,
        FooterVue
    }
}
</script>

<style>

</style>