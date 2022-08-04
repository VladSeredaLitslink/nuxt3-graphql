<script setup>
import { ElHeader, ElMain, ElFooter } from "element-plus";
</script>
<template>
  <div class="common-layout">
    <el-header><base-header /></el-header>
    <el-main>
      <div class="container m-auto">
        <slot />
      </div>
    </el-main>
    <el-footer />
  </div>
</template>
