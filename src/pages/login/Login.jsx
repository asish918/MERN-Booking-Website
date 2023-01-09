import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'
import './login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})

        try {
            const res = await axios.post("http://localhost:8000/api/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            navigate('/');

        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
        }
    }

    console.log(user);

    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" className="loginInput" placeholder="username" id="username" onChange={handleChange} />
                <input type="text" className="loginInput" placeholder="password" id="password" onChange={handleChange} />
                <button disabled={loading}  onClick={handleLogin} className="loginButton">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login;