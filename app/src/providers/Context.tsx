import { createContext } from "react";

type ConextType = {
    BACKEND_URL: string
} 

const Context = createContext<ConextType>({
    BACKEND_URL : ''
})

function ContextProvider({children} : { children : JSX.Element }) {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URI

    return (
        <Context.Provider value={{BACKEND_URL}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }