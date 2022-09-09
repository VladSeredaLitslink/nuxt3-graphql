<template>
  <el-container>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="h1" style="display: block; margin: 20px auto; width: 400px;" />
        <el-skeleton-item v-for="n in 4" :key="n" />
        <el-skeleton-item variant="h1" style="display: block; margin: 10px auto; width: 400px;" />
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <el-skeleton-item v-for="n in 12" :key="n" variant="image" class="m-2" style="height: 270px" />
        </div>
      </template>
      <template #default>
        <div v-if="result && result.episode" class="w-full">
          <h1 class="text-center text-2xl">
            {{ result.episode.name }}
          </h1>
          <div class="leading-10 text-base">
            <div>
              <b>Air date: </b><span>{{ result.episode.air_date }}</span>
            </div>
            <div>
              <b>Episode: </b><span>{{ result.episode.episode }}</span>
            </div>
          </div>
          <h1 class="text-center text-2xl">
            Characters
          </h1>
          <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <nuxt-link
              v-for="character in result.episode.characters"
              :key="character.id"
              class="no-underline m-2"
              :to="{ path: `/characters/${character.id}` }"
            >
              <characters-card :character="character" />
            </nuxt-link>
          </div>
        </div>
      </template>
    </el-skeleton>
    <div v-if="error">
      Error {{ error.message }}
    </div>
  </el-container>
</template>

<script setup lang="ts">
const route = useRoute();
const { result, loading, error } = useEpisodeDetails({ id: route.params.id });
</script>
