import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/queries";


const displayAuthors = (loading, data) =>{
    if(loading){
        return( <option disabled>Loading authors</option> );
    }else{
        return data.authors.map(author =>{
            return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
    }
}

const AddBook =() =>{
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');
    const [status, setStatus] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading, data } = useQuery(getAuthorsQuery);
    const [addBookMut] = useMutation(addBookMutation);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMut({
            variables: {
                name: name,
                genre: genre,
                language: language,
                status: status,
                authorId: authorId,
            },
            refetchQueries: [getBooksQuery]
        });
        setName('');
        setGenre('');
        setLanguage('');
        setStatus('');
        setAuthorId('');
    };
    
    return(
        <form id="add-book" onSubmit={handleSubmit}>
            <h1>New Book</h1>
            <div className="field">
                
                <input type="text" placeholder="Book Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                
                <select value={genre} label="Genre" onChange={(e) => setGenre(e.target.value)}>
                    <option>Select Genre</option>
                    <option value={"Fiction"}>Fiction</option>
                    <option value={"Mystery"}>Mystery</option>
                    <option value={"Thriller"}>Thriller</option>
                    <option value={"Horror"}>Horror</option>
                    <option value={"Fantasy"}>Fantasy</option>
                    <option value={"Other"}>Other</option>
                </select>
            </div>
            <div className="field">
                
                <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)}  />
            </div>
            <div className="field">
                <select value={status} label="Status" onChange={(e) => setStatus(e.target.value)}>
                    <option>Select Status</option>
                    <option value={"Sold"}>Sold</option>
                    <option value={"Sell"}>Sell</option>
                    <option value={"Not For Sale"}>Not For Sale</option>
                </select>
            </div>
            <div className="field">
        
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                    <option>Select Author</option>
                    { displayAuthors(loading, data) }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook

/*
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries'


function AddBook() {


    const { loading, error, data } = useQuery(getAuthorsQuery);
    const displayAuthorOptions = () => {
        if (loading) return <option >loading...</option>
        let { authors } = data;
        return authors.map(author => {
            return <option key={author.id} value={author.id}>{author.name}</option>
        })
    }

    const [book, setBook] = React.useState({ name: "", genre: "", authorId: "" });
    const [addBookMutation, { dataMutation }] = useMutation(addBookMutation);


    const handleSubmit = e => {
        e.preventDefault();
        addBookMutation({
            variables: {
                name: form.name,
                genre: form.genre,
                authorId: form.authorId,
            },
        });
    };


    return (
        <form className="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Name:</label>
                <input value={book.name} onChange={e => setBook({ ...book, name: e.target.value })} type="text" />
            </div>
            <div className="field">
                <label>Book Genre:</label>
                <input value={book.genre} onChange={e => setBook({ ...book, genre: e.target.value })} type="text" />
            </div>
            <div className="field">
                <label>Book Author:</label>
                <select value={book.authorId} onChange={e => setBook({ ...book, authorId: e.target.value })} >
                    <option>Select author</option>
                    {displayAuthorOptions()}
                </select>
            </div>
            <button >Submit</button>
        </form>
    );
}

export default AddBook;
*/

/*
import React from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from "../queries/queries";


function DisplayAuthors(){
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if(loading){
        return( <option disabled>Loading authors</option> );
    } else {
        return data.authors.map(author => {
            return( <option key={ author.id } value={author.id}>{ author.name }</option> );
        });
    }    
}

function AddBook() {
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select author</option>                       
                    { DisplayAuthors() }
                </select>
            </div>
            <button>+</button>
        </form>
    )      
}

export default AddBook;
*/