import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="bg-inst-card">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-start space-x-3 rtl:space-x-reverse">
                        <img src="/png/logo_mirabile.png" className="h-8" alt="Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-800" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
