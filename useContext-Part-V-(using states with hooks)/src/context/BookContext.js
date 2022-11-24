import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Something Random 1', author: 'Nafay', id: 1},
        {title: 'Something Random 2', author: 'Usman', id: 2},
        {title: 'Something Random 3', author: 'Ali', id: 3},
        {title: 'Something Random 4', author: 'Ahmed', id: 4},
        {title: 'Something Random 5', author: 'Shery', id: 5}
    ])

    const addBook = (title, author) =>{
        setBooks([...books, {title, author, id: uuidv4()}])
    }

    const DelBook = (id) =>{
        setBooks(books.filter(book => book.id !== id))
    }

    return ( 
        <BookContext.Provider value={{books, addBook, DelBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;