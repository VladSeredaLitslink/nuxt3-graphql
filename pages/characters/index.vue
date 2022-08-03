<script setup lang="ts">
import { ElContainer, ElImage, ElPagination, ElCard, ElSkeleton, ElSkeletonItem, ElButton } from "element-plus";
import { useCharacterList } from "@/composables/useCharactersList";
const currentPage = ref(1);
const { result, loading, error } = useCharacterList({ page: currentPage });

</script>

<template>
  <el-container class="characters__wrap">
    <div class="characters-title">
      <h1>Characters</h1>
    </div>
    <el-skeleton :loading="loading" animated>
      <template #template>
        <div v-for="n in 12" :key="n" style="margin: 2%">
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div
              style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <div class="characters">
          <nuxt-link
            v-for="character in result.characters.results"
            :key="character.id"
            class="characters-link"
            :to="{ path: `/characters/${character.id}` }"
          >
            <el-card
              shadow="hover"
              class="characters-card"
              :body-style="{ padding: '0px' }"
            >
              <el-image :src="character.image" />
              <div
                class="characters-desc"
                :class="`characters-desc__${character.gender.toLowerCase()}`"
                style="padding: 14px"
              >
                <div>
                  <b>Name: </b><span>{{ character.name }}</span>
                </div>
                <div>
                  <b>Location: </b><span v-if="character.location">{{
                    character.location.name
                  }}</span>
                </div>
              </div>
            </el-card>
          </nuxt-link>
        </div>
        <el-pagination
          v-model:currentPage="currentPage"
          :total="result.characters.info.pages"
          layout="prev, pager, next"
        />
      </template>
    </el-skeleton>
    <div v-if="error">
      {{ error }}
    </div>
  </el-container>
</template>

<style lang="scss">
@import "assets/css/mixins/media";
.characters {
  display: flex;
  flex-wrap: wrap;
  &__wrap {
    display: flex;
    flex-direction: column;
    .el-skeleton {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  &-title {
    text-align: center;
  }
  &-link {
    text-decoration: none;
    margin: 2%;
    min-width: 240px;
    @include for-phone-only {
      width: 100%;
      margin: 2% 0;
    }
    @include for-tablet-landscape-up {
      width: calc(33% - 4%);
    }
    @include for-desktop-up {
      width: calc(25% - 4%);
    }
  }
  &-desc {
    position: relative;
    &::before {
      content: "";
      height: 10px;
      width: 10px;
      position: absolute;
      border-radius: 20px;
      right: 5px;
    }
    &__male {
      &::before {
        background: #008bff;
      }
    }
    &__female {
      &::before {
        background: #ff7e7e;
      }
    }
    &__unknown {
      &::before {
        background: #c7c3c3;
      }
    }
  }
  &-card {
    @include for-tablet-landscape-up {
      height: 380px;
    }
    @include for-desktop-up {
      height: 348px;
    }
  }
  .el {
    &-card {
      &__body {
        .el-image {
          width: 100%;
        }
      }
    }
  }
}
</style>
