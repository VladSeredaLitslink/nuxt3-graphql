<template>
  <el-card
    shadow="hover"
    class="xl:h-110 lg:h-100 md:h-110"
    :body-style="{ padding: '0px' }"
  >
    <el-image class="w-full" :src="character.image" />
    <div
      class="relative p-2"
    >
      <div>
        <b>Name: </b><span>{{ character.name }}</span>
      </div>
      <div>
        <b>Location: </b><span v-if="character.location">{{
          character.location.name
        }}</span>
      </div>
      <div class="w-5 h-5 absolute right-1 top-1 rounded-full" :class="getBgByCharacterGender(character.gender.toLowerCase())" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Character } from "~/types/graphql/generated";
interface CharacterProps {
  character: Character
}
defineProps<CharacterProps>();

const getBgByCharacterGender = (gender: string) : string => {
  switch (gender) {
  case "male": {
    return "bg-[#008bff]";
  }
  case "female": {
    return "bg-[#e03ec0]";
  }
  default: {
    return "bg-[#c1c1c1]";
  }
  }
};
</script>
