<script setup>
import { ElContainer, ElHeader, ElMain, ElFooter } from "element-plus";
import BaseHeader from "../base/BaseHeader";
</script>
<template>
  <div class="common-layout">
    <el-header><base-header /></el-header>
    <el-main>
      <el-container class="container">
        <slot />
      </el-container>
    </el-main>
    <el-footer />
  </div>
</template>
<style>
.container {
  max-width: 1270px;
  margin: 0 auto;
}
</style>
