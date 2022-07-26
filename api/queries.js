import { gql } from "@apollo/client/core"

export const GET_CHARACTERS = gql`
    query characters {
        characters {
            results {
                name
                id
            }
        }
    }
`
