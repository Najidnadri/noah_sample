<template>
    <div class="bestsellers-section my-90px w-100% mx-auto min-h-400px relative z-10 ">

        <div class="sub-header flex flex-row justify-between items-end px-20px pb-10px">
            <h2 class="text-25px font-600 font-oswald tracking-2px">BESTSELLERS</h2>
            <nuxt-link :to="''" class="text-16px decoration-underline">See more +</nuxt-link>
        </div>

        <!-- Desktop -->
        <div class="desktop bestsellers-content mt-20px w-100% px-20px">
            <div class="bestsellers w-100%">
                <div class="bestseller w-100% flex justify-center items-center p-20px">
                    <div class="item w-100% cursor-pointer">
                        <div class="item-header">
                            <h3 class="text-16px font-550">NOAH X JESUS PIECE RUGBY</h3>
                            <p class="text-16px opacity-90  font-courier">$188</p>
                        </div>
                        <div class="item-img w-100% h-100% mt-15px">
                            <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/S068SS23_SHORT_SLEEVE_FLANNEL_0450_1000x.jpg?v=1677886843" class="w-100% h-100% object-cover"/>
                        </div>
                    </div>
                </div>
                <div class="bestseller w-100% flex justify-center items-center p-20px ">
                    <div class="item w-100% cursor-pointer">
                        <div class="item-header">
                            <h3 class="text-16px font-550">COUNTRY JACKET</h3>
                            <p class="text-16px opacity-90  font-courier">$798</p>
                        </div>
                        <div class="item-img w-100% h-100% mt-15px">
                            <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/KN110SS23_RUGBY_POCKET_CARDIGAN_0636_1000x.jpg?v=1678308267" class="w-100% h-100% object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <ClientOnly >
            <Splide class="mobile bestsellers-content mt-20px w-100% px-20px splide" :options="splideOption" :has-track="false" @splide:mounted="splideMountedMove" @splide:move="splideMountedMove">
                <SplideTrack>

                    <SplideSlide class="slide w-100% h-100% overflow-hidden bestseller flex justify-center items-center p-20px pb-0px">
                        <div class="item w-100% cursor-pointer h-100% grid grid-rows-[auto_auto]">
                            <div class="item-header">
                                <h3 class="text-16px font-550">NOAH X JESUS PIECE RUGBY</h3>
                                <p class="text-16px opacity-90  font-courier">$188</p>
                            </div>
                            <div class="item-img  mx-auto mt-20px">
                                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/S068SS23_SHORT_SLEEVE_FLANNEL_0450_1000x.jpg?v=1677886843" class="w-100% h-100% object-cover"/>
                            </div>
                        </div>                    
                    </SplideSlide>

                    <SplideSlide class="slide w-100% h-100% overflow-hidden bestseller flex justify-center items-center p-20px pb-0px">
                        <div class="item w-100% cursor-pointer h-100% grid grid-rows-[auto_auto]">
                            <div class="item-header">
                                <h3 class="text-16px font-550">COUNTRY JACKET</h3>
                                <p class="text-16px opacity-90  font-courier">$798</p>
                            </div>
                            <div class="item-img mt-20px mx-auto">
                                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/KN110SS23_RUGBY_POCKET_CARDIGAN_0636_1000x.jpg?v=1678308267" class="w-100% h-100% object-cover"/>
                            </div>
                        </div>                    
                    </SplideSlide>

                </SplideTrack>

                <div class="my-slider-progress">
                    <div class="my-slider-progress-bar" ref="bar"></div>
                </div>

            </Splide>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    setup() {
        let bar = ref(null);
        let splideOption = {
            pagination: false,
            perPage: 1,
            hasTrack: false,
            arrows: false
        };

        let splideMountedMove = (splideEvt) => {
            var end  = splideEvt.Components.Controller.getEnd() + 1;
            var rate = Math.min( ( splideEvt.index + 1 ) / end, 1 );
            bar.value.style.width = String( 100 * rate ) + '%';
        }


        return { splideOption, bar, splideMountedMove }
    }
}
</script>

<style scoped>
.bestsellers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    place-items: center;
}

.desktop .bestseller {
    aspect-ratio: 1 / 1;
    grid-auto-rows: 1fr;
    max-height: 500px;
}

.desktop .item {
    aspect-ratio: 1 / 1;
    max-width: 450px;
    max-height: 450px;
}
</style>


<style scoped>
.desktop .bestseller:nth-child(1) {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    border-right: 2px solid rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.desktop .bestseller:nth-child(2) {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.mobile .bestseller {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}


</style>

<style scoped>
.mobile {
    display: block;
}

.desktop {
    display: none;
}

.mobile .item-img {
    width: 100%;
    height: 100%;
    margin-top: 0;
}

@media only screen and (min-width: 350px) {
.mobile .item-img {
    width: 85%;
    height: 85%;
    margin-top: 20px
}
}

@media only screen and (min-width: 600px) {
.desktop {
    display: block;
}

.mobile {
    display: none;
}
}
</style>


<style scoped>
.splide__arrows.custom .splide__arrow {
    opacity: 0.8;
    border-radius: 0;
    background: none;
    top: 50%;
    display: flex;
}

.splide__arrows.custom .splide__arrow:hover {
    opacity: 1;
}

.splide__arrows.custom .splide__arrow--prev {
    left: 3em
}

.splide__arrows.custom .splide__arrow--next {
    right: 3em;
}

.my-slider-progress {
    width: 100%;
    max-width: 100px;
    height: 4px;
    margin: 0 auto;
    margin-top: 20px;
    background: #ccc;
  }
  
  .my-slider-progress-bar {
    background: var(--secondary-color);
    height: 4px;
    transition: width 400ms ease;
    width: 0;
  }
</style>