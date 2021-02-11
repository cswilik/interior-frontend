import React, { useState} from 'react'
import { setCurrentUser } from '../Redux/user'
import { useDispatch} from 'react-redux'
import { Form } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const loginInfo = {
        email: email
    }


    function login() {
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(r => r.json())
        .then(userData => dispatch(setCurrentUser(userData)))
        history.push('./dashboard')
    }

    

   

    return (
        <div>
            <h1>Welcome Back!</h1>
            <Form onSubmit={login}>
                <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' fluid label = "Password" placeholder='Enter your password'></Form.Input>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

export default Login;