import {createSlice} from "@reduxjs/toolkit";

export const getAuthStateRoot = state => state.auth;

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setCredentials(state, {payload}) {
            state.token = payload.token
            state.user = payload.user
        },
        removeCredentials(state) {
            state.token = null
            state.user = null
        },
    }
});


export const {setCredentials, removeCredentials} = authReducer.actions;
export default authReducer.reducer;
