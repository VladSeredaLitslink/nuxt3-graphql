import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { Ref } from "vue";
import {
  CharactersQuery,
  CharactersQueryVariables
} from "~/types/graphql/generated";

const CharactersQueryDefinition = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        gender
        image
        location {
          name
        }
      }
      info {
        count
        pages
      }
    }
  }
`;
export function useCharacterList (props: { page?: Ref<number> }) {
  return useQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersQueryDefinition,
    reactive({
      page: props.page
    })
  );
}
