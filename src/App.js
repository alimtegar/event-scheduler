import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

// Import components
import Wrapper from './components/Wrapper';

// Import contexts
import { AuthContextProvider } from './contexts/AuthContext';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_DUMMY_USER_TOKEN;

const App = () => (
	<QueryClientProvider client={new QueryClient()}>
		<AuthContextProvider>
			<Wrapper />
		</AuthContextProvider>
	</QueryClientProvider>
);

export default App;
