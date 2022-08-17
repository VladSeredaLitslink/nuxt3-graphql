<template>
  <el-container>
    <div class="w-full flex flex flex-col justify-center items-center mt-8">
      <nuxt-link v-for="nav in navs" :key="nav.id" :to="nav.link" class="no-underline border-1 rounded-md border-hex-98d25b hover:bg-[#98d25b] hover:text-white w-80 mb-4 p-8 text-center uppercase transition-colors">
        {{ nav.name }}
      </nuxt-link>
    </div>
  </el-container>
</template>

<script setup lang="ts">
interface Nav {
  id: number,
  name: string,
  link: string
}
const navs = ref<Nav[]>([
  {
    id: 1,
    name: "Characters",
    link: "/characters"
  },
  {
    id: 2,
    name: "Episodes",
    link: "/episodes"
  }
]);
</script>
