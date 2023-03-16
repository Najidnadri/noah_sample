<template>
  <ClientOnly>
    <Vue3Lottie 
        :animationData="animationData"
        :speed="speed"
        :direction="direction"
        :loop="loop"
        :autoPlay="autoPlay"
        :delay="delay"
        :pauseAnimation="pauseAnimation" 
        
        ref="lottie"
    />
  </ClientOnly>
</template>

<script>

export default {
    props: ["options"],
    setup(props) {
        let options = props.options;
        let lottie = ref(null);

        let animationData = options.animationData;
        let speed = options.speed ? options.speed : 1;
        let direction = options.direction ? options.direction : 'forward';
        let loop = (options.loop != undefined) || (options.loop != null) ? options.loop : true;
        let autoPlay = (options.autoPlay != undefined) || (options.autoPlay != null) ? options.autoPlay : true;
        let delay = options.delay ? options.delay : 0;
        let pauseAnimation = options.pauseAnimation ? options.pauseAnimation : false;

        let play = () => {
          lottie.value.play()
        }

        let setDirection = (val) => {
          lottie.value.setDirection(val);
        }
        
        let goToAndPlay = (frameNumber, isframe) => {
          lottie.value.goToAndPlay(frameNumber, isframe);
        }

        let playSegments = (segments, force) => {
          lottie.value.playSegments(segments, force);
        }

        return { animationData, speed, direction, loop, autoPlay, delay, pauseAnimation, lottie, play, setDirection, goToAndPlay, playSegments }
    },
}
</script>

<style>

</style>