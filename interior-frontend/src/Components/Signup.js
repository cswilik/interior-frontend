import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'
import {useHistory, Link} from 'react-router-dom'
import { setCurrentUser, newUser} from '../Redux/user'
import {useDispatch} from 'react-redux'
import styled from 'styled-components';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
   

    const userData = {
        email: email,
        password: password,
        name: "",
        bio:"",
        fav_park: ""
    }

    function signup() {
        fetch("http://localhost:3000/users", {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      .then(r => r.json())
      .then(data => {
          dispatch(newUser(data))
          dispatch(setCurrentUser(data))
          history.push('./dashboard')

    })
    }

    return (
        <SignupDiv>
            <SignupInfo>Glad to have you join us</SignupInfo>
            <form onSubmit={signup}>
            <p><label>Email:<br/><SignUpForm value ={email} type="email" placeholder="enter your email address" name="email" onChange={(evt) => setEmail(evt.target.value)}/></label></p>
            <p><label>Password:<br/><SignUpForm value ={password} type="password" placeholder="Create your password" name="password" onChange={(evt) => setPassword(evt.target.value)}/></label></p>
            <SignupButton>Create an Account</SignupButton>
            </form>
            <br></br>
            {/* <Form onSubmit={signup}>
                <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' value ={password} fluid label = "Password" placeholder='Create your password' onChange={(evt) => setPassword(evt.target.value)}></Form.Input>
                <Form.Button>Submit</Form.Button>
            </Form> */}
            <LoginLink exact to="./login">Already have an account?</LoginLink>
        </SignupDiv>
    )
}

const SignupDiv = styled.div`
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


const SignupInfo = styled.h1` 
    margin-top: 10px;
    font-family: 'Oxygen', sans-serif;
`

const SignUpForm = styled.input`
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
const LoginLink = styled(Link)`
    font-family: 'Oxygen', sans-serif; 
    font-style: none;
    color: black;
    :hover { font-style: italic;
        color: black } 
    `
const SignupButton = styled.button`
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

export default Signup;