import { Button } from "./Button";


export const Sidebar = (props: { open: boolean; toggleOpen: any }) => {

    return (
        <nav className={props.open ? "fixed top-0 right-0 min-h-screen w-full sm:hidden transition-all z-50" : "fixed top-0 -right-full min-h-screen w-full sm:hidden transition-all z-50"}>
            <div className="absolute top-0 bg-white/70 h-full w-full" onClick={props.toggleOpen}></div>
            <div className="absolute top-0 right-0 w-56 sm:w-64 md:w-72 h-full bg-gray-100 border z-30 overflow-y-auto">
                <div className="font-rubik p-5 border-b">
                    <a href="" className="text-2xl text-pink-600 font-extrabold">
                        <i className="fa-brands fa-bitcoin"></i> CoinSpace
                    </a>
                </div>
                <ul className="mb-5">
                    <li><a href="" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Home</a></li>
                    <li><a href="" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">About</a></li>
                    <li><a href="" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="" className="block p-5 hover:bg-indigo-500 hover:text-white transition-colors">Contact</a></li>
                </ul>
                <div className="w-fit mx-auto">
                    <Button variant="light" size="" text={`<i class="fa-solid fa-chevron-right"></i>`} onClick={props.toggleOpen} />
                </div>
            </div>
        </nav>
    )
}