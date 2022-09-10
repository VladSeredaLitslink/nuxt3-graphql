import { QueryParams } from "~~/constants/query-params";

export function useEpisodesFilters() {
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

    const episode = computed({
        get () {
            return route.query[QueryParams.Episode];
        },
        set (value) {
            router.push({
            query: Object.assign({}, { ...route.query, [QueryParams.Episode]: value })
            });
        }
    });

    return {
        page,
        filter: {
            name,
            episode
        }
    }
}