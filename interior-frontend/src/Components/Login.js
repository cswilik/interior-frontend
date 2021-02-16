import React, { useState} from 'react'
import { setCurrentUser } from '../Redux/user'
import { useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import styled from 'styled-components';

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
        <LoginDiv>
            <LoginInfo>Welcome Back</LoginInfo>
            <form onSubmit={login}>
                <p><label>Email:<br/><LoginForm type="email" placeholder="enter email" name="email" value ={email} onChange={(evt) => setEmail(evt.target.value)}/></label></p>
                <p><label>Password:<br/><LoginForm type="password" placeholder="enter password" name="password"/></label></p>
                <LoginButton>Login</LoginButton>
                {/* <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' fluid label = "Password" placeholder='Enter your password'></Form.Input>
                <Button>Submit</Button> */}
            </form>
            <br></br>
            <SignUpLink to="./signup">First time? Sign up Here</SignUpLink>
        </LoginDiv>
    )
}

const LoginInfo = styled.h1` 
    margin-top: 10px;
    font-family: 'Oxygen', sans-serif;
`

const LoginDiv = styled.div`
    padding: 19px;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    text-align: left;
 `

 const LoginForm = styled.input`
    width: 250px;
    height: 30px;
    background: transparent;
    border: 0;
    color: black;
    border-radius: 5px;
    font-family: 'Oxygen', sans-serif;
    border-bottom: 2px dotted black;
    :focus { outline: none;}
 `
    const SignUpLink = styled(Link)`
    font-family: 'Oxygen', sans-serif; 
    font-style: none;
    color: black;
    :hover { font-style: italic;
        color: black } 
    `
    const LoginButton = styled.button`
      position: relative;
      display: inline-block;
      white-space: nowrap;
      background: transparent;
      border-radius: 5px;
      border: 02px solid #121212;
      border-width: 01px 01px 01px 01px;
      padding: 5px 10px 5px 10px;
        font-size: 1em;
        cursor: pointer;
        :focus { outline-color: black;}
    `


export default Login;   