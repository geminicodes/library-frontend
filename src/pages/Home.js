import React, { Component } from 'react';
import { ApolloClient,InMemoryCache, ApolloProvider } from "@apollo/client";
import "../App.css";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import AddAuthor from "../components/AddAuthor";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", cache: new InMemoryCache()
})

class Home extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
        <div className="circle1"></div>
        <div className="circle2"></div>
          <div id="main">
            <div id="main-forms">
              <AddAuthor />
              <AddBook />
            </div>
            <div id="main-lists">
              <BookList />
            </div>
          </div>
        </ApolloProvider>
      );
    }
  }

export default Home;