import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const initialState = {token: null, user: null}

export const AuthContext = React.createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()

    // useEffect(()=>{
    //     if(!token && location.pathname !== '/'){
    //         navigate('/')
    //     }
    // }, [location, token, navigate])

    return (
        <AuthContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;