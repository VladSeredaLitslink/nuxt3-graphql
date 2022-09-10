<template>
  <div class="flex flex-col w-full">
    <loader v-if="loading" />
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
      <episodes-collapse :episodes="result.character.episode"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

const { result, loading, error } = useCharacterDetails({ id });
</script>
