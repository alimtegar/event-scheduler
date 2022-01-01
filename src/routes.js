import { Navigate } from 'react-router-dom';

// Import components
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';

const routes = (isAuthenticated = undefined) => {
    const protectRoute = (element, routeType) => {
        switch (routeType) {
            case 'PROTECTED': return isAuthenticated ? element : (<Navigate to="/login" />);
            case 'PUBLIC': return isAuthenticated ? (<Navigate to="/events" />) : element;
            default: return element;
        }
    }

    return [
        // Guest routes
        {
            path: '/login',
            element: protectRoute(<Login />, 'PUBLIC'),
        },
        {
            path: '/register',
            element: protectRoute(<Register />, 'PUBLIC'),
        },
        // Authenticated routes
        {
            path: '/',
            element: protectRoute(<Events />, 'PROTECTED'),
        },
        {
            path: '/events',
            element: protectRoute(<Events />, 'PROTECTED'),
        },
        {
            path: '/events/:id',
            element: protectRoute(<Event />, 'PROTECTED'),
        },
        {
            path: '/events/create',
            element: protectRoute(<CreateEvent />, 'PROTECTED'),
        },
    ]
};

export default routes;