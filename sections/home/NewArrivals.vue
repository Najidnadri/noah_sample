<template>
  <div class="new-arrivals-section my-90px w-100% max-w-1400px mx-auto min-h-400px px-20px">
    <div class="sub-header flex flex-row justify-between items-end">
        <h2 class="text-25px font-600 font-oswald tracking-2px">NEW - ARRIVALS</h2>
        <nuxt-link :to="''" class="text-16px">See more +</nuxt-link>
    </div>

    <div class="items w-100% gap-20px py-40px overflow-visible">
        <div class="item cursor-pointer">
            <div class="product-image w-100% h-100%">
                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/KN107SS23_MANDARIN_COLLAR_RUGBY_0261_1200x.jpg?v=1678156911" class="w-100% h-100% object-cover"/>
            </div>
            <div class="product-description flex flex-col justify-start items-start font-courier text-16px">
                <p>Two-Pocket Lightweight Flannel</p>
                <p class="opacity-70">$38</p>
            </div>
        </div>
        <div class="item cursor-pointer">
            <div class="product-image w-100% h-100%">
                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/H078SS23_CHAINSTITCH_6_PANEL_1072_1000x.jpg?v=1675445277" class="w-100% h-100% object-cover"/>
            </div>
            <div class="product-description flex flex-col justify-start items-start font-courier text-16px">
                <p>NOAH X JESUS PIECE BAND TEE</p>
                <p class="opacity-70">$38</p>
            </div>
        </div>
        <div class="item cursor-pointer">
            <div class="product-image w-100% h-100%">
                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/KN101SS23_STRIPED_PRACTICE__0186_1000x.jpg?v=1678156642" class="w-100% h-100% object-cover"/>
            </div>
            <div class="product-description flex flex-col justify-start items-start font-courier text-16px">
                <p>Two-Pocket Lightweight Flannel</p>
                <p class="opacity-70">$38</p>
            </div>
        </div>
        <div class="item cursor-pointer">
            <div class="product-image w-100% h-100%">
                <img src="https://cdn.shopify.com/s/files/1/1007/8070/products/P2NOAH_1_1000x.jpg?v=1629327245" class="w-100% h-100% object-cover"/>
            </div>
            <div class="product-description flex flex-col justify-start items-start font-courier text-16px">
                <p>Two-Pocket Lightweight Flannel</p>
                <p class="opacity-70">$38</p>
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
.items {
    display: grid;
    place-items: center;
    align-items: center;
}

.item {
    width: 280px;
    height: 500px;

    display: grid;
    grid-template-rows: 85% auto;
    gap: 10px;

    transition: all 0.6s ease;
}

.item:hover {
    transform: rotateZ(0deg) !important;
}

.product-image {
    border: 2px solid var(--secondary-color);
}

</style>

<style scoped>
.item:nth-child(1) {
    transform: rotateZ(3deg);
}

.item:nth-child(2) {
    transform: rotateZ(-5deg);
}

.item:nth-child(3) {
    transform: rotateZ(2deg);
}

.item:nth-child(4) {
    transform: rotateZ(5deg);
}
</style>

<style scoped>

.items {
    grid-template-columns: 1fr 1fr;
}

.item {
    width: 40vw;
    height: auto;
    aspect-ratio: 3 / 5;
}

.item:nth-child(3) {
    display: none;
}

.item:nth-child(4) {
    display: none;
}

@media only screen and (min-width: 600px) {
.items {
    grid-template-columns: 1fr 1fr 1fr;
}
.item:nth-child(3) {
    display: grid;
}

.item {
    width: 27vw;
}
}

@media only screen and (min-width: 1015px) {

.item {
    width: 280px;
    height: 500px; 
}

}



@media only screen and (min-width: 1350px) {
.items {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.item:nth-child(4) {
    display: grid;
}
}


</style>