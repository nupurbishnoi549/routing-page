import React, { useState } from 'react';
import Logo from '../../assets/images/webp/dummy-logo.webp';
import { Outlet, Link } from "react-router-dom";
import CustomBtn from './CustomButton';
import { navLinks } from '../../utils/helper'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-[1240px] mx-auto px-5 py-4 flex items-center justify-between">
                <img src={Logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl"
                >
                    {menuOpen ? '✖' : '☰'}
                </button>

                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map(({ to, name }) => (
                        <Link key={to} to={to} className="text-gray-800 hover:text-red-600">
                            {name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <CustomBtn text="Get Started" />
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col items-center justify-center px-5 pb-6 space-y-4 bg-white">
                    {navLinks.map(({ to, name }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-800 hover:text-red-600"
                        >
                            {name}
                        </Link>
                    ))}
                    <CustomBtn text="Get Started" />
                </div>
            )}

            <Outlet />
        </header>
    );
}


export default Header;
