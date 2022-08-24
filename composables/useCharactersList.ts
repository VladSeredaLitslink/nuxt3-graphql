import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { Ref } from "vue";
import {
  CharactersQuery,
  CharactersQueryVariables,
  FilterCharacter
} from "~/types/graphql/generated";

const CharactersQueryDefinition = gql`
  query characters($page: Int, $name: String, $status: String, $species: String, $type: String, $gender: String) {
    characters(page: $page, filter: {
      name: $name,
      status: $status,
      species: $species,
      type: $type,
      gender: $gender
    }) {
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
export function useCharacterList (props: { page?: Ref<number>, filter?: FilterCharacter }) {
  return useQuery<CharactersQuery, CharactersQueryVariables>(
    CharactersQueryDefinition,
    {
      page: props.page,
      ...props.filter
    }
  );
}
