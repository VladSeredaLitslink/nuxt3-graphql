<template>
  <section class="flex flex-col">
    <div v-if="loading">
      <base-loader v-if="loading" />
    </div>
    <div v-else-if="error">
      Error {{ error.message }}
    </div>
    <div v-else-if="result && result.episodes">
      <episodes-collapse :episodes="result.episodes.results" />
      <el-pagination
        v-model:currentPage="currentPage"
        :total="result.episodes.info.pages"
        layout="prev, pager, next"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const currentPage = ref<number>(1);
const { result, loading, error } = useEpisodesList({ page: currentPage });
</script>
