import React from "react";
import {useSelector} from "react-redux";
import {getAuthStateRoot} from "../store/reducers/auth";

const initialState = {token: null}

export const AuthContext = React.createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const {token} = useSelector(getAuthStateRoot)
    return (
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;