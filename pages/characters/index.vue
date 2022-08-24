<template>
  <section>
    <filters-tooltip @filter="filterCharacter" />
    <base-loader v-if="loading" />

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <characters-container v-else-if="result && result.characters && result.characters.results.length">
      <template #header>
        <h1 class="font-medium text-xl">
          Characters
        </h1>
      </template>
      <template #content>
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
      </template>
    </characters-container>
    <div v-else class="mt-4">
      <span class="text-">No data by filters</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FilterCharacter } from "~/types/graphql/generated";
const currentPage = ref<number>(1);
const filterCharacter = (filters: FilterCharacter) => {
  refetch({ page: 1, ...filters });
};

const { result, loading, error, refetch } = useCharacterList({ page: currentPage });
</script>
