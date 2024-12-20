import { createContext, useState } from "react"

export const ThemeContext = createContext("hello")

export const ThemeProvider = ({children}) =>{

    const [bgColor,setbgColor] = useState(false)

    return (<ThemeContext.Provider value={[bgColor , setbgColor]}>
        {children}
    </ThemeContext.Provider>)

}