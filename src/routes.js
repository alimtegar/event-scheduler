import { Navigate } from 'react-router-dom';

// Import components
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';

const routes = (isLoggedIn) => {
    const protectRoute = (element) => {
        return isLoggedIn ? element : (<Navigate to="/login" />);
    }

    return [
        {
            path: '/login',
            element: (<Login />),
        },
        {
            path: '/register',
            element: (<Register />),
        },
        {
            path: '/',
            element: protectRoute(<Events />),
        },
        {
            path: '/events',
            element: protectRoute(<Events />),
        },
        {
            path: '/events/:id',
            element: protectRoute(<Event />),
        },
        {
            path: '/events/create',
            element: protectRoute(<CreateEvent />),
        },
    ]
};

export default routes;