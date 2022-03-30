import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import React, { useState } from 'react';

function BookList() {
	const { loading, error, data } = useQuery(getBooksQuery);

	const [ selected, setSelected ] = useState();

	if (loading) return <p>Loading....</p>;

	if (error) return <p>Ops! Something went wrong</p>;

	return (
		<div>
			<ul id="book-list">
				<h1>Library</h1>
				{data.books.map((book) => {
					return (
						<li
							key={book.id}
							onClick={() => {
								setSelected(book.id);
							}}
						>
							{book.name}
						</li>
					);
				})}
			</ul>
			{selected ? <BookDetails bookId={selected} /> : null}
		</div>
	);
}

export default BookList;

/*
import React,{ useState } from "react";
import { useQuery } from "@apollo/client";
//import { gql } from "apollo-boost";
//import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const {loading, error, data} = useQuery(getBooksQuery);
  if (data) {
  console.log("data: ", data);
	}
	if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  const [selected, setSelected] = useState(null);
  
  return (
      <div>
        <ul id="book-list">
          {data.books.map(book => (
            <li key={bookId} onClick={() => {setSelected(book.id)}}>{book.name}</li>
          ))}
        </ul>
        {selected ? <BookDetails bookId = {selected} /> : <p>no book selected</p> }
      </div>
  );
}
  
    
    
  
export default BookList;
*/

/*
class BookList extends Component {
    render() {
        return (
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);
*/