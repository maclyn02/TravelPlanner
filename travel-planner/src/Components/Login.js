import { Button, FormControl, InputAdornment, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__header">
                    <span>Login</span>
                </div>
                <FormControl className='login__form'>
                    <TextField
                        className="login__input"
                        label="Username"
                        variant="outlined"
                        color="secondary"
                        required
                    />
                    <TextField
                        className="login__input"
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        required
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
                    <Link to='/'>
                        <Button variant="contained" color="primary" className="login__button">
                            <div>LOGIN</div>
                        </Button>
                    </Link>
                    <Link to='/'>
                        <Button variant="contained" className="register__button">
                            <div>REGISTER</div>
                        </Button>
                    </Link>
                </FormControl>
            </div>
        </div>
    )
}

export default Login

// onClick={event => setShowPassword(!showPassword)}
// {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}