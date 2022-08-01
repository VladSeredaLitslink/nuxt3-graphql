<script setup lang="ts">
import { ElContainer, ElImage, ElCollapse, ElCollapseItem, ElPageHeader, ElButton, ElBadge } from "element-plus";
import BaseLoader from "../../base/BaseLoader";
import { useCharacterDetails } from "@/composables/useCharacterDetails";
const route = useRoute();

const { result, loading } = useCharacterDetails({ id: route.params.id });
const activeNames = ref([0]);
</script>

<template>
  <el-container class="character">
    <div>
      <el-page-header @click="$router.go(-1)" />
    </div>
    <base-loader v-if="loading" />
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
      <div class="title">
        <h1>Episodes</h1>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="(episode, idx) in result.character.episode"
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
              <el-button type="primary">
                Read more
              </el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-container>
</template>

<style lang="scss">
  .character {
    display: flex;
    flex-direction: column;
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

  .title {
    text-align: center;
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
