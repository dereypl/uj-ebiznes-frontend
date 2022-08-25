import React, {useContext, useEffect} from 'react';
import jwt from "jwt-decode";
import {AuthContext} from "../../../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {setToken, setUser} = useContext(AuthContext)

    useEffect(() => {
        const token = location.search.split('=')[1]
        setToken(token)
        setUser(jwt(token))

        if (!location.pathname.includes('products')) {
            window.location.assign(`http://uj-ebiznes-frontend.azurewebsites.net/products`)
        }
    }, [location, navigate])

    return null
};

export default Auth;
