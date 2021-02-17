import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { setCurrentUser, newUser} from '../Redux/user'
import {useDispatch} from 'react-redux'


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

    function signup(evt) {
        evt.preventDefault()
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
        <div className="login-div">
            <h1 className="login-info">Glad to have you join us</h1>
            <form onSubmit={signup}>
            <label>Email:<br/><input className="login-details" value ={email} type="email" placeholder="enter your email address" name="email" onChange={(evt) => setEmail(evt.target.value)}/></label>
            <label>Password:<br/><input className="login-details" value ={password} type="password" placeholder="Create your password" name="password" onChange={(evt) => setPassword(evt.target.value)}/></label>
            <button className="styled-button">Create an Account</button>
            </form>
            <br></br>
            {/* <Form onSubmit={signup}>
                <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' value ={password} fluid label = "Password" placeholder='Create your password' onChange={(evt) => setPassword(evt.target.value)}></Form.Input>
                <Form.Button>Submit</Form.Button>
            </Form> */}
            <Link className="link-styling" exact="true" to="./login">Already have an account?</Link>
        </div>
    )
}



export default Signup;