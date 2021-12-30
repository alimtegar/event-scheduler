import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

import Events from './pages/Events';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_DUMMY_USER_TOKEN;

const App = () => (
	<QueryClientProvider client={new QueryClient()}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Events />} />
				<Route path="events" element={<Events />} />
				<Route path="events/:id" element={<Event />} />
				<Route path="events/create" element={<CreateEvent />} />
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>
);

export default App;
