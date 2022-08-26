import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { Ref } from "vue";
import { CharacterQuery, CharacterQueryVariables } from "~/types/graphql/generated";

const CharacterQueryDefinition = gql`
    query character($id: ID!) {
        character(
            id: $id
        ) {
            id
            name
            status
            species
            type
            gender
            origin {
                name
            }
            location {
                name
            }
            image
            episode {
                id
                name
                episode
                air_date
                created
                characters {
                    id
                    name
                }
            }
        }
    }
`;
export function useCharacterDetails (props: { id?: Ref<string> }) {
  return useQuery<CharacterQuery, CharacterQueryVariables>(
    CharacterQueryDefinition,
    reactive({
      id: props.id
    })
  );
}
