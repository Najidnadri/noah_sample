<template>
  <footer class="footer w-100% ">
    <div class="top-part min-h-300px px-20px pt-60px">

        <div class="newsletter flex flex-col justify-start items-start h-100%">
            <h2 class="text-18px font-600">NEWSLATTER</h2>
            <div class="grid grid-cols-[auto_30px] items-center newsletter-input mt-10px w-100% max-w-300px">
                <input type="email" class="text-16px pr-10px py-5px primary-bg" placeholder="email"/>
                <icon :name="'material-symbols:arrow-right-alt'" class="secondary opacity-90 text-20px cursor-pointer" title="submit"/>
            </div>
            <div class="grid grid-cols-[15px_auto] mt-10px gap-5px cursor-pointer">
                <input type="checkbox" class="mt-5px cursor-pointer" v-model="checked"/>
                <p class="mt-10px text-12px opacity-80" @click="checked = !checked">I agree terms & condition</p>
            </div>
            
        </div>

        <div class="nav">
            <div class="socials col-span-2 text-16px secondary flex flex-col gap-6px">
                <a class="decoration-underline" href="#">INSTAGRAM</a>
                <a class="decoration-underline" href="#">TELEGRAM</a>
                <a class="decoration-underline" href="#">YOUTUBE</a>
            </div>
            <div class="about col-span-1 ">
                <h3 class="text-18px font-550">ABOUT</h3>
                <nav class="mt-10px flex flex-col gap-6px secondary text-16px">
                    <a>Blog</a>
                    <a>Stores</a>
                    <a>Archive</a>
                    <a>Not Dead Yet</a>
                </nav>
            </div>
            <div class="help col-span-1">
                <h3 class="text-18px font-550">HELP</h3>
                <nav class="mt-10px flex flex-col gap-6px secondary text-16px">
                    <a>FAQ</a>
                    <a>Contact</a>
                    <a>Returns</a>
                    <a>Careers</a>
                </nav>
            </div>
        </div>

    </div>
    <div class="bottom-part flex flex-row justify-between items-center secondary h-50px w-100% px-20px text-15px">
        <a>Policies</a>
        <a>Privacy</a>
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
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}

.newsletter-input {
    border-bottom: 2px solid rgba(0, 0, 0, 0.5)
}

input:focus {
    outline: none;
}

.nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

a {
    opacity: 0.7;
    transition: all 0.3s ease;
}

a:hover {
    opacity: 1;
}
</style>