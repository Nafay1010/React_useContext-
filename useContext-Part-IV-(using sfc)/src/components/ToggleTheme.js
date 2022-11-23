import { ThemeContext } from "../context/ThemeContext";
import {Component, useContext} from 'react';

// class ToggleTheme extends Component {
    
//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context)=>{
//                  const {toggletheme} = context
//             return(
//                 <div>
//                     <button onClick={toggletheme}>Toggle Theme</button>
//                 </div>
//             )
//             }}
//             </ThemeContext.Consumer>
//         );
//     }
// }
 


const ToggleTheme = () => {
    const {toggletheme} = useContext(ThemeContext)

    return ( 
        <div>
            <button onClick={toggletheme}>Toggle Theme</button>
        </div>
     );
}
 
export default ToggleTheme;