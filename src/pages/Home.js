import React, { Component } from 'react';
import { ApolloClient,InMemoryCache, ApolloProvider } from "@apollo/client";
import "../App.css";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import AddAuthor from "../components/AddAuthor";

const client = new ApolloClient({
    uri: "https://library-project-server.herokuapp.com/graphql", cache: new InMemoryCache()
})

class Home extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
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