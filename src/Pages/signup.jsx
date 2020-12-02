import React, {useState} from 'react'
// import {LoginContext} from '../contexts/LoginContext'

function Signup() {

    // const {setLogged} = useContext(LoginContext)

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [conf, setConf] = useState("")
    const [email, setEmail] = useState("")

    function Validation () {
        
        // // Check if password is equal to confirmation
        // pass === conf ? 
        // setLogged(true)
        // : 
        // alert("Password should be the same as confirmation")
        
    }

    return (
        <div className="cully">
            <h2>Register for an account</h2>
            <form onSubmit={Validation}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setUser(e.target.value)} 
                        value={user} 
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        placeholder="Email address"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        onChange={(e) => setPass(e.target.value)} 
                        value={pass} 
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control" 
                        onChange={(e) => setConf(e.target.value)} 
                        value={conf}
                        placeholder="Confirm password" 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
        </div>
    )
}

export default Signup

