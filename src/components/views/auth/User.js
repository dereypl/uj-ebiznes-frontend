import React, {useEffect, useState} from 'react';
import Cookies from "js-cookie";

const User = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(Cookies.get("jwt-token"))
    },[])

    return (
        <div>
            {token}
        </div>
    );
};

export default User;
