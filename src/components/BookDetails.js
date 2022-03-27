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
				<p>{book.genre}</p>
				<p>{book.author.name}</p>
				<p>All books by this author:</p>
				<ul className="other-books">
					{book.author.books.map((item) => {
						return <li key={item.id}>{item.name}</li>;
					})}
				</ul>
			</div>
		);
	}

	return <div id="book-details">{display}</div>;
};

export default BookDetails;


/*
import React from "react";
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries'

const displayBookDetails = (loading, data, error) => {
    if (loading) return <p>loading...</p>
    if (error) return <p>Something went wrong..</p>
    if (data.book) {
        return (
            <div>
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>All the books by the author: </p>
                <ul className="other-books">
                    {data.book.author.books.map(item =>{
                        return<li key={item.id}>{item.name}</li>
                    })
                    }
                </ul>
            </div>
        )
    }else{
        return(
            <div>
                No data to display..
            </div>
        )
    }
}


function BookDetails(props) {
    const { loading, data, error } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        }
    });
    // console.log(data)
    return (
        <div id="book-details">
            <p>OutPut here</p>
            {displayBookDetails(loading, data, error)}
        </div>
    )
}

export default BookDetails;
*/
