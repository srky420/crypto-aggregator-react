import { useState } from "react";
import { Button } from "./Button";
import { Sidebar } from "./Sidebar";
import { NavLink } from "react-router-dom";


export const Navbar = () => {

    // Define state
    const [open, setOpen] = useState(false);

    // Toggle open
    const toggleOpen = () => setOpen(prev => !prev);

    return (
        <nav className="sticky top-0 bg-white shadow-md z-30">
            <div className="container mx-auto px-5 lg:px-20 xl:px-40 bg-white">
                <div className="flex gap-5 md:gap-10 lg:gap-16 items-center py-2 md:py-0">
                    <div className="font-rubik">
                        <a href="" className="text-2xl text-pink-600 font-extrabold">
                            <i className="fa-brands fa-bitcoin"></i> CoinSpace
                        </a>
                    </div>
                    <ul className="hidden sm:flex font-inter items-center">
                        <li><NavLink to="/" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Home</NavLink></li>
                        <li><NavLink to="/" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">About</NavLink></li>
                        <li><NavLink to="/token-listings" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Tokens</NavLink></li>
                        <li><NavLink to="/" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Blog</NavLink></li>
                        <li><NavLink to="/" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Contact</NavLink></li>
                    </ul>
                    <div className="ms-auto">
                        <Button variant="primary" text="Wallet" />
                    </div>
                    <div className="block sm:hidden">
                        <Button variant="icon" text={`<i class="fa-solid fa-bars"></i>`} onClick={toggleOpen} />
                    </div>
                </div>
                <Sidebar open={open} toggleOpen={toggleOpen} />
            </div>
        </nav>
    )
}