import { NavLink } from "react-router-dom";
import { Button } from "./Button";


export const Sidebar = (props: { open: boolean; toggleOpen: any }) => {

    return (
        <nav className={props.open ? "fixed top-0 right-0 min-h-screen w-full sm:hidden ease-out transition-all z-50" : "fixed top-0 -right-full min-h-screen w-full sm:hidden ease-out transition-all z-50"}>
            <div className="absolute top-0 bg-white/70 h-full w-full" onClick={props.toggleOpen}></div>
            <div className="absolute top-0 right-0 w-56 sm:w-64 md:w-72 h-full bg-gray-100 border z-30 overflow-y-auto">
                <div className="font-rubik p-5 border-b">
                    <a href="" className="text-2xl text-pink-600 font-extrabold">
                        <i className="fa-brands fa-bitcoin"></i> CoinSpace
                    </a>
                </div>
                <ul className="mb-5 font-inter">
                    <li><NavLink to="/" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors" onClick={props.toggleOpen}>Home</NavLink></li>
                    <li><NavLink to="/about" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors" onClick={props.toggleOpen}>About</NavLink></li>
                    <li><NavLink to="/token-listings" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors" onClick={props.toggleOpen}>Tokens</NavLink></li>
                    <li><NavLink to="/blogs" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors" onClick={props.toggleOpen}>Blog</NavLink></li>
                    <li><NavLink to="/contact" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors" onClick={props.toggleOpen}>Contact</NavLink></li>
                </ul>
                <div className="w-fit mx-auto">
                    <Button variant="icon" text={`<i class="fa-solid fa-chevron-right"></i>`} onClick={props.toggleOpen} />
                </div>
            </div>
        </nav>
    )
}