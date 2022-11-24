import { useContext } from "react";
import { BookContext } from "../context/BookContext";


const BookDetails = ({book}) => {
    const {DelBook} = useContext(BookContext)
    
    return ( 
        <li onClick={()=> DelBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;