<script setup>
import { ElHeader, ElMain, ElFooter } from "element-plus";
import BaseHeader from "../base/BaseHeader";
import BasePageHeader from "../base/BasePageHeader";
</script>
<template>
  <div class="common-layout">
    <el-header><base-header /></el-header>
    <el-main>
      <base-page-header v-if="$route.path !== '/'" />
      <slot />
    </el-main>
    <el-footer />
  </div>
</template>
<style>
.common-layout {
  max-width: 1270px;
  margin: 0 auto;
}
</style>
