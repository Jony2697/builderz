import React from 'react';
import logo from '../assets/logo.png';
import './Primary.css'

const Header = () => {
    return (
        <div className='bg-[#F6F8FB]'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Adversite</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Supports</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Contact</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    {/* Logo and Brand Name */}
                    <a className="btn btn-ghost text-xl flex items-center gap-2">
                        <img src={logo} alt="Builderz Logo" className="w-6 h-8" />
                        <span className="nav-title text-[#02073E]">Builderz</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Adversite</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Supports</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#8D448B] border-2 border-[#8D448B] bg-white">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
