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
  <div class="episodes">
    <div class="episodes-title">
      <h1>Episodes</h1>
    </div>
    <el-collapse
      v-model="activeNames"
    >
      <el-collapse-item
        v-for="(episode, idx) in episodes"
        :key="episode.id"
        :name="idx"
      >
        <template #title>
          <div class="collapse-item__title">
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
          <div class="collapse-item__actions">
            <nuxt-link :to="`/episodes/${episode.id}`">
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

<style scoped lang="scss">
.episodes {
  &-title {
    text-align: center;
  }
}
.collapse-item__actions {
  a {
    text-decoration: none;
  }
}
</style>
