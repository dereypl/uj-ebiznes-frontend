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
        if (window.location.protocol !== "https:") {
            window.location.protocol = "http:";
            window.location.reload();
        } else {
            const token = location.search.split('=')[1]
            console.log(1, token);
            dispatch(setCredentials(state, {token, user: jwt(token).name}))
            navigate('/products')
        }
    }, [location, navigate])

    return null
};

export default Auth;
