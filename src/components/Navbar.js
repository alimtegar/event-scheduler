import { Link } from 'react-router-dom';

// Import components
import Filter from './Filter';

const Navbar = () => (
    <div className="bg-white p-6 shadow">
        <nav className="flex justify-between items-center text-gray-900 w-full">
            <div className="flex items-center">
                <Link to="/">
                    <h1 className="font-extrabold text-md no-underline hover:underline hover:decoration-2">
                        {process.env.REACT_APP_NAME}
                    </h1>
                </Link>
                <span className="text-gray-300 text-sm mx-2">
                    |
                </span>
                <span className="text-gray-500 text-xs">
                    © {process.env.REACT_APP_DEVELOPER} {new Date().getFullYear()}
                </span>
            </div>

            <div className="flex items-center -my-2">
                <div className="inline-flex bg-gray-200 w-8 h-8 rounded-full mr-4"></div>
                <div className="flex flex-col -mt-0.5">
                    <span className="text-gray-500 text-xs">Logged in as </span>
                    <span className="font-bold text-xs">{process.env.REACT_APP_DUMMY_USER_NAME}</span>
                </div>

            </div>
        </nav>

        <Filter />
    </div>
);

export default Navbar;