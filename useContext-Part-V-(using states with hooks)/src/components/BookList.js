import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";


const BookList = () => {
    const {books} = useContext(BookContext)
    console.log(books);
    return books.length ?  (
        <div className="booklist">
            <ul>
                {books.map(book =>{
                    return (<BookDetails book = {book} key = {book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div>
            <h1>No books left to read. Free time bitches!</h1>
        </div>
    )
}
 
export default BookList;