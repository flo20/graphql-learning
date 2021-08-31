import React from 'react'
import {ApolloClient, ApolloProvider,  InMemoryCache} from "@apollo/client";

//components
import BookList from './components/BookList'

export default function App() {


  const client = new ApolloClient({
    uri:"http://localhost:4000/graphql",
    cache: new InMemoryCache()
  })

  console.log("Client data", client);
  return (
    <div id="main">
      <ApolloProvider client={client}>
      <BookList/>
      </ApolloProvider>
    </div>
  )
}
