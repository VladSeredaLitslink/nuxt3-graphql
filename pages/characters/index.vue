<script setup lang="ts">
import { ElPagination, ElSkeleton, ElSkeletonItem } from "element-plus";
const currentPage = ref(1);
const { result, loading, error } = useCharacterList({ page: currentPage });

</script>

<template>
  <section>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div v-for="n in 12" :key="n" class="flex flex-col m-2">
            <el-skeleton-item variant="image" style="height: 270px" />
            <el-skeleton-item v-for="i in 2" :key="i" variant="text" class="mb-2 mt-2" />
          </div>
        </div>
      </template>
      <template #default>
        <div v-if="result && result.characters">
          <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <nuxt-link
              v-for="character in result.characters.results"
              :key="character.id"
              class="no-underline m-2"
              :to="{ path: `/characters/${character.id}` }"
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
      </template>
    </el-skeleton>
    <div v-if="error">
      Error: {{ error.message }}
    </div>
  </section>
</template>
