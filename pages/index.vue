<template>
  <section>
    <base-loader v-if="loading" />

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <characters-container v-else-if="result && result.characters">
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
      </template>
    </characters-container>
  </section>
</template>

<script setup lang="ts">
const currentPage = ref<number>(1);
const { result, loading, error } = useCharacterList({ page: currentPage });
</script>
