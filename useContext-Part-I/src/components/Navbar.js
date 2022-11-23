import {Component} from 'react';
import {ThemeContext} from '../context/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext 
    render() { 
        // console.log(this.context);
        const {dark, isLightTheme, light} = this.context
        const theme = isLightTheme ? light : dark
        return (
            <nav style={{color: theme.syntax, background: theme.bg}}>
                <h1>Context App</h1>
                <ul>
                    <li style={{background: theme.ui}}>Home</li>
                    <li style={{background: theme.ui}}>About</li>
                    <li style={{background: theme.ui}}>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;