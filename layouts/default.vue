<script setup>
import { ElContainer, ElHeader, ElMain, ElFooter } from "element-plus";
</script>
<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header></el-header>
      <el-main><slot /></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<style>
.container {
  max-width: 1270px;
  margin: 0 auto;
}
</style>
