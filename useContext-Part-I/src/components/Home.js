import { ThemeContext } from "../context/ThemeContext";
import React from 'react';


class Home extends React.Component {
    static contextType = ThemeContext 
    render() { 
        const {isLightTheme, dark, light} = this.context
        const theme = isLightTheme ? light : dark
        return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}> Something Random</li>
                <li style={{background: theme.ui}}> Something Random</li>
                <li style={{background: theme.ui}}> Something Random</li>
            </ul>
        </div>
        );
    }
}
 
export default Home;