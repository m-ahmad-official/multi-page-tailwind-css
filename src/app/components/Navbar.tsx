"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="h-20 bg-[#006494]">
            <div className="flex justify-between items-center h-full sm:px-10 px-5">
                <h2 className="text-white text-2xl font-semibold">Multi-Page Website</h2>
                <ul className="sm:flex gap-6 hidden">
                    <li className="uppercase text-base text-white font-medium hover:bg-[#13293D] rounded-full py-2 px-4 transition-all duration-500"><a href="/">Home</a></li>
                    <li className="uppercase text-base text-white font-medium hover:bg-[#13293D] rounded-full py-2 px-4 transition-all duration-500"><a href="/about">About</a></li>
                    <li className="uppercase text-base text-white font-medium hover:bg-[#13293D] rounded-full py-2 px-4 transition-all duration-500"><a href="/contact">Contact</a></li>
                </ul>
                <form action="/action_page.php">
                    <input type="search" placeholder="Search.." className="max-sm:hidden py-2 px-5 rounded-full bg-[#13293D] border-none text-white" />
                </form>
                <div className="sm:hidden" onClick={toggleMenu}>
                    <i className='bx bx-menu text-white text-3xl'></i>
                </div>
            </div>

            <div className={
                clsx("fixed h-full w-full sm:hidden bg-black/40 top-0 transition-all ease-in-out duration-500", menuOpen ? "translate-x-0" : "-translate-x-full")
            }>
                <div className="bg-[#006494] text-white flex flex-col gap-20 h-full py-14 px-10 w-[70%]">
                    <div className='text-white text-3xl' onClick={closeMenu}>&#10006;</div>
                    <ul className="flex flex-col gap-8">
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><a href="/">Home</a></li>
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><a href="/about">About</a></li>
                        <li className="uppercase text-lg text-white" onClick={closeMenu}><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
