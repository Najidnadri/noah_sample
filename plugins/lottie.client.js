import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css'

export default defineNuxtPlugin(nuxtapp => {
    nuxtapp.vueApp.use(Vue3Lottie);
}) 

/*
 EDITED THE 'vue-splide.esm.js' file:
 2761: install(): 
 added this line 'app.component(SplideTrack.name, SplideTrack);'
 VueSplide version: ^0.6.12
 splide version: ^4.1.4
*/