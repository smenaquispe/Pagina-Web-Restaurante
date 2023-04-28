
/**
 * I'm gonna use useReducer for set states of pages
 * States: 
 *  - LOGIN
 *  - DASHBOARD
 *  - MAIN
 */

export interface Vars {
    authorized?: boolean
    stage?: string
    userId?: number
}

type types = 'login' | 'logout'

export interface Action {
    type: types
    payload?: Vars
}

const initialVars : Vars = {
    authorized: false,
    stage: 'LOGIN',
    userId: -1
}

const varsReducer = (vars : Vars, action : Action) => {
    switch(action.type) {
        case 'login' : return {...action.payload}
        case 'logout' : return {...initialVars}        
    }
}


export {initialVars, varsReducer}
