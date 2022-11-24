import { useContext } from "react";
import { BookContext } from "../context/BookContext";


const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="navbar">
            <h1>BookList App</h1>
            <h4>You have a total of {books.length} books left</h4>
        </div>
     );
}
 
export default Navbar;