import { createContext, useState, useCallback, useEffect } from "react";

const ThemeContext = createContext()

const ThemeFunctions = function ({ children }) {
    const [darkTheme, setDarkTheme] = useState(() => {
        return localStorage.getItem("dark") === "true";
    })

    const switchTheme = useCallback(() => {
        setDarkTheme(prevTheme => {
            const newTheme = !prevTheme
            localStorage.setItem("dark", newTheme)
            return newTheme
        })
    }, []);

    return (
        <ThemeContext.Provider value={{ darkTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeFunctions
}