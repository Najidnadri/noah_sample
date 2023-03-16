<template>
  <div class="default-layout relative">
    <Nav1Vue />
    <slot />
  </div>
</template>

<script>
import Nav1Vue from '../components/Nav1.vue'

export default {
    components: {
        Nav1Vue
    }
}
</script>

<style>

</style>