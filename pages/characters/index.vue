<template>
  <section>
    <filters-tooltip />
    <h1 class="text-center mt-4 font-medium text-xl">
      Characters
    </h1>
    <div v-if="error">
      Error: {{ error.message }}
    </div>
    <el-skeleton :loading="loading">
      <template #template>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div v-for="n in 12" :key="n" class="xl:h-110 lg:h-100 md:h-110 m-3">
            <el-skeleton-item variant="image" style="height: 360px" />
            <div class="mt-2">
              <el-skeleton-item variant="p" />
              <el-skeleton-item variant="text" />
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <characters-container v-if="result && result.characters && result.characters.results.length">
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
            <template v-if="result.characters.info">
              <el-pagination
                v-model:currentPage="page"
                :total="result.characters.info.pages"
                layout="prev, pager, next"
              />
            </template>
          </template>
        </characters-container>
        <div v-else class="mt-4">
          <span class="text-">No data by filters</span>
        </div>
      </template>
    </el-skeleton>
  </section>
</template>

<script setup lang="ts">
const { page, filters } = useCharactersFilters();

const { result, loading, error } = useCharacterList(
  reactive({
    page,
    filter: filters
  })
);
</script>
