import React, { useState} from 'react'
import { setCurrentUser } from '../Redux/user'
import { useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const [error, setError] = useState(null)
    const loginInfo = {
        email: email,
        password: password
    }



    function login(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(r => {
            return r.json().then((data) => {
                if (r.ok) {
                    return data
                } else {
                    throw data
                }
            })
        })
        .then(userData => { dispatch(setCurrentUser(userData.user))
            localStorage.setItem("token", userData.token)
            history.push('./dashboard')
        })
        .catch(data => setError(data.error))
    }

    

   

    return (
        <div className="login-div">
            <h1 className="login-info">Welcome Back</h1>
            <form onSubmit={login}>
                <label >Email:<br/><input className="login-details" type="email" placeholder="enter email" name="email" value ={email} onChange={(evt) => setEmail(evt.target.value)}/></label>
                <label >Password:<br/><input className="login-details" type="password" placeholder="enter password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} /></label>
                {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
                <br></br>
                <button className="styled-button">Login</button>
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