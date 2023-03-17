<template>
    <div>
        <heroVue />
        <NewArrivalsVue />
        <LookbooksVue />
        <BestsellersVue />
    </div>

</template>

<script>
import NewArrivalsVue from '../sections/home/NewArrivals.vue'
import heroVue from '../sections/home/hero.vue'
import LookbooksVue from '../sections/home/Lookbooks.vue'
import BestsellersVue from '~~/sections/home/Bestsellers.vue'

export default {
    components: {
        heroVue,
        NewArrivalsVue,
        LookbooksVue,
        BestsellersVue
    }
}
</script>

<style>

</style>