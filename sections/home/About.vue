<template>
    <div class="about-section my-90px w-100% mx-auto min-h-400px">

        <div class="sub-header flex flex-row justify-between items-end px-20px pb-10px">
            <h2 class="text-25px font-600 font-oswald tracking-2px">ABOUT US</h2>
            <nuxt-link :to="''" class="text-16px decoration-underline">See more +</nuxt-link>
        </div>

        <div class="about-content w-100% px-20px">
            <div class="left-part flex flex-col justify-between items-start gap-30px">
                <div class="about-description grid grid-cols-[1fr_1fr] font-courier secondary opacity-90 text-16px gap-10px">
                    <p>We are not a sustainable company. There's no such thing, but that doesn't mean we shouldn't try. Because if everyone tries, we're all better off</p>
                    <p>We are inspired by what we love-the culture and people in music, skateboarding, creativity, surfing, social and environmental justice, and New York.</p>
                </div>
                <div class="w-100% max-w-300px h-150px">
                    <img class="w-100% h-100% object-cover grayscale-100" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/LOUIE-NOAH-49.jpg?v=1678541972&width=500"/>
                </div>
            </div>
            <div class="right-part w-100% ">
                <img class="w-100% h-100% object-cover grayscale-100" src="https://cdn.shopify.com/s/files/1/1007/8070/articles/Slice_1.jpg?v=1661356192&width=500"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-content {
    display: grid;
    gap: 20px;
}
</style>

<style scoped>
.about-content {
    grid-template-columns: auto;
}

.left-part p {
    font-size: 15px;
}

.about-description {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
}

.right-part {
    display: none;
}




@media only screen and (min-width: 340px) {
.about-description {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}
}

@media only screen and (min-width: 600px) {

.about-content {
    grid-template-columns: 1fr 1fr;
}

.left-part p {
    font-size: 16px;
}

.right-part {
    display: block;
}
}
</style>