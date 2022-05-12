import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
	const { loading, data } = useQuery(getBookQuery, {
		variables: { id: bookId }
	});
	let display;
	if (loading) {
		display = <div>loading</div>;
    } else {
        const { book } = data;
		display = (
			<div>
				<h2>{book.name}</h2>
                <p>Author: {book.author.name}</p>
				<p>Genre: {book.genre}</p>
                <p>Language: {book.language}</p>
                <p>Status: {book.status}</p>
				<h3>Other books by this author:</h3>
				<ul id="other-books">
					{book.author.books.map((item) => {
						return <li key={item.id}>{item.name} <br/> {item.language},{item.genre} <br/> {item.status}</li>;
					})}
				</ul>
			</div>
		);
	}

	return <div id="book-details">{display}</div>;
};

export default BookDetails;