import { Button, FormControl, InputAdornment, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './CSS/Login.css'

function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [, dispatch] = useStateValue()

    const history = useHistory()

    const handleLogin = () => {
        dispatch({
            type: 'SET_USER',
            user: username
        })
        history.push('/')
    }

    const handleRegister = () => {
        dispatch({
            type: 'SET_USER',
            user: username
        })
        history.push('/')
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__header">
                    <span>Login</span>
                </div>
                <FormControl className='login__form'>
                    <TextField
                        className="login__input"
                        value={username}
                        label="Username"
                        variant="outlined"
                        color="secondary"
                        required
                        onChange={event => setUsername(event.target.value)}
                    />
                    <TextField
                        className="login__input"
                        value={password}
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        required
                        onChange={event => setPassword(event.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment
                                    position="end"
                                    onClick={event => setShowPassword(!showPassword)}
                                    className='password__adornment'
                                >
                                    {showPassword ? 'HIDE' : 'SHOW'}
                                </InputAdornment>
                        }}
                    />
                    <Button variant="contained" color="primary" className="login__button" onClick={event => handleLogin()}>
                        <div>LOGIN</div>
                    </Button>
                    <Button variant="contained" color="secondary" className="register__button" onClick={event => handleRegister()}>
                        <div>REGISTER</div>
                    </Button>
                </FormControl>
            </div>
        </div>
    )
}

export default Login

// onClick={event => setShowPassword(!showPassword)}
// {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}