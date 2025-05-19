import React, { useState } from 'react';
import Logo from '../../assets/images/webp/dummy-logo.webp';
import { Link } from "react-router-dom";
import CustomBtn from './CustomButton';
import { navLinks } from '../../utils/helper'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            <div className="max-w-[1240px] mx-auto px-5 py-8 flex items-center justify-between">
                <div className='relative z-[60]'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
                    </Link>
                    </div>
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
                <div className="md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-5 space-y-6 bg-white z-50">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-10 right-6 text-3xl"
                    >
                        ✖
                    </button>

                    {navLinks.map(({ to, name }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-800 text-xl hover:text-red-600"
                        >
                            {name}
                        </Link>
                    ))}
                    <CustomBtn text="Get Started" />
                </div>
            )}
        </header>
    );
}


export default Header;
