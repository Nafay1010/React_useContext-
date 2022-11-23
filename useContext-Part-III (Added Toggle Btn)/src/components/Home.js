import { ThemeContext } from "../context/ThemeContext";
import React from 'react';


class Home extends React.Component {
    render() { 
        return (
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme, dark, light} = context
                const theme = isLightTheme ? light : dark
                return (
                <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
                    <ul>
                        <li style={{background: theme.ui}}> Something Random</li>
                        <li style={{background: theme.ui}}> Something Random</li>
                        <li style={{background: theme.ui}}> Something Random</li>
                    </ul>
                </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Home;