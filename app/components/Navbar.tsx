import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const base = "transition hover:text-blue-400";
	const active = "text-blue-400 font-semibold";

	return (
		<nav className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<NavLink
					to="/"
					className="flex items-center gap-2 text-lg font-bold text-blue-300"
				>
					<FaLaptopCode className="text-blue-400 text-xl" />
					<span>Mostafizur.</span>
				</NavLink>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-6">
					<div className="space-x-4 text-sm text-gray-300">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? active : base
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								isActive ? active : base
							}
						>
							Projects
						</NavLink>
						<NavLink
							to="/blog"
							className={({ isActive }) =>
								isActive ? active : base
							}
						>
							Blog
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? active : base
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? active : base
							}
						>
							Contact
						</NavLink>
					</div>
				</div>
				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center gap-4">
					<button
						onClick={() => setMenuOpen(!menuOpen)} // টগল লজিক
						className="text-blue-400 text-xl cursor-pointer"
						title="Menu"
					>
						{/* মেনু খোলা থাকলে ক্রস (Times), বন্ধ থাকলে বার (Bars) দেখাবে */}
						{menuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{/* Mobile Menu Dropdown */}
			{menuOpen && (
				<div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 flex flex-col space-y-2 text-center">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? active : base)}
						onClick={() => setMenuOpen(false)} // মেনু আইটেমে ক্লিক করলে মেনু বন্ধ হবে
					>
						Home
					</NavLink>
					<NavLink
						to="/projects"
						className={({ isActive }) => (isActive ? active : base)}
						onClick={() => setMenuOpen(false)}
					>
						Projects
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) => (isActive ? active : base)}
						onClick={() => setMenuOpen(false)}
					>
						Blog
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? active : base)}
						onClick={() => setMenuOpen(false)}
					>
						About
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => (isActive ? active : base)}
						onClick={() => setMenuOpen(false)}
					>
						Contact
					</NavLink>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
