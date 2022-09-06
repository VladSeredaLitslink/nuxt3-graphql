<template>
  <section class="flex flex-col lg:items-center">
    <div class="flex items-center md:min-w-1xl">
      <el-input
        v-model="name"
        size="small"
        clearable
        placeholder="Type name"
        :prefix-icon="Search"
      />
    </div>
    <div class="flex flex-wrap">
      <div class="flex flex-col mr-4 md:items-center">
        <b>Statuses: </b>
        <el-radio-group v-model="status" size="small">
          <el-radio-button
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
          >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="flex flex-col md:items-center">
        <b>Genders: </b>
        <el-radio-group v-model="gender" size="small">
          <el-radio-button
            v-for="item in genderOptions"
            :key="item.value"
            :label="item.label"
          >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
const { filters, statusOptions, genderOptions } = useCharactersFilters();
const { name, status, gender } = filters;
</script>
