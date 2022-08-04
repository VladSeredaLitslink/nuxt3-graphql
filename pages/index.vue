<script setup lang="ts">
import { ElPagination } from "element-plus";
const currentPage = ref(1);
const { result, loading, error } = useCharacterList({ page: currentPage });

</script>

<template>
  <section>
    <base-loader v-if="loading" />

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="result && result.characters">
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <nuxt-link
          v-for="character in result.characters.results"
          :key="character.id"
          class="no-underline m-2"
          :to="{ path: `/character/${character.id}` }"
        >
          <character-card :character="character" />
        </nuxt-link>
      </div>
      <el-pagination
        v-model:currentPage="currentPage"
        :total="result.characters.info.pages"
        layout="prev, pager, next"
      />
    </div>
  </section>
</template>
