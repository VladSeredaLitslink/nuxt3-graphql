<template>
  <section class="flex flex-col lg:items-center">
    <div class="flex items-center">
      <el-select v-model="typeSearch" placeholder="Select type search" size="small">
        <el-option
          v-for="item in searchTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
      <el-input
        v-model="filters[typeSearch]"
        size="small"
        clearable
        :placeholder="`Type ${typeSearch}`"
        :prefix-icon="Search"
        @input="beforeFilterCharacters"
      />
    </div>
    <div class="flex flex-wrap">
      <div class="flex flex-col mr-4 md:items-center">
        <b>Statuses: </b>
        <el-radio-group v-model="filters.status" size="small">
          <el-radio-button
            v-for="item in statuses"
            :key="item.value"
            :label="item.label"
            @change="beforeFilterCharacters"
          >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="flex flex-col md:items-center">
        <b>Genders: </b>
        <el-radio-group v-model="filters.gender" size="small">
          <el-radio-button
            v-for="item in genders"
            :key="item.value"
            :label="item.label"
            @change="beforeFilterCharacters"
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

type Options = {
  value: string
  label: string
}

type Filters = {
  status: string
  gender: string
  name: string
  species: string,
  type: string
}

const router = useRouter();
const route = useRoute();
const ALL = "all";
const emits = defineEmits(["filter"]);
const beforeFilterCharacters = () => {
  router.replace({
    query: {
      ...filters
    }
  });
  filterCharacters();
};
const filterCharacters = () => {
  emits("filter", Object.assign({}, filters, {
    status: filters.status === ALL ? "" : filters.status,
    gender: filters.gender === ALL ? "" : filters.gender
  }));
};

const typeSearch = ref<string>("name");
const filters = reactive<Filters>({
  status: ALL,
  gender: ALL,
  name: "",
  species: "",
  type: ""
});

const statuses: Options[] = [
  { value: "", label: ALL },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" }
];
const genders: Options[] = [
  { value: "", label: ALL },
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "genderless", label: "Genderless" },
  { value: "unknown", label: "Unknown" }
];
const searchTypes : Options[] = [
  { value: "name", label: "Name" },
  { value: "species", label: "Species" },
  { value: "type", label: "Type" }
];

if (route.query) {
  Object.assign(filters, route.query);
  filterCharacters();
}

</script>
