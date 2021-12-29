import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Events from './pages/Events';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Events />} />
			<Route path="events" element={<Events />} />
			<Route path="events/:id" element={<Event />} />
			<Route path="events/create" element={<CreateEvent />} />
		</Routes>
	</BrowserRouter>

);

export default App;
