"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { ImAlarm } from 'react-icons/im';
import { FaChartLine } from 'react-icons/fa';

const NavLinks = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/', icon: <HiHome className="w-5 h-5" /> },
        { name: 'Timeline', path: '/timeline', icon: <ImAlarm className="w-5 h-5" /> },
        { name: 'Stats', path: '/stats', icon: <FaChartLine className="w-5 h-5" /> },
    ];

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.path;
                
                return (
                    <li key={link.name} onClick={handleClick}>
                        <Link
                            href={link.path}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-200
                                ${isActive 
                                    ? 'bg-[#1A4D39] text-white focus:bg-[#1A4D39] focus:text-white active:bg-[#1A4D39]' 
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#1A4D39]'
                                }
                            `}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default NavLinks;