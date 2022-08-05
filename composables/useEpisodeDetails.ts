import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { ID } from "graphql-ws";
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
export function useEpisodeDetails (props: { id?: ID }) {
  return useQuery<EpisodeQuery, EpisodeQueryVariables>(
    EpisodeQueryDefinition,
    reactive({
      id: props.id
    })
  );
}
