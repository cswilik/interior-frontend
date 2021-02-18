import React, { useState} from 'react'
import { setCurrentUser } from '../Redux/user'
import { useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'


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
        <div className="login-div">
            <h1 className="login-info">Welcome Back</h1>
            <form onSubmit={login}>
                <label >Email:<br/><input className="login-details" type="email" placeholder="enter email" name="email" value ={email} onChange={(evt) => setEmail(evt.target.value)}/></label>
                <label >Password:<br/><input className="login-details" type="password" placeholder="enter password" name="password"/></label>
                <br></br>
                <button className="styled-button">Login</button>
                {/* <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' fluid label = "Password" placeholder='Enter your password'></Form.Input>
                <Button>Submit</Button> */}
            </form>
            <br></br>
            <Link className="link-styling" to="./signup">First time? Sign up Here</Link>
        </div>
    )
}



    // const SignUpLink = styled(Link)`
    // font-family: 'Oxygen', sans-serif; 
    // font-style: none;
    // color: black;
    // :hover { font-style: italic;
    //     color: black } 
    // `
  


export default Login;   