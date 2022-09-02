import { QueryParams } from "~/constants/query-params";

export function useCharactersFilters () {
  const route = useRoute();
  const router = useRouter();

  const filters = computed({
    get () {
      return (route.query as QueryParams) || undefined;
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

  return {
    page,
    filters
  };
}
