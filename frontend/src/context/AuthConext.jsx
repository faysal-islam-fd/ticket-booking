import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider({children}) {

const  [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null)

    return (
        <AuthContext.Provider value={{user,setUser}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
