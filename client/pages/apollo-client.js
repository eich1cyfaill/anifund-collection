import { ApolloClient, InMemoryCache} from "@apollo/client";
import { useMemo } from 'react'

let apolloClient

export const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache()
})

function createApolloClient() {
    return new ApolloClient({
        ssrMode: true,
        link: new HttpLink({
            uri: "https://graphql.anilist.co"
        }),
        cache: new InMemoryCache()
    })
}

export function initializeApollo(initialState = null){
    const _apolloClient = apolloClient ?? createApolloClient()
    if(initialState){
        const existingCache =_apolloClient.extract()
        _apolloClient.cache.restore({...existingCache, ...initialState})
    }
    if(typeof window === "undefined") return _apolloClient
    if(!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export function useApollo(initialState){
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}

