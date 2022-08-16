<script lang="ts" setup>
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const theme = ref();
theme.value = isDark.value;

</script>

<template>
  <el-menu
    mode="horizontal"
  >
    <app-logo />
    <div class="flex items-center" @click="toggleDark()">
      <el-switch
        v-model="theme"
        class="ml-2"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #000000"
        :active-icon="Sunny"
        :inactive-icon="Moon"
      />
    </div>
  </el-menu>
</template>
