import { createContext, useEffect, useState } from "react"


export const ThemeContext = createContext()
function ThemeContextProvider({children}){


    const [theme,setTheme] = useState(localStorage.getItem("theme") || "forest")
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem("theme",theme)
    },[theme])

    function toggleTheme(){
        setTheme(prevTheme=> (prevTheme==="forest" ? "cupcake" : "forest"))
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider