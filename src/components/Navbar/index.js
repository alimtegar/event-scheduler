import { Link } from 'react-router-dom';

// Import components
import NavbarFilter from './NavbarFilter';
import NavbarUserDropdown from './NavbarUserDropdown';

const Navbar = () => (
        <div className="relative z-90 bg-white p-6 shadow">
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
                
                <NavbarUserDropdown />
            </nav>

            <NavbarFilter />
        </div>
    );

export default Navbar;