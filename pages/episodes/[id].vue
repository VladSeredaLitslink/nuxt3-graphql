<script setup lang="ts">

import { ElContainer, ElCarousel, ElCarouselItem, ElImage, ElSkeleton, ElSkeletonItem } from "element-plus";
import { useRouter } from "vue-router";
import { useEpisodeDetails } from "~/composables/useEpisodeDetails";

const route = useRoute();
const { result, loading, error } = useEpisodeDetails({ id: route.params.id });

const router = useRouter();
const viewDetailsByCharacterId = (id: number) => {
  router.push(`/characters/${id}`);
};

</script>

<template>
  <el-container>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="h1" style="display: block; margin: 20px auto; width: 400px;" />
        <el-skeleton-item v-for="n in 4" :key="n" />
        <el-skeleton-item variant="h1" style="display: block; margin: 10px auto; width: 400px;" />
        <el-skeleton-item variant="image" style="width: 440px; height: 440px; margin: 20px auto" />
      </template>
      <template #default>
        <div v-if="result" class="episode">
          <h1 class="episode-title">
            {{ result.episode.name }}
          </h1>
          <div class="episode-desc">
            <div>
              <b>Air date: </b><span>{{ result.episode.air_date }}</span>
            </div>
            <div>
              <b>Episode: </b><span>{{ result.episode.episode }}</span>
            </div>
          </div>
          <div class="episode-title">
            <h1>Characters</h1>
          </div>
          <el-carousel :interval="4000" type="card" height="600px" indicator-position="none">
            <el-carousel-item v-for="character in result.episode.characters" :key="character.id" @click="viewDetailsByCharacterId(character.id)">
              <el-image fit="cover" :src="character.image" :alt="character.name" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </el-skeleton>
    <div v-if="error">
      {{ error }}
    </div>
  </el-container>
</template>

<style lang="scss">
.episode {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  &-title{
    text-align: center;
  }
  &-desc {
    line-height: 44px;
  }
  .el-carousel {
    margin-top: 20px;
   .el-image {
      display: block;
    }
  }
  .el-carousel__mask {
    background: transparent;
  }
}
</style>
