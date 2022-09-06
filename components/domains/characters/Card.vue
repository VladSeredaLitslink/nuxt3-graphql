<template>
  <el-card
    shadow="hover"
    class="xl:h-110 lg:h-100 md:h-110"
    :body-style="{ padding: '0px' }"
  >
    <div class="text-center">
      <b>{{ character.name }}</b>
    </div>
    <div class="relative">
      <el-image class="w-full" :src="character.image" />
      <div v-if="character.status" class="absolute -bottom-2 flex justify-center w-full">
        <el-button round :color="getColorByCharacterStatus(character.status.toLowerCase())">
          {{ character.status }}
        </el-button>
      </div>
    </div>
    <div
      class="relative p-2"
    >
      <div class="flex items-center">
        <el-icon color="#409EFC" class="mr-2">
          <LocationInformation />
        </el-icon><span v-if="character.location">{{
          character.location.name
        }}</span>
      </div>
      <div class="w-5 h-5 absolute right-1 top-1 rounded-full">
        <el-icon v-if="character.gender === 'Female'">
          <Female />
        </el-icon>
        <el-icon v-else-if="character.gender === 'Male'">
          <Male />
        </el-icon>
        <el-icon v-else-if="character.gender === 'unknown'">
          <QuestionFilled />
        </el-icon>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Female, Male, QuestionFilled, LocationInformation } from "@element-plus/icons-vue";
import { Character } from "~/types/graphql/generated";

interface CharacterCardProps {
  character: Character
}
defineProps<CharacterCardProps>();

const getColorByCharacterStatus = (status: string) :string => {
  switch (status) {
  case "alive": {
    return "#00ff51";
  }
  case "dead": {
    return "#0b1052";
  }
  case "unknown": {
    return "#eeb055";
  }
  default: {
    return "#c1c1c1";
  }
  }
};
</script>
