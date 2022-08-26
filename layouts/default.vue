<template>
  <div class="common-layout">
    <el-header><base-header /></el-header>
    <el-main class="mt-4">
      <div class="container m-auto">
        <base-page-header v-if="$route.path !== '/'" />
        <slot />
      </div>
    </el-main>
    <el-footer />
  </div>
</template>
