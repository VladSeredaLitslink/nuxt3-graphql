<script setup lang="ts">
import { ElContainer } from "element-plus";
const navs = [
  {
    id: 1,
    name: "Characters",
    link: "/characters"
  },
  {
    id: 2,
    name: "Episodes",
    link: "/episodes"
  }
];
</script>

<template>
  <el-container>
    <div class="navs">
      <nuxt-link v-for="nav in navs" :key="nav.id" :to="nav.link" class="navs-item">
        {{ nav.name }}
      </nuxt-link>
    </div>
  </el-container>
</template>

<style lang="scss">
.navs {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  &-item {
    border: 1px solid #98d25b;
    border-radius: 20px;
    color: #13ce66;
    width: 80%;
    margin: 20px 0;
    padding: 40px;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.5s;
    &:hover {
      background: #98d25b;
      color: #ffff;
    }
  }
}
</style>
