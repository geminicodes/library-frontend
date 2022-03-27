import React from "react";
//import ApolloClient from "apollo-client";
//import { ApolloProvider } from "react-apollo";
// import { ApolloClient,InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
*/

//import "./App.css";

/*
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", cache: new InMemoryCache()
})
*/

import Landing from "./pages/Landing";
import Home from "./pages/Home";

// rename pages
function App() {
  
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  
}

/*
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Library</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}
*/

export default App;
