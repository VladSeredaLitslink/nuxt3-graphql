<template>
  <div class="common-layout">
    <el-header><the-header /></el-header>
    <el-main class="mt-4">
      <div class="container m-auto">
        <page-header v-if="$route.path !== '/'" />
        <slot />
      </div>
    </el-main>
    <el-footer />
  </div>
</template>
