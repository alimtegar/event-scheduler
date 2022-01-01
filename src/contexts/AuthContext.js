import { createContext, useReducer, useContext, } from "react";
import axios from 'axios';

const AuthContext = createContext(undefined);
const initState = {
    id: 0,
    name: '',
    email: '',
    token: '',
    setAuth: () => { },
    removeAuth: () => { },
};


// Context actions
const setAuth = (data, state) => {
    // Store auth to local storage
    localStorage.setItem('auth', JSON.stringify(data))

    // Set default Authorization header
    axios.defaults.headers.common['Authorization'] = `${data.token}`;

    return {
        ...state,
        ...data,
    };
};

const removeAuth = (state) => {
    localStorage.removeItem('auth');
    delete axios.defaults.headers.common["Authorization"];

    return {
        ...state,
        ...initState,
    };
};

// Context reducers
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return setAuth(action.payload, state);
        case "REMOVE_AUTH":
            return removeAuth(state);
        default:
            return state;
    }
};


// Context provider
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initState);

    const setAuth = (data) => dispatch({
        type: 'SET_AUTH',
        payload: data,
    });
    const removeAuth = () => dispatch({
        type: 'REMOVE_AUTH',
    });

    return (
        <AuthContext.Provider value={{ ...state, setAuth, removeAuth, }}>
            {children}
        </AuthContext.Provider>
    );
};

// Context hooks
function useAuthContext() {
    const authContext = useContext(AuthContext)

    if (authContext === undefined) {
        throw new Error('useAuthContext must be used within a AuthContextProvider')
    }

    return authContext;
}

export {
    AuthContextProvider,
    useAuthContext,
};