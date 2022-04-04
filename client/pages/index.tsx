import type { NextPage } from 'next'
import Head from 'next/head'
// import { client } from './apollo-client'
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client'
import styles from '../styles/Home.module.css'
import {Main} from "../layouts/main";
import {any} from "prop-types";



const Home: NextPage = ({launches}: any) => {

    console.log('launches is', launches)

  return (
    <Main>
      <Head>
        <title>AniFund</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>


    </Main>
  )
}

export async function getStaticProps() {

    const client = new ApolloClient({
        uri: 'https://graphql.anilist.co/',
        cache: new InMemoryCache()
    })

    /*const { data } = await client.query({
        query: gql`
            query {
                Page(page: 5, perPage: 2){
                    media {
                        genres, isAdult, popularity, status
                    }
                }
            }
        `
    });*/

    let query = `
            query{
                Media (id: 1, type: ANIME) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                }
            }
    `

    let variables = {
        id: 15125
    }

    let url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        }

    const data = fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);

    function handleResponse(response: any) {
        return response.json().then(function (json: any) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    let result

    function handleData(data: any) {
        result = data
        console.log(data);
    }




    function handleError(error: any) {
        console.error(error);
    }




    return {
        props: {
            result
        }
    }
}


export default Home
