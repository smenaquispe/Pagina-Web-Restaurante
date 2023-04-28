import React, { useCallback, useContext } from "react";
import { Context } from "../providers/Context";

function Login() {
    const { BACKEND_URL, dispatch } = useContext(Context);

    const handleForm = useCallback((e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        fetch(BACKEND_URL + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email' : formData.get('email'),
                'passwd' : formData.get('passwd')
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json['user-info']) {
                dispatch({
                    type: 'login',
                    payload: { userId: json['user-info']['id']}
                })
            }
        })
    }, [])

    return (
        <form onSubmit={handleForm}>
            <input type="text" name="email" />
            <input type="text" name="passwd" />
            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Login