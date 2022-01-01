import { Link } from 'react-router-dom';
import { XIcon, ChevronDownIcon } from '@heroicons/react/solid'

import { useAuthContext } from '../../contexts/AuthContext';

// Import components
import NavbarFilter from './NavbarFilter';
import NavbarUserDropdown from './NavbarUserDropdown';

const Navbar = () => {
    const authContext = useAuthContext();

    return (
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

                {/* <div className="flex items-center -my-2">
                    <span className="flex items-center font-bold text-xs">
                        {authContext.name}
                        <ChevronDownIcon
                            className="w-5 h-5 text-gray-400 ml-1"
                            aria-hidden="true"
                        />
                    </span>
                </div> */}
                <NavbarUserDropdown />
            </nav>

            <NavbarFilter />
        </div>
    );
};

export default Navbar;