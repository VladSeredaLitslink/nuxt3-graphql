<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { GET_CHARACTERS } from '@/api/queries'
import { ElTable, ElTableColumn, ElContainer } from 'element-plus'


const { loading, result } = useQuery(GET_CHARACTERS)
</script>
<template>
  <el-container>
    <div v-if="result">
      <el-table :data="result.characters.results" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="id" label="Id" width="180" />
      </el-table>
    </div>
    <div v-if="loading">Loading...</div>
  </el-container>
</template>
