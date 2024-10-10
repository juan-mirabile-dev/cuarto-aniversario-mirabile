import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-inst-card">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-start space-x-3 rtl:space-x-reverse">
                        <img src="/png/logo_mirabile.png" className="h-8" alt="Logo" />
                    </a>
                    {/* <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-800" aria-controls="navbar-multi-level" aria-expanded="false"> */}

                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-800"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Overlay */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
                    )}

                    {/* Sidebar */}
                    <div className={`fixed inset-y-0 right-0 bg-inst-base z-40 w-64 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex justify-end p-4">
                            <button onClick={toggleSidebar} className="text-gray-500">
                                <span className="sr-only">Close menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col p-4 space-y-4">
                            <li>
                                <Link to="/" onClick={toggleSidebar} className="block py-2 text-muted hover:text-base rounded hover:bg-inst-card">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleSidebar} className="block py-2 text-muted hover:text-base rounded hover:bg-inst-card">
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={toggleSidebar} className="block py-2 text-muted hover:text-base rounded hover:bg-inst-card">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" onClick={toggleSidebar} className="block py-2 text-muted hover:text-base rounded hover:bg-inst-card">
                                    Eventos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* desktop menu */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className=" onClick={toggleSidebar}block py-2 px-3 text-muted hover:text-base rounded hover:bg-inst-card md:hover:bg-transparent md:border-0 md:p-0" aria-current="page">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleSidebar} className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-inst-card md:hover:bg-transparent md:border-0 md:p-0">
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={toggleSidebar} className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-inst-card md:hover:bg-transparent md:border-0 md:p-0">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" onClick={toggleSidebar} className="block py-2 px-3 text-muted hover:text-base rounded hover:bg-inst-card md:hover:bg-transparent md:border-0 md:p-0">
                                    Eventos
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
