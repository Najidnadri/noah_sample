<template>
  <footer class="footer w-100% ">
    <div class="top-part min-h-300px px-20px py-60px">

        <div class="newsletter flex flex-col justify-start items-start h-100%">
            <h2 class="text-18px font-600">NEWSLATTER</h2>
            <div class="grid grid-cols-[auto_30px] items-center newsletter-input mt-10px w-100% max-w-300px">
                <input type="email" class="text-16px pr-10px py-5px primary-bg" placeholder="email"/>
                <icon :name="'material-symbols:arrow-right-alt'" class="secondary opacity-90 text-20px cursor-pointer" title="submit"/>
            </div>
            <div class="grid grid-cols-[15px_auto] mt-10px gap-5px cursor-pointer">
                <input type="checkbox" class="mt-5px cursor-pointer" v-model="checked" id="terms-checkbox"/>
                <label for="terms-checkbox" class="mt-10px text-12px opacity-80" @click="checked = !checked">I agree terms & condition</label>
                <!-- <p class="mt-10px text-12px opacity-80" @click="checked = !checked">I agree terms & condition</p> -->
            </div>
            
        </div>

        <div class="socials text-16px secondary gap-6px">
            <nuxt-link class="decoration-underline" :to="'/'">INSTAGRAM</nuxt-link>
            <nuxt-link class="decoration-underline" :to="'/'">TELEGRAM</nuxt-link>
            <nuxt-link class="decoration-underline" :to="'/'">YOUTUBE</nuxt-link>
        </div>

        <div class="about col-span-1 ">
            <h3 class="text-18px font-550">ABOUT</h3>
            <nav class="mt-10px flex flex-col gap-6px secondary text-16px">
                <nuxt-link :to="'/'">Blog</nuxt-link>
                <nuxt-link :to="'/'">Stores</nuxt-link>
                <nuxt-link :to="'/'">Archive</nuxt-link>
                <nuxt-link :to="'/'">Not Dead Yet</nuxt-link>
            </nav>
        </div>

        <div class="help col-span-1">
            <h3 class="text-18px font-550">HELP</h3>
            <nav class="mt-10px flex flex-col gap-6px secondary text-16px">
                <nuxt-link :to="'/'">FAQ</nuxt-link>
                <nuxt-link :to="'/'">Contact</nuxt-link>
                <nuxt-link :to="'/'">Returns</nuxt-link>
                <nuxt-link :to="'/'">Careers</nuxt-link>
            </nav>
        </div>

    </div>


    <div class="bottom-part flex flex-row justify-between items-center secondary h-50px w-100% px-20px text-15px">
        <nuxt-link :to="'/'">Policies</nuxt-link>
        <nuxt-link :to="'/'">Privacy</nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
    setup() {
        let checked = ref(false);

        return {checked}
    }
}
</script>

<style scoped>
.footer {
    border-top: 2px solid rgba(0, 0, 0, 0.2);
}

.top-part {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}



.newsletter-input {
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}


.about {
    grid-column: span 1;
}

.help {
    grid-column: span 1;
}

input:focus {
    outline: none;
}

a {
    opacity: 0.7;
    transition: all 0.3s ease;
}

a:hover {
    opacity: 1;
}
</style>

<style scoped>
.top-part {
    gap: 30px;
}
.socials {
    grid-row: 3;
    grid-column: span 8;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.newsletter {
    grid-column: span 8;
}

.about {
    grid-column: 1 / span 3;
    grid-row: 2;
}

.help {
    grid-column: 6 / span 3;
    grid-row: 2;
}

@media only screen and (min-width: 685px) {
.top-part {
    gap: 0px;
}

.newsletter {
    grid-column: span 4;
}

.about {
    grid-column: 7 / span 1;
    grid-row: auto;
}

.help {
    grid-column: 8 / span 1;
    grid-row: auto;
}
}

@media only screen and (min-width: 810px) {
.socials {
    grid-row: auto;
    grid-column: span 2;

    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-bottom: 0;
}


}
</style>