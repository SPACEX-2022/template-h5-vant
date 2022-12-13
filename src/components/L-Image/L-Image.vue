<template>
  <van-image v-bind="$attrs">
    <template v-slot:loading>
      <van-loading type="spinner" size="20" vertical />
    </template>
    <template v-slot:error>
      <div class="error-text">加载失败</div>
    </template>
  </van-image>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.error-text {
  font-size: 12px;
}
</style>
