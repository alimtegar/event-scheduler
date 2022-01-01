import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import swal from 'sweetalert';

import { useAuthContext } from '../contexts/AuthContext';

// Import routes
import routes from '../routes';

// Import API callers
import { verifyToken } from '../api';

const Wrapper = () => {
    const authContext = useAuthContext();
    const storedAuth = JSON.parse(localStorage.getItem('auth'));

    // Set token from local storage
    const _routes = useRoutes(routes(storedAuth?.token));
    axios.defaults.headers.common['Authorization'] = storedAuth?.token;

    const mutation = useMutation((token) => verifyToken(token), {
        onSuccess: (data) => {
            // Re-set auth context and auth in local storage
            authContext.setAuth(data);
        },
        onError: () => {
            swal("error", "error", "error");
        },
    });

    useEffect(() => {
        if (storedAuth) {
            mutation.mutate(storedAuth.token);
        }
    }, []);


    return (
        <>{_routes}</>
    )
};

export default Wrapper;