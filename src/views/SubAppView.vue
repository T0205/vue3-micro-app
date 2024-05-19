<template>
  <div>
    <h1>子应用👇</h1>
    <!-- name：应用名称, url：应用地址 -->
    <micro-app name='sub-app' url='http://localhost:3000'></micro-app>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';

onMounted(() => { })

</script>

<style lang='scss' scoped></style>