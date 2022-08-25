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
        if (window.location.protocol === "https:") {
            window.location.assign(`http://uj-ebiznes-frontend.azurewebsites.net/auth?token=${token}`)
        } else {
            dispatch(setCredentials(state, {token, user: jwt(token).name}))
            navigate('/products')
        }
    }, [location, navigate])

    return null
};

export default Auth;
