<script setup lang="ts">
import { useCharacterList } from '@/composables/useCharactersList'
import { ElTable, ElTableColumn, ElContainer, ElImage, ElPagination } from 'element-plus'

const currentPage = ref(1)

const { result, loading } = useCharacterList({page: currentPage})
</script>

<template>
  <el-container>
    <div v-if="result">
      <el-table :data="result.characters.results" style="width: 100%">
        <el-table-column prop="image" label="Image" width="180">
          <template v-slot="scope">
            <div style="display: flex; align-items: center">
              <el-image :src="scope.row.image"/>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="gender" label="Gender" width="180" />
        <el-table-column prop="location" label="Location" width="180" >
          <template v-slot="scope">
            <span>{{scope.row.location.name}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          v-model:currentPage="currentPage"
          :total="result.characters.info.pages"
      />
    </div>

    <div v-if="loading">Loading...</div>
  </el-container>
</template>
