import { NavLink } from "react-router";

export function Navbar() {
    return (
        <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
            <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="bg-gradient-to-l from-[#8B8BAE] to-[#49BEAA] bg-clip-text text-transparent tracking-[-0.3em] pr-2 relative">
                    <span className="relative z-10 text-black">D</span>
                    <span className="text-red-600 relative" style={{ zIndex: 0 }}>✮</span>
                    <span className="relative z-10 text-black">C</span>
                </p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#49BEAA] font-bold" : "text-mist-600 hover:text-[#8B8BAE] transition-colors duration-300 font-bold"}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#49BEAA] font-bold" : "text-mist-600 hover:text-[#8B8BAE] transition-colors duration-300 font-bold"}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}