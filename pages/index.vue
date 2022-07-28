<script setup lang="ts">
import { ElContainer, ElImage, ElPagination, ElCard } from "element-plus";
import { useCharacterList } from "@/composables/useCharactersList";
import BaseLoader from "@/base/BaseLoader";
const currentPage = ref(1);
const { result, loading } = useCharacterList({ page: currentPage });

</script>

<template>
  <el-container>
    <div v-if="result" class="characters__wrap">
      <div class="characters">
        <nuxt-link
          v-for="character in result.characters.results"
          :key="character.id"
          class="characters-link"
          :to="{ path: `/character-detail/${character.id}` }"
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
      />
    </div>
    <base-loader v-if="loading" />
  </el-container>
</template>

<style lang="scss">
.characters {
  display: flex;
  flex-wrap: wrap;
  &__wrap {
    margin: 0 auto;
  }
  &-link {
    text-decoration: none;
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
    margin: 14px;
    width: 276px;
    height: 368px;
  }
}
</style>
