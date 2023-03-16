<template>
  <header class="header absolute left-0 right-0 top-0 h-70px z-99">
    <div class="flex flex-row justify-between items-center primary h-100% w-100% max-w-1400px mx-auto px-20px relative gap-50px">
        <ul class="flex flex-row justify-start items-center gap-10px text-16px">
            <li>Shop</li>
            <li>Lookbooks</li>
            <li>Fabrics</li>
            <li>About</li>
        </ul>
        <h1 class="absolute left-50% text-center mx--10px text-20px tracking-3px font-700">NOAH</h1>
        <div class="flex flex-row justify-end items-center gap-15px text-20px">
            <icon :name="'ic:outline-search'"/>
            <icon :name="'material-symbols:shopping-bag-outline'" />
        </div>
    </div>

  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    border-bottom: 1px solid var(--primary-color);
    background: rgba(0,0,0,0.3);
}

li, h1, svg {
    cursor: pointer;
}
</style>