<script lang="ts" setup>
import { ElImage, ElCard } from "element-plus";

defineProps({
  character: {
    type: Object,
    required: true
  }
});

const bgByCharacterGender = (gender) => {
  let bg;
  switch (gender) {
  case "male": {
    bg = "bg-[#008bff]";
    break;
  }
  case "female": {
    bg = "bg-[#e03ec0]";
    break;
  }
  default: {
    bg = "bg-[#c1c1c1]";
    break;
  }
  }
  return bg;
};
</script>
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
      <div class="w-5 h-5 absolute right-1 top-1 rounded-full" :class="bgByCharacterGender(character.gender.toLowerCase())" />
    </div>
  </el-card>
</template>
