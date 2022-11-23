import { useState, createContext } from "react";

export const HomeContext = createContext()

const HomeContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title : "Yea IDK bro1", id: 1},
        {title : "Yea IDK bro2", id: 2},
        {title : "Yea IDK bro3", id: 3},
        {title : "Yea IDK bro4", id: 4},
        {title : "Yea IDK bro5", id: 5},
    ])
    return ( 
        <HomeContext.Provider value={{books}}>
            {props.children}
        </HomeContext.Provider>
        );

}
 
export default HomeContextProvider;
