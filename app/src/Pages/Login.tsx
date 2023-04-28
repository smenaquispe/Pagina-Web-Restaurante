import React, { useContext } from "react";
import { Context } from "../providers/Context";

function Login() {
    const { BACKEND_URL } = useContext(Context);

    const handleForm = (e : React.FormEvent<HTMLFormElement>) => {
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
            console.log(json)
        })
    }

    return (
        <form onSubmit={handleForm}>
            <input type="text" name="email" />
            <input type="text" name="passwd" />
            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Login