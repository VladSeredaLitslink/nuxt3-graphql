import { gql } from "@apollo/client/core"
import { useQuery } from '@vue/apollo-composable'


 const CharactersQueryDefinition = gql`
    query characters ($page: Int) {
        characters ( 
            page: $page
        ) {
            results {
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
`
export function useCharacterList(props: { page?: ref<number>}) {
    return useQuery(CharactersQueryDefinition, {
        page: props.page
    })
}
