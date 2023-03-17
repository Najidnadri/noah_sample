<template>
    <div class="bestsellers-section my-90px w-100% mx-auto min-h-400px relative z-10 ">

        <div class="sub-header flex flex-row justify-between items-end px-20px pb-10px">
            <h2 class="text-25px font-600 font-oswald tracking-2px">BESTSELLERS</h2>
            <nuxt-link :to="''" class="text-16px decoration-underline">See more +</nuxt-link>
        </div>

        <div class="bestsellers-content mt-20px w-100% px-20px">
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bestsellers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    place-items: center;
}

.bestseller {
    aspect-ratio: 1 / 1;
    grid-auto-rows: 1fr;
    max-height: 500px;
}

.item {
    aspect-ratio: 1 / 1;
    max-width: 450px;
    max-height: 450px;
}
</style>

<style scoped>
.bestseller:nth-child(1) {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    border-right: 2px solid rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.bestseller:nth-child(2) {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
</style>