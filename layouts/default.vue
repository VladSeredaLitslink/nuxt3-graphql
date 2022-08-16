<template>
  <div class="common-layout">
    <el-header><base-header /></el-header>
    <el-main class="mt-4">
      <div class="container m-auto">
        <slot />
      </div>
    </el-main>
    <el-footer />
  </div>
</template>
