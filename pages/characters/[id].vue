<script setup lang="ts">
import { ElContainer, ElImage, ElBadge, ElSkeleton, ElSkeletonItem } from "element-plus";
import { useCharacterDetails } from "@/composables/useCharacterDetails";
import EpisodesCollapse from "~/components/EpisodesCollapse.vue";
const route = useRoute();

const { result, loading, error } = useCharacterDetails({ id: route.params.id });
</script>

<template>
  <el-container class="character">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div class="character-skeleton">
          <el-skeleton-item variant="image" style="width: 440px; height: 440px; margin: 20px auto" />
          <div class="character-skeleton__desc">
            <el-skeleton-item v-for="n in 5" :key="n" />
          </div>
        </div>
      </template>
      <template #default>
        <div v-if="result">
          <div class="character-card">
            <div class="character-card__header">
              <el-badge type="success" :value="result.character.status">
                <h2>{{ result.character.name }}</h2>
              </el-badge>
            </div>
            <div class="character-card__body">
              <el-image
                :src="result.character.image"
              />
              <div class="character-card__desc">
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

<style lang="scss">
  .character {
    display: flex;
    flex-direction: column;
    &-skeleton {
      display: flex;
      flex-wrap: wrap;
      &__desc {
        min-width: 40%;
        margin: auto;
        .el-skeleton__item {
          margin: 20px 0;
        }
      }
    }
    &-title {
      text-align: center;
    }
    &-card {
      &__header {
        text-align: center;
      }
      &__desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 44px;
        font-size: 18px;
      }
      &__body {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
     }
    .el-card__body {
      display: flex;
    }
  }

  .collapse-item {
    &__title {
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
    &__actions {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
