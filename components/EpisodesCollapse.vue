<script setup lang="ts">
import { ElButton, ElCollapse, ElCollapseItem } from "element-plus";
import { Episodes } from "~/types/graphql/generated";

interface EpisodesProps {
  episodes: Episodes
}
defineProps<EpisodesProps>();
const activeNames = ref([0]);

</script>

<template>
  <div>
    <h1 class="text-center text-2xl mb-4">
      Episodes
    </h1>
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
  </div>
</template>
