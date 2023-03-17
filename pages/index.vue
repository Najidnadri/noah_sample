<template>
    <div>
        <heroVue />
        <NewArrivalsVue />
        <LookbooksVue />
        <BestsellersVue />
        <AboutVue />
        <Blog />
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
    }
}
</script>

<style>

</style>