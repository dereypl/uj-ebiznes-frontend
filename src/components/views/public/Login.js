import React, {useEffect} from 'react';
import {Box} from "./public.styles";
import {Heading} from "../../shared/Heading";
import GoogleButton from 'react-google-button'
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Login = () => {
    // const navigate = useNavigate()
    const handleLogin = () => {
        window.location.assign(`http://uj-ebiznes-backend.azurewebsites.net/login`)
    }

    // useEffect(() => {
    //     const token = Cookies.get("jwt-token")
    //     if (token) navigate('/products')
    // })

    return (
        <Box>
            <Heading margin={'0 0 10rem 0'}>
                Logowanie
            </Heading>
            <GoogleButton onClick={handleLogin}/>
        </Box>
    );
};

export default Login;