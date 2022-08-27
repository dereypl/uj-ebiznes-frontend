import React from 'react';
import {Box} from "./public.styles";
import {Heading} from "../../shared/Heading";
import GoogleButton from 'react-google-button'

const Login = () => {
    const handleLogin = () => {
        window.location.assign(`https://uj-ebiznes-backend.azurewebsites.net/login`)
    }

    return (
        <Box>
            <Heading data-id={'login-header'} margin={'0 0 10rem 0'}>
                Logowanie
            </Heading>
            <GoogleButton data-id={'google-button'} onClick={handleLogin}/>
        </Box>
    );
};

export default Login;