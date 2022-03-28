import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
{
    books {
        name
        id
        genre
        language
        status
    }
}
`;

const addBookMutation = gql`
mutation AddBook($name: String!, $genre:String!, $authorId: ID!, $language: String!, $status: String! ) {
    addBook(name: $name, genre:$genre, authorId: $authorId, language:$language, status:$status){
        name
        id
    }
}
`;

const addAuthorMutation = gql`
mutation AddAuthor($name: String!) {
    addAuthor(name: $name){
        name
        id
    }
}
`;

const getBookQuery = gql`
query($id: String){
    book(id: $id){
        id
        name
        genre
        language
        status
        author{
            id
            name
            books{
                name
                id
                genre
                language
                status
            }
        }
    }
}
`



export { getAuthorsQuery, getBooksQuery, addBookMutation, addAuthorMutation, getBookQuery};