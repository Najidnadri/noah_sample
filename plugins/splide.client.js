import { Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { Grid } from '@splidejs/splide-extension-grid';

const VueSplide = {
    install(app) {
      app.component(Splide.name, Splide);
      app.component(SplideSlide.name, SplideSlide);
      app.component(SplideTrack.name, SplideTrack);
    }
  };

export default defineNuxtPlugin(nuxtapp => {
    nuxtapp.vueApp.use(VueSplide);
    return {
      provide: {
        autoScroll: AutoScroll,
        grid: Grid
      }
    }
}) 

/*
 EDITED THE 'vue-splide.esm.js' file:
 2761: install(): 
 added this line 'app.component(SplideTrack.name, SplideTrack);'
 VueSplide version: ^0.6.12
 splide version: ^4.1.4
*/