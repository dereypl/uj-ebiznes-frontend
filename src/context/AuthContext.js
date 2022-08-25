import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAuthStateRoot} from "../store/reducers/auth";

const initialState = {token: null}

export const AuthContext = React.createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {token} = useSelector(getAuthStateRoot)

    useEffect(() => {
        if (!token && location.pathname !== '/') {
            navigate('/')
        }
    }, [location, token, navigate])

    return (
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;