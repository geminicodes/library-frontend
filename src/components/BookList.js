import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import React, { useState } from 'react';

function BookList() {
	const { loading, error, data } = useQuery(getBooksQuery);

	const [ selected, setSelected ] = useState();

	if (loading) return <p>Loading....</p>;

	if (error) return <p>Oops! Something went wrong</p>;

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