import React from 'react'
import Logo from '../../assets/images/webp/dummy-logo.webp'
// import CustomButton from './CustomButton';

// const Header = () => {
//   return (
//       <header className="flex items-center justify-between px-6 py-4">
//           <img src={Logo} alt="Logo" />
          
//       </header>
//   )
// }             

// export default Header
import { Outlet, Link } from "react-router-dom";
import CustomBtn from './CustomButton';

 function Header() {
    return (
        <header className="w-full">
            <div className="max-w-[1240px] mx-auto px-5 py-4 flex items-center justify-between">
                <img src={Logo} alt="Logo" className="h-14 w-auto cursor-pointer" />
                <nav className="flex items-center space-x-10">
                    <Link to="/" className="text-gray-800 font-medium hover:text-red-600 transition">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 font-medium hover:text-red-600 transition">
                        About
                    </Link>
                    <Link to="/product" className="text-gray-800 font-medium hover:text-red-600 transition">
                        Product
                    </Link>
                    <Link to="/contact" className="text-gray-800 font-medium hover:text-red-600 transition">
                        Contact
                    </Link>
                </nav>
                    <CustomBtn text="Get Started" />
            </div>
            <Outlet />
        </header>
    );
 }
export default Header