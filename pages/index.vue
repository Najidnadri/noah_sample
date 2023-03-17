<template>
    <div>
        <heroVue data-scroll-section />
        <NewArrivalsVue data-scroll-section />
        <LookbooksVue  data-scroll-section />
        <BestsellersVue data-scroll-section />
        <AboutVue data-scroll-section />
        <Blog data-scroll-section />
    </div>

</template>

<script>
import NewArrivalsVue from '../sections/home/NewArrivals.vue'
import heroVue from '../sections/home/hero.vue'
import LookbooksVue from '../sections/home/Lookbooks.vue'
import BestsellersVue from '~~/sections/home/Bestsellers.vue'
import AboutVue from '../sections/home/About.vue'
import Blog from '../sections/home/Blog.vue'

export default {
    components: {
        heroVue,
        NewArrivalsVue,
        LookbooksVue,
        BestsellersVue,
        AboutVue,
        Blog
    },
    setup() {
        // let {$LocomotiveScroll} = useNuxtApp();
        // let scroll = null;

        // onMounted(() => {
        //     scroll = new $LocomotiveScroll({
        //         el: document.querySelector('[data-scroll-container]'),
        //         smooth: true
        //     })
        //     console.log(scroll)
        // })
        
    }
}
</script>

<style>

</style>