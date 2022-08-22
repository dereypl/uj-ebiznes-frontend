import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import jwt from 'jwt-decode'
import {useNavigate} from "react-router-dom";

const initialState = {token: null, user: null}

export const AuthContext = React.createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const token = Cookies.get("jwt-token")
        if (token) {
            //TODO: push user info into context
            console.log(jwt(token));
            setToken(token)
            navigate('/products')
        }
    }, [])

    return (
        <AuthContext.Provider value={{token, user: null}}>
            {children}
        </AuthContext.Provider>
    );
};

export default BasketContextProvider;