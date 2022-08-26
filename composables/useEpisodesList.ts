import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { Ref } from "vue";
import { EpisodesQuery, EpisodesQueryVariables } from "~/types/graphql/generated";

const EpisodesQueryDefinition = gql`
    query episodes ($page: Int) {
       episodes(page: $page) {
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

export function useEpisodesList (props: { page?: Ref<number>}) {
  return useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesQueryDefinition,
    reactive({
      page: props.page
    })
  );
}
