import { createContext, useState } from "react";

type ConextType = {
    BACKEND_URL: string
    authorized: boolean
    setAuthorized: (authorized : boolean) => void
} 

const Context = createContext<ConextType>({
    BACKEND_URL : '',
    authorized : false,
    setAuthorized : () => {}
})

function ContextProvider({children} : { children : JSX.Element }) {

    const [authorized, setAuthorized] = useState<boolean>(false)
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URI

    return (
        <Context.Provider value={{BACKEND_URL, authorized, setAuthorized}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }