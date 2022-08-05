<script setup lang="ts">
import { ElContainer, ElImage, ElBadge, ElSkeleton, ElSkeletonItem } from "element-plus";
import { useCharacterDetails } from "@/composables/useCharacterDetails";
import EpisodesCollapse from "~/components/EpisodesCollapse.vue";
const route = useRoute();

const { result, loading, error } = useCharacterDetails({ id: route.params.id });
</script>

<template>
  <el-container>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="flex flex-col">
          <el-skeleton-item class="max-w-50 m-auto mb-5" />
          <div class="flex flex-wrap justify-around">
            <el-skeleton-item variant="image" style="width: 440px; height: 440px;" />
            <div class="m-auto m-10 w-100 leading-10">
              <el-skeleton-item v-for="n in 8" :key="n" />
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <div v-if="result && result.character" class="w-full">
          <div class="text-center mb-4">
            <el-badge type="success" :value="result.character.status">
              <h1 class="text-2xl">
                {{ result.character.name }}
              </h1>
            </el-badge>
          </div>
          <div class="flex flex-wrap justify-around mb-4">
            <el-image
              class="mr-2"
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
          <episodes-collapse :episodes="result.character.episode" />
        </div>
      </template>
    </el-skeleton>
    <div v-if="error">
      {{ error }}
    </div>
  </el-container>
</template>
