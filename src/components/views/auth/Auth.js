import React, {useEffect} from 'react';
import jwt from "jwt-decode";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthStateRoot, setCredentials} from "../../../store/reducers/auth";

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const state = useSelector(getAuthStateRoot)

    useEffect(() => {
        const token = location.search.split('=')[1]
        console.log(1, token);
        dispatch(setCredentials(state, {token, user: jwt(token).name}))
        navigate('/products')
        // if (!location.pathname.includes('products')) {
        //     window.location.assign(`https://uj-ebiznes-frontend.azurewebsites.net/products`)
        // }
    }, [location, navigate])

    return null
};

export default Auth;
