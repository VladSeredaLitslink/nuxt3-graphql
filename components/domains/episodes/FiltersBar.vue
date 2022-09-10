<template>
  <section>
    <h1 class="text-center mt-4 font-medium text-xl">
      Filters
    </h1>
    <div class="flex flex-wrap md:items-center justify-center">
      <div class="p-2 md:min-w-1xl">
        <el-input
          v-model="name"
          size="small"
          clearable
          placeholder="Type name"
          :prefix-icon="Search"
        />
      </div>
      <div class="p-2 md:min-w-1xl">
        <el-input
          v-model="episode"
          size="small"
          clearable
          placeholder="Type episode"
          :prefix-icon="Search"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
const { filter } = useEpisodesFilters();
const { name, episode } = filter;
</script>
