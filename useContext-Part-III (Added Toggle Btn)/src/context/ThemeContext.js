import { createContext, Component } from "react";

export const ThemeContext = createContext()
class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
     }
     toggletheme = ()=>{
        this.setState({isLightTheme: !this.state.isLightTheme}  )
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggletheme: this.toggletheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;