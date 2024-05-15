import { createContext, useState, useCallback, useEffect } from "react";

const ThemeContext = createContext()

const ThemeFunctions = function ({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)

    const switchTheme = useCallback(() => {
        setDarkTheme(prevTheme => !prevTheme);
    }, []);

    useEffect(() => {
        console.log(`Dark Theme: ${darkTheme}`)
    }, [darkTheme])

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