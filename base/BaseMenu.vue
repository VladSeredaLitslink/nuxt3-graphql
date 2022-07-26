
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMenu, ElMenuItem } from "element-plus"

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">Orders</el-menu-item>
  </el-menu>
</template>
