import {Component, useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext'

// class Navbar extends Component {
//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context)=>{   
//                 const {dark, isLightTheme, light} = context
//                 const theme = isLightTheme ? light : dark
//             return(
//                 <nav style={{color: theme.syntax, background: theme.bg}}>
//                     <h1>Context App</h1>
//                     <ul>
//                         <li style={{background: theme.ui}}>Home</li>
//                         <li style={{background: theme.ui}}>About</li>
//                         <li style={{background: theme.ui}}>Contact</li>
//                     </ul>
//                 </nav>
//             )
//             }}
//             </ThemeContext.Consumer>
//         );
//     }
// }


const Navbar = () => {
	const {isLightTheme, dark, light} = useContext(ThemeContext)
	const theme = isLightTheme ? light : dark
	return ( 
		<nav style={{color: theme.syntax, background: theme.bg}}>
				<h1>Context App</h1>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
		</nav>
	 );
}
 
export default Navbar;
 