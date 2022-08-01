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
      <nuxt-link to="/" class="logo">
        <img src="/assets/images/logo.png" alt="logo">
      </nuxt-link>
    </div>
    <div class="switch__wrap" @click="toggleDark()">
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

<style lang="scss">
.flex-grow {
  flex-grow: 1;
}
header {
  height: 100px !important;
  .switch__wrap {
    margin: auto 0;
  }
  .logo {
    padding: 0 20px;
    img {
      height: 100px;
    }
  }
}

</style>
