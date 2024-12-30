import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#F0FFF0',
        cardBackground: '#d8e3ec'
    },
    dark: {
        color: '#ffffff',
        background: '#000000',
        cardBackground: '#a8a8a8'
        
    }

}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ]   = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

