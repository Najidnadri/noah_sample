<template>
    <div class="blog-section my-90px w-100% mx-auto min-h-400px">

        <div class="sub-header flex flex-row justify-between items-end px-20px pb-10px">
            <h2 class="text-25px font-600 font-oswald tracking-2px">BLOG</h2>
            <nuxt-link :to="''" class="text-16px decoration-underline">See more +</nuxt-link>
        </div>

        <!-- Desktop -->
        <div class="desktop blog-content w-100% px-20px mt-20px">
            <div class="blogs w-100%">
                <div class="blog p-15px w-100%">
                    <img class="w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22-Shinnecock-Cover.jpg?v=1669043678&width=500"/>
                    <h3 class="text-16px font-550 mt-15px">Shinnecock Kelp Farmers</h3>
                    <p class="text-16px mt-10px opacity-90">Kelp forests are a vital part of the marine ecosystem and food web...</p>
                </div>

                <div class="blog p-15px w-100%">
                    <img class="w-100% object-cover h-300px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22GUIDE-Cover.jpg?v=1670311374&width=500"/>
                    <h3 class="text-16px font-550 mt-15px">The Holiday 2022 Gift Guide</h3>
                    <p class="text-16px mt-10px opacity-90">Our theme for this year's guide is Gifts that Keep on Giving...</p>
                </div>

                <div class="blog p-15px w-100%">
                    <img class="w-100% object-cover h-200px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/44143_CBA_NOAH_Barbour22_013_03.jpg?v=1668699564&width=500"/>
                    <h3 class="text-16px font-550 mt-15px">Noah x Barbour</h3>
                    <p class="text-16px mt-10px opacity-90">During the outdoor craze of the 1960s, a new technical fabric was introduced in the...</p>
                </div>

                <div class="blog p-15px w-100%">
                    <img class="w-100% object-cover  h-350px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22-0120-Cover.jpg?v=1673415175&width=500"/>
                    <h3 class="text-16px font-550 mt-15px">Catching Up With Josh Peterson</h3>
                    <p class="text-16px mt-10px opacity-90">A student of the old school, traditionalist approach to making surfboards, Josh Peterson cut his teeth and earned his...</p>
                </div>

                <div class="blog p-15px w-100%">
                    <img class="w-100% object-cover h-330px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/SS23-0227-CORDUROY-Cover.jpg?v=1677459552&width=500"/>
                    <h3 class="text-16px font-550 mt-15px">Spring '23 Corduroy</h3>
                    <p class="text-16px mt-10px opacity-90">We’ve become known for pants - maybe a weird thing to be known for, but it was one of the first product...</p>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <ClientOnly >
            <Splide class="mobile blog-content w-100% px-20px mt-20px splide" :options="splideOption" :has-track="false" ref="splide" >
                <SplideTrack>
                    <SplideSlide class="slide w-100% h-100% overflow-hidden blog p-15px">
                        <img class="w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22-Shinnecock-Cover.jpg?v=1669043678&width=500"/>
                        <h3 class="text-16px font-550 mt-15px">Shinnecock Kelp Farmers</h3>
                        <p class="text-16px mt-10px opacity-90">Kelp forests are a vital part of the marine ecosystem and food web...</p>
                    </SplideSlide>
                    <SplideSlide class="slide w-100% h-100% overflow-hidden blog p-15px">
                        <img class="w-100% object-cover h-300px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22GUIDE-Cover.jpg?v=1670311374&width=500"/>
                        <h3 class="text-16px font-550 mt-15px">The Holiday 2022 Gift Guide</h3>
                        <p class="text-16px mt-10px opacity-90">Our theme for this year's guide is Gifts that Keep on Giving...</p>
                    </SplideSlide>
                    <SplideSlide class="slide w-100% h-100% overflow-hidden blog p-15px">
                        <img class="w-100% object-cover h-200px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/44143_CBA_NOAH_Barbour22_013_03.jpg?v=1668699564&width=500"/>
                        <h3 class="text-16px font-550 mt-15px">Noah x Barbour</h3>
                        <p class="text-16px mt-10px opacity-90">During the outdoor craze of the 1960s, a new technical fabric was introduced in the...</p>
                    </SplideSlide>
                    <SplideSlide class="slide w-100% h-100% overflow-hidden blog p-15px">
                        <img class="w-100% object-cover  h-350px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/NOAH-FW22-0120-Cover.jpg?v=1673415175&width=500"/>
                        <h3 class="text-16px font-550 mt-15px">Catching Up With Josh Peterson</h3>
                        <p class="text-16px mt-10px opacity-90">A student of the old school, traditionalist approach to making surfboards, Josh Peterson cut his teeth and earned his...</p>
                    </SplideSlide>
                    <SplideSlide class="slide w-100% h-100% overflow-hidden blog p-15px">
                        <img class="w-100% object-cover h-330px" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/SS23-0227-CORDUROY-Cover.jpg?v=1677459552&width=500"/>
                        <h3 class="text-16px font-550 mt-15px">Spring '23 Corduroy</h3>
                        <p class="text-16px mt-10px opacity-90">We've become known for pants - maybe a weird thing to be known for, but it was one of the first product...</p>
                    </SplideSlide>
                </SplideTrack>

                <!-- <div class="splide__arrows custom">
                    <button class="splide__arrow splide__arrow--prev">
                        <Icon name="carbon:arrow-right" class="text-30px"/>
                    </button>
                    <button class="splide__arrow splide__arrow--next">
                        <Icon name="carbon:arrow-right" class="text-30px"/>
                    </button>
                </div> -->

            </Splide>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    setup() {
        let splide = ref(null);
        let splideOption = {
            padding: "5rem",
            drag: 'free',
            pagination: false,
            perPage: 3,
            hasTrack: false,
            arrows: false,
            breakpoints: {
                440: {
                    perPage: 1
                },
                875: {
                    perPage: 2,
                    padding: '3rem'
                },
            },
        };

        return { splideOption, splide }
    }
}
</script>

<style scoped>
.blogs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    align-items: flex-start;
}

.blog {
    width: 100%;
    cursor: pointer;
    border-top: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
}
</style>

<style scoped>

.mobile {
    display: block;
}

.desktop {
    display: none;
}

@media only screen and (min-width: 1200px) {
.desktop {
    display: block;
}

.mobile {
    display: none;
}
}
</style>

<style scoped>
.blog:nth-child(1), .blog:nth-child(6)  {
    border-left: 2px solid rgba(0, 0, 0, 0.4);
}

.blog:nth-child(2), .blog:nth-child(7)  {
    border-left: 2px solid rgba(0, 0, 0, 0.4);
    border-right: 2px solid rgba(0, 0, 0, 0.4);
}


.blog:nth-child(4), .blog:nth-child(9)  {
    border-left: 2px solid rgba(0, 0, 0, 0.4);
    border-right: 2px solid rgba(0, 0, 0, 0.4);
}

.blog:nth-child(5), .blog:nth-child(10)  {
    border-right: 2px solid rgba(0, 0, 0, 0.4);
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
    max-width: 400px;
    height: 4px;
    margin: 0 auto;
    margin-top: 50px;
    background: #ccc;
  }
  
  .my-slider-progress-bar {
    background: var(--secondary-color);
    height: 4px;
    transition: width 400ms ease;
    width: 0;
  }
</style>