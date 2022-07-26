<script setup>
import { ElContainer, ElHeader, ElMain, ElFooter } from "element-plus"
import BaseMenu from "../base/BaseMenu"
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <base-menu/>
      </el-header>
      <el-main><slot/></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
