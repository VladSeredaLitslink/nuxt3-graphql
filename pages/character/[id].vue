<script setup lang="ts">
const route = useRoute();

const { result, loading, error } = useCharacterDetails({ id: route.params.id });
const activeNames = ref([0]);
</script>

<template>
  <div class="flex flex-col w-full">
    <div>
      <el-page-header @click="$router.go(-1)" />
    </div>
    <base-loader v-if="loading" />
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="result && result.character">
      <div class="text-center mb-4">
        <el-badge type="success" :value="result.character.status">
          <h1 class="text-xl">
            {{ result.character.name }}
          </h1>
        </el-badge>
      </div>
      <div class="flex flex-wrap justify-around mb-4">
        <el-image
          :src="result.character.image"
        />
        <div class="flex flex-col justify-center leading-10 text-base">
          <div>
            <b>First seen on: </b><span>{{ result.character.origin.name }}</span>
          </div>
          <div>
            <b>Last seen on: </b><span>{{ result.character.location.name }}</span>
          </div>
          <div>
            <b>Species: </b><span>{{ result.character.species }}</span>
          </div>
          <div>
            <b>Gender: </b><span>{{ result.character.gender }}</span>
          </div>
        </div>
      </div>
      <h1 class="text-center text-xl mb-4">
        Episodes
      </h1>
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="(episode, idx) in result.character.episode"
          :key="episode.id"
          :name="idx"
        >
          <template #title>
            <div class="flex justify-between w-full">
              <b>{{ episode.name }}</b>
              <span>{{ episode.air_date }}</span>
            </div>
          </template>
          <div>
            <b>Episode number: </b><span>{{ episode.episode }}</span>
          </div>
          <div>
            <b>Characters have played in this episodes: </b><span>{{ episode.characters.length }}</span>
          </div>
          <div class="flex justify-end">
            <el-button type="primary">
              Read more
            </el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
