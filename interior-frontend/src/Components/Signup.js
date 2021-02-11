import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'
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
        <div>
            <h1>Glad to have you join us!</h1>
            <Form onSubmit={signup}>
                <Form.Input value ={email} fluid label ='Email' placeholder='Enter your email address' onChange={(evt) => setEmail(evt.target.value)} />
                <Form.Input type= 'password' value ={password} fluid label = "Password" placeholder='Create your password' onChange={(evt) => setPassword(evt.target.value)}></Form.Input>
                <Form.Button>Submit</Form.Button>
            </Form>
            <Link exact to="./login">Already have an account?</Link>
        </div>
    )
}

export default Signup;