<script setup lang="ts">
import { ref } from 'vue'
import animation from '@/assets/animation/test.json'

const anim = ref()

function stop() {
  anim.value.pause()
}

function goToAndPlay() {
  anim.value.goToAndPlay(1000)
}
</script>

<template>
  <div>
    <lottie-animation
      ref="anim"
      :animationData="animation"
      :loop="true"
    />
    <van-button type="primary" @click="stop">stop</van-button>
    <van-button type="primary" @click="goToAndPlay">goToAndPlay</van-button>
  </div>
</template>

<style scoped>
</style>