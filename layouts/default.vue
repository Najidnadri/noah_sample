<template>
  <div class="default-layout relative" data-scroll-container>
    <Nav1Vue />
    <slot />
    <FooterVue data-scroll-section />
  </div>
</template>

<script>
import Nav1Vue from '../components/Nav1.vue'
import FooterVue from '../components/Footer.vue';

export default {
    components: {
        Nav1Vue,
        FooterVue
    },
    setup() {
        let {$LocomotiveScroll} = useNuxtApp();
        let scroll = null;

        onMounted(() => {
            scroll = new $LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true
            })
            console.log(scroll)
        })
        
    }
}
</script>

<style>

</style>