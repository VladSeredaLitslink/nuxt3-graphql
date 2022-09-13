import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { Query, QueryEpisodeArgs } from "~/types/graphql/generated";

const EpisodesQueryDefinition = gql`
    query episodes ($page: Int, $filter: FilterEpisode) {
       episodes(page: $page, filter: $filter) {
           results {
               id
               name
               air_date
               episode
               characters {
                   id
                   name
                   image
               }
               created
           }
           info {
               count
               pages
           }
       }
    }   
`;

export function useEpisodesList (props?: QueryEpisodeArgs) {
  return useQuery<{episodes: Query["episodes"], QueryEpisodeArgs}>(
    EpisodesQueryDefinition,
    props
  );
}
