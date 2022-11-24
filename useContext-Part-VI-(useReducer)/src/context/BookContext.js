import { createContext, useReducer } from "react";
import {BookReducer} from '../reducer/BookReducer'
export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [
        {title: 'Something Random 1', author: 'Nafay', id: 1},
        {title: 'Something Random 2', author: 'Usman', id: 2},
        {title: 'Something Random 3', author: 'Ali', id: 3},
        {title: 'Something Random 4', author: 'Ahmed', id: 4},
        {title: 'Something Random 5', author: 'Shery', id: 5}
    ])
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;