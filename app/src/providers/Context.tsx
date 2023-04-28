import React, { createContext, useEffect, useReducer, useState } from "react";
import { initialVars, varsReducer, Action, Vars } from "./Reducer";

type ConextType = {
    BACKEND_URL: string
    vars: Vars
    dispatch: React.Dispatch<Action>
} 

const Context = createContext<ConextType>({
    BACKEND_URL : '',
    vars: {},
    dispatch: () => {}
})

function ContextProvider({children} : { children : JSX.Element }) {

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URI

    const [vars, dispatch] = useReducer(varsReducer, initialVars);

    useEffect(() => {
        console.log({vars})
    }, [vars, dispatch])

    return (
        <Context.Provider value={{BACKEND_URL, vars, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }