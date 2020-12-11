import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
// import './Pages/history';
import '../Styles/auth.css'


function Signup(){
    let redirect = useHistory();

    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [userProfile, setUserProfile] = useState({})


    //form functions
    const handleFullNameOnChange = (event) => {
        setFname(event.target.value)
    }

    const handleEmailOnChange = (event) => {
        setEmail(event.target.value)
    }

    const handleUsernameOnChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordOnChange = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordOnChange = (event) => {
        setCpassword(event.target.value)
    }
    const handleSignupOnSubmit = (event) => {
        event.preventDefault();  //keeps page from reloading

        userProfile['username'] = username
        userProfile['email'] = email
        userProfile['password'] = password
        localStorage.setItem(`${username}`, JSON.stringify(userProfile))
        console.log(localStorage)
        alert('Sign Up Successful')
        redirect.push('/login')
  
    }
    
    return(
        <div className='auth'>
        <div className='content'>
          <div className="left">
        <h1>Create your account here</h1>
        <form className='auth-container' onSubmit={handleSignupOnSubmit}>
            <input type='text' placeholder='Full Name' value={fname} onChange={handleFullNameOnChange}/>
            <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
            <input type='text' placeholder='E-mail' value={email} onChange={handleEmailOnChange}/>
            <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange}/>
            <input type='password' placeholder='Confirm Password' value={cpassword} onChange={handleConfirmPasswordOnChange}/>
            <button type='submit'>Create Account</button>
            <p>Already with an account? <Link to='/login'>Login</Link>.</p>
        </form>
        </div>
        <div className='right'>
        </div>
        </div>
          </div>

    )
}

export default Signup;
