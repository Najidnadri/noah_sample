<template>
  <div class="lookbooks-section my-90px w-100% mx-auto min-h-400px">

    <div class="sub-header flex flex-row justify-between items-end px-20px pb-10px">
        <h2 class="text-25px font-600 font-oswald tracking-2px">LOOKBOOKS</h2>
        <nuxt-link :to="''" class="text-16px decoration-underline">See more +</nuxt-link>
    </div>

    <div class="lookbooks-content px-20px relative overflow-visible" :style="{cursor: cursor.visible === 1 ? 'none' : 'default'}">
        <div class="custom-cursor h-300px w-250px absolute secondary-bg z-90" :style="{opacity: cursor.visible, top: cursor.y + 'px', left: cursor.x + 'px'}">
            <img v-show="cursor.hoverIndex === 0" class="absolute h-100% w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/products/SS112SS23_NOAH_LAVENHAM_QUILTED_CREWNECK_0089_1000x.jpg?v=1678157850" />
            <img v-show="cursor.hoverIndex === 1" class="absolute h-100% w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/products/230113_SHOT_16_025_1000x.jpg?v=1678308554"/>
            <img v-show="cursor.hoverIndex === 2" class="absolute h-100% w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/products/B052SS23_SUEDE_SHOULDER_BAG_0498_1000x.jpg?v=1678206764"/>
            <img v-show="cursor.hoverIndex === 3" class="absolute h-100% w-100% object-cover" src="https://cdn.shopify.com/s/files/1/1007/8070/products/230113_SHOT_29_051_8844bef4-e9eb-4b6f-9042-e44e03a1dc79_1000x.jpg?v=1677715058"/>
        </div>

        <div class="lookbook relative min-h-80px py-20px" :style="{opacity: lookbooks[3].hover ? 1 : 0.7}">
            <div class="lookbook-title text-24px font-600">
                <h3>FALL / WINTER `22</h3>
            </div>
            <div class="lookbook-description text-18px font-courier">
                <p class="max-w-400px">The more things change, the more they stay the same</p>
                <icon :name="'material-symbols:arrow-outward-sharp'" class="text-30px secondary translate-x-10px"/>
            </div>
        </div>

        <div class="lookbook relative min-h-80px py-20px" :style="{opacity: lookbooks[2].hover ? 1 : 0.7}">
            <div class="lookbook-title text-24px font-600">
                <h3>SPRING / SUMMER 2022 LOOKS</h3>
            </div>
            <div class="lookbook-description text-18px font-courier">
                <p class="max-w-600px">Noah Spring / Summer 22 will launch on the dates below, with new products releasing every thursday through July</p>
                <icon :name="'material-symbols:arrow-outward-sharp'" class="text-30px secondary translate-x-10px"/>
            </div>
        </div>

        <div class="lookbook relative min-h-80px py-20px" :style="{opacity: lookbooks[1].hover ? 1 : 0.7}" >
            <div class="lookbook-title text-24px font-600">
                <h3>FALL / WINTER 2021 LOOKBOOK</h3>
            </div>
            <div class="lookbook-description text-18px font-courier">
                <p class="max-w-400px">We're in a 70' mood right now</p>
                <icon :name="'material-symbols:arrow-outward-sharp'" class="text-30px secondary translate-x-10px"/>
            </div>
        </div>

        <div class="lookbook relative min-h-80px py-20px" :style="{opacity: lookbooks[0].hover ? 1 : 0.7}" >
            <div class="lookbook-title text-24px font-600">
                <h3>SPRING / SUMMER 2021</h3>
            </div>
            <div class="lookbook-description text-18px font-courier">
                <p class="max-w-400px">When nothing is off limits, everything is possible</p>
                <icon :name="'material-symbols:arrow-outward-sharp'" class="text-30px secondary translate-x-10px"/>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

class Cursor {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.visible = 0;
        this.hoverIndex = null;
    }

    setVisible(val) {
        this.visible = val;
    }
}

class Lookbook {
    constructor(top) {
        this.top = top;
        this.hover = false;
    }
}

export default {
    setup() {
        let cursor = ref(new Cursor());
        let contentBox = null;
        let lookbooks = ref([new Lookbook(), new Lookbook(), new Lookbook(), new Lookbook()]);

        onMounted(() => {
            let cursor = document.getElementsByClassName('custom-cursor')[0];
            contentBox = document.getElementsByClassName('lookbooks-content')[0];
            let lookbooksEl = Array.from(document.getElementsByClassName('lookbook'));

            let temp = []
            lookbooksEl.forEach((el) => {
                let top = el.getBoundingClientRect().top;
                temp.unshift(new Lookbook(top - contentBox.getBoundingClientRect().top))
            })
            lookbooks.value = temp;

            contentBox.addEventListener('mouseenter', contentBoxMouseEnter);
            contentBox.addEventListener('mouseleave', contentBoxMouseLeave);
            contentBox.addEventListener('mousemove', contentBoxMouseMove);

            // lookbooks.forEach((el, index) => {
            //     el.addEventListener('mouseover', () => {
            //         console.log(index + 1);
            //         lookbookMouseEnter(index + 1);
            //     })
            // })
        })

        let contentBoxMouseEnter = () => {
            window.requestAnimationFrame(() => {
                cursor.value.setVisible(1);
            })
        }

        let contentBoxMouseLeave = () => {
            window.requestAnimationFrame(() => {
                cursor.value.setVisible(0);
            })
            
        }

        let contentBoxMouseMove = (event) => {
            // cursor.value.x = event.offsetX;
            // cursor.value.y = event.offsetY;
            window.requestAnimationFrame(() => {
                let offsetY = event.clientY - contentBox.getBoundingClientRect().top;
                let done = false;
                lookbooks.value.forEach((lookbook, index) => {
                    if (offsetY > lookbook.top && done === false) {
                        done = true
                        lookbook.hover = true;
                        cursor.value.hoverIndex = 3 - index;
                    } else {
                        lookbook.hover = false;
                    }
                })
                cursor.value.x = event.clientX;
                cursor.value.y = offsetY;
            })

        }

        let lookbookMouseEnter = (index) => {
            window.requestAnimationFrame(() => {
                cursor.value.hoverIndex = index;
            })  
           
        }

        return { contentBoxMouseEnter, contentBoxMouseLeave, cursor, contentBoxMouseMove, lookbookMouseEnter, lookbooks }
    }
}
</script>

<style scoped>
.sub-header {
    border-bottom: 3px solid var(--secondary-color);
}

.lookbook {
    border-bottom: 2px solid var(--secondary-color);
    opacity: 0.7;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.lookbook-description {
    display: grid;
    grid-template-columns: auto 30px;
}
</style>