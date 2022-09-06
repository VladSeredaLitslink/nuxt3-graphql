import { QueryParams } from "~/constants/query-params";

export function useCharactersFilters () {
  const route = useRoute();
  const router = useRouter();

  const page = computed({
    get () {
      return Number(route.query[QueryParams.Page]) || 1;
    },
    set (value) {
      router.push({
        query: Object.assign({}, { ...route.query, [QueryParams.Page]: value })
      });
    }
  });

  const name = computed({
    get () {
      return route.query[QueryParams.Name];
    },
    set (value) {
      router.push({
        query: Object.assign({}, { ...route.query, [QueryParams.Name]: value })
      });
    }
  });

  const status = computed({
    get () {
      const status = route.query[QueryParams.Status];
      return status === ALL ? "" : status;
    },
    set (value) {
      router.push({
        query: Object.assign({}, { ...route.query, [QueryParams.Status]: value })
      });
    }
  });

  const gender = computed({
    get () {
      const gender = route.query[QueryParams.Gender];
      return gender === ALL ? "" : gender;
    },
    set (value) {
      router.push({
        query: Object.assign({}, { ...route.query, [QueryParams.Gender]: value })
      });
    }
  });

  const ALL = "all";

  type Options = {
    value: string
    label: string
  }

  const statusOptions: Options[] = [
    { value: "", label: ALL },
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
    { value: "unknown", label: "Unknown" }
  ];
  const genderOptions: Options[] = [
    { value: "", label: ALL },
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "genderless", label: "Genderless" },
    { value: "unknown", label: "Unknown" }
  ];

  return {
    page,
    filters: {
      name,
      status,
      gender
    },
    statusOptions,
    genderOptions
  };
}
