import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Compass, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "../hooks/useAuth";

export function Navbar() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
			<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link
					to="/"
					className="flex items-center space-x-2"
				>
					<Compass className="h-6 w-6 text-blue-600" />
					<span className="text-xl font-bold text-gray-900 dark:text-white">TravelCo</span>
				</Link>
				<ul className="hidden md:flex space-x-8">
					<li>
						<Link
							to="/"
							className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Home
						</Link>
					</li>
					<li>
						<a
							href="#destinations"
							className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Destinations
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Contact
						</a>
					</li>
				</ul>
				<div className="flex items-center space-x-4">
					<ThemeToggle />
					{user ? (
						<div className="flex items-center space-x-4">
							<Link
								to="/dashboard"
								data-testid="username"
								className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								{user.username}
							</Link>
							<motion.button
								onClick={handleLogout}
								className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<LogOut className="w-5 h-5" />
							</motion.button>
						</div>
					) : (
						<>
							<Link to="/signin">
								<motion.button
									className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Sign In
								</motion.button>
							</Link>
							<Link to="/signup">
								<motion.button
									className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Sign Up
								</motion.button>
							</Link>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
