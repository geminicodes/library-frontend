import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import { addAuthorMutation, getAuthorsQuery } from "../queries/queries";


const AddAuthor =() =>{
    const [name, setName] = useState('');
    const [addAuthorMut] = useMutation(addAuthorMutation);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAuthorMut({
            variables: {
                name: name,
            },
            refetchQueries: [getAuthorsQuery]
        });
        setName('');
    };
    
    return(
        <form id="add-author" onSubmit={handleSubmit}>
            <div className="field">
                <h1>New Author</h1>
                
                <input type="text" placeholder="Author Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button>+</button>
        </form>
    )
}

export default AddAuthor;