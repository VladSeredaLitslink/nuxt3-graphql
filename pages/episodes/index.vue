<script setup lang="ts">

import { ElContainer, ElPagination } from "element-plus";
import EpisodesCollapse from "~/components/EpisodesCollapse.vue";
import { useEpisodesList } from "~/composables/useEpisodesList";
import BaseLoader from "~/base/BaseLoader.vue";

const currentPage = ref(1);
const { result, loading } = useEpisodesList({ page: currentPage });
</script>

<template>
  <el-container class="episodes">
    <div v-if="result && result.episodes">
      <episodes-collapse :episodes="result.episodes.results" />
      <el-pagination
        v-model:currentPage="currentPage"
        :total="result.episodes.info.pages"
        layout="prev, pager, next"
      />
    </div>
    <div v-if="loading">
      <base-loader v-if="loading" />
    </div>
  </el-container>
</template>

<style scoped lang="scss">
.episodes {
  display: flex;
   flex-direction: column;
}
</style>
