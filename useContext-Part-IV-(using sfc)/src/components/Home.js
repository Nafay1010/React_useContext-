import { ThemeContext } from "../context/ThemeContext";
import React, {useContext} from 'react';
import { HomeContext } from "../context/HomeContext";


// class Home extends React.Component {
//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context)=>{
//                 const {isLightTheme, dark, light} = context
//                 const theme = isLightTheme ? light : dark
//                 return (
//                 <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
//                     <ul>
//                         <li style={{background: theme.ui}}> Something Random</li>
//                         <li style={{background: theme.ui}}> Something Random</li>
//                         <li style={{background: theme.ui}}> Something Random</li>
//                     </ul>
//                 </div>
//                 )
//             }}
//             </ThemeContext.Consumer>
//         );
//     }
// }

const Home = () => {
    const {isLightTheme, dark, light} = useContext(ThemeContext)
    const {books} = useContext(HomeContext)
    const theme = isLightTheme ? light : dark
    return ( 
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                        {books.map(book =>{
                            return (
                                <li key={book.id} style={{background: theme.ui}}> {book.title}</li>
                            )
                        })}
            </ul>
        </div>
     );
}
 
export default Home;
 