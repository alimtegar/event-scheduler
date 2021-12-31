import { useRoutes, BrowserRouter } from 'react-router-dom';

import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';



// Import components
// import Events from './pages/Events';
// import Event from './pages/Event';
// import CreateEvent from './pages/CreateEvent';

import routes from './routes';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_DUMMY_USER_TOKEN;

const App = () => {
	const isLoggedIn = false;
	const _routes = useRoutes(routes(isLoggedIn));

	return (
		<QueryClientProvider client={new QueryClient()}>
			{_routes}
		</QueryClientProvider>
	);
};

export default App;
