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
    };
    
    return(
        <form id="add-author" onSubmit={handleSubmit}>
            <div className="field">
                <label>Author name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button>+</button>
        </form>
    )
}

export default AddAuthor;