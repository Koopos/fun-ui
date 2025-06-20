import React from 'react'

export interface ThemeProps {
    primaryColor: String
}

const defaultTheme = {
    primaryColor: 'red'
}

export const ThemeContext = React.createContext<ThemeProps>(defaultTheme)

export function ThemeProvider({theme,children}) {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}