<template>
  <van-popup v-model:show="modelValue" overlay-class="loading-overlay" round>
    <div class="loading-wrapper">
      <van-loading color="#0094ff" vertical>加载中...</van-loading>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.loading-wrapper {
  padding: 20px;
}
.loading-overlay {
  backdrop-filter: blur(20px);
}
</style>