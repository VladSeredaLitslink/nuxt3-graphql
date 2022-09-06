import { QueryParams } from "~/constants/query-params";

export function useCharactersFilters () {
  const route = useRoute();
  const router = useRouter();

  const filters = computed<{status?: string, name?: string, gender?: string, species?: string, type?: string}>({
    get () {
      return {
        status: route.query[QueryParams.Status] as string,
        name: route.query[QueryParams.Name] as string,
        species: route.query[QueryParams.Species] as string,
        gender: route.query[QueryParams.Gender] as string,
        type: route.query[QueryParams.Type] as string
      };
    },
    set (value) {
      router.push({
        query: Object.assign(
          {},
          {
            ...route.query
          },
          {
            ...value
          }
        )
      });
    }
  });

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

  const ALL = "all";

  type Options = {
    value: string
    label: string
  }

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

  return {
    page,
    filters,
    statuses,
    genders,
    searchTypes,
    ALL
  };
}
