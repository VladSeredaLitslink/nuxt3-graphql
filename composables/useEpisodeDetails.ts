import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { ID } from "graphql-ws";
import { Ref } from "vue";
import { EpisodeQuery, EpisodeQueryVariables } from "~/types/graphql/generated";

const EpisodeQueryDefinition = gql`
    query episode($id: ID!) {
        episode(
            id: $id
        ) {
            id
            name
            episode
            air_date
            created
            characters {
                id
                name
                image
                gender
            }
        }
    }
`;
export function useEpisodeDetails (props: { id: Ref<string> }) {
  return useQuery<EpisodeQuery, EpisodeQueryVariables>(
    EpisodeQueryDefinition,
    reactive({
      id: props.id
    })
  );
}
