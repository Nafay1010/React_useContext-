import { ThemeContext } from "../context/ThemeContext";
import {Component} from 'react';

class ToggleTheme extends Component {
     
    render() { 
        return (
            <ThemeContext.Consumer>{(context)=>{
                 const {toggletheme} = context
            return(
                <div>
                    <button onClick={toggletheme}>Toggle Theme</button>
                </div>
            )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default ToggleTheme;