<script lang="ts" setup>
import { ElMenu, ElSwitch } from "element-plus";
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
    <div>
      <nuxt-link to="/" class="pt-2 pb-2">
        <img class="h-20" src="/assets/images/logo.png" alt="logo">
      </nuxt-link>
    </div>
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
