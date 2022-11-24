import {useState, useContext} from 'react'
import {BookContext} from '../context/BookContext'

const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState(' ')
    const [author, setAuthor] = useState(' ')

    const handleSubmit = (e)=>{
        e.preventDefault()
        addBook(title, author)
        setAuthor('')
        setTitle('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" 
            required
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
            <label>Author</label>
            <input type="text" 
            required
            value={author}
            onChange={e=>setAuthor(e.target.value)}
            />
            <button>Add Book</button>
        </form>
     );
}
 
export default BookForm