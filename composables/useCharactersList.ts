import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import {
  Query,
  QueryCharacterArgs
} from "~/types/graphql/generated";

const CharactersQueryDefinition = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        gender
        image
        status
        species
        type
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
export function useCharacterList (props?: QueryCharacterArgs) {
  return useQuery<{characters: Query["characters"] }, QueryCharacterArgs>(
    CharactersQueryDefinition,
    props
  );
}
