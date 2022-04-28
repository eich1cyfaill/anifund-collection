import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "./apollo-client";
import App from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const ApolloClient = useApollo(pageProps.initialApolloState)
  return (
      <ApolloProvider client={ApolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>

  )
}




export default App
