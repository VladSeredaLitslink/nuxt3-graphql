<template>
  <el-collapse
      v-model="activeNames"
    >
      <el-collapse-item
        v-for="(episode, idx) in episodes"
        :key="episode.id"
        :name="idx"
      >
        <template #title>
          <div class="flex justify-between w-full">
            <b>{{ episode.name }}</b>
            <span>{{ episode.air_date }}</span>
          </div>
        </template>
        <div class="collapse-item__body">
          <div>
            <b>Episode number: </b><span>{{ episode.episode }}</span>
          </div>
          <div>
            <b>Characters have played in this episodes: </b><span>{{ episode.characters.length }}</span>
          </div>
          <div class="flex justify-end">
            <nuxt-link class="no-underline" :to="`/episodes/${episode.id}`">
              <el-button type="primary">
                Read more
              </el-button>
            </nuxt-link>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
</template>

<script setup lang="ts">
import { Episodes } from "~/types/graphql/generated";

defineProps<{ episodes: Episodes }>();
const activeNames = ref<number[]>([0]);

</script>
