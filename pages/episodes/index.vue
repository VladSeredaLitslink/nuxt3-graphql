<template>
  <section class="flex flex-col">
    <episodes-filters-bar />
    <h1 class="text-center mt-4 mb-4 font-medium text-xl">
      Episodes
    </h1>
    <div v-if="loading">
      <loader v-if="loading" />
    </div>
    <div v-else-if="error">
      Error {{ error.message }}
    </div>
    <div v-else-if="result && result.episodes && result.episodes.results.length">
      <episodes-collapse :episodes="result.episodes.results" />
      <el-pagination
        v-model:currentPage="page"
        :total="result.episodes.info.pages"
        layout="prev, pager, next"
      />
    </div>
     <div v-else class="mt-4">
        <span class="text-">No data by filters</span>
      </div>
  </section>
</template>

<script setup lang="ts">
const {page, filter} = useEpisodesFilters();

const { result, loading, error } = useEpisodesList(
  reactive({ 
    page, 
    filter
   })
);
</script>
