import React from 'react';

const Login = () => {
    const handleLogin = (path) => {
        //FIXME:
        window.location.assign(`http://localhost:8080` + path)
    }

    return (
        <div>
            <p><button onClick={() => handleLogin("/login")}>Login Google</button></p>
        </div>
    );
};

export default Login;
