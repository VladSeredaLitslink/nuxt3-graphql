<script setup>
import { ElPageHeader } from "element-plus";
</script>

<template>
  <div class="page-header">
    <el-page-header @click="$router.go(-1)" />
  </div>
</template>

<style lang="scss">
.page-header {
  margin-bottom: 15px;
}
</style>
