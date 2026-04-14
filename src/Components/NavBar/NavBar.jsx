import React from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import NavLinks from './NavLinks'; 
const NavBar = () => {
return (
        
<nav className='border-b border-gray-200 bg-white'>
<div className="navbar  sticky top-0 z-50 px-4 sm:px-6 lg:px-8 container mx-auto min-h-16">
            {/* Left side: Logo */}
            <div className="flex-1">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-2xl tracking-tight">
                        <span className="text-gray-900">Keen</span>
                        <span className="text-[#1A4D39]">Keeper</span>
                    </span>
                </Link>
            </div>

            {/* Right side (Desktop): Menu */}
            <div className="flex-none hidden md:flex">
                
                <ul className="menu menu-horizontal px-1 gap-2">
                    <NavLinks />
                </ul>
            </div>

            {/* Right side (Mobile): DaisyUI Dropdown */}
            <div className="flex-none md:hidden dropdown dropdown-end">
                {/* Hamburger Button */}
                <div tabIndex={0} role="button" className="btn btn-ghost p-2 text-gray-600 hover:bg-gray-100 hover:text-[#1A4D39]">
                    <HiMenu className="w-6 h-6" />
                </div>
                
                {/* Dropdown Content */}
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-1 p-2 shadow-lg bg-white rounded-box w-52 border border-gray-100 gap-1">
                    <NavLinks />
                </ul>
            </div>
</div>
        </nav>
    );
};

export default NavBar;