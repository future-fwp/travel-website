import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/search/SearchBar";
import { Destinations } from "./components/Destinations";
// import { UserProfile } from './components/auth/UserProfile';
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { UserDashboard } from "./components/auth/UserDashboard";
import { BookingPage } from "./components/booking/BookingPage";
import { useAuth } from "./hooks/useAuth";
import { usePlaces } from "./hooks/usePlaces";
import type { Place } from "./types/places";

function PrivateRoute({ children }: { children: React.ReactNode }) {
	const { user } = useAuth();
	return user ? <>{children}</> : <Navigate to="/signin" />;
}

export default function App() {
	// const { user } = useAuth();
	const { places, loading, error } = usePlaces();
	const [query, setQuery] = useState("");
	const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(places);

	useEffect(() => {
		setFilteredPlaces(places);
	}, [places]);

	const handleSearch = useCallback(
		(searchQuery: string) => {
			if (!searchQuery.trim()) {
				setFilteredPlaces(places);
				return;
			}

			const filtered = places.filter(
				(place) =>
					place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					place.location.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredPlaces(filtered);
		},
		[places]
	);

	useEffect(() => {
		handleSearch(query);
	}, [query, handleSearch]);

	return (
		<BrowserRouter>
			<div className="min-h-screen">
				<Navbar />

				<Routes>
					<Route
						path="/"
						element={
							<main>
								<Hero />
								<div className="container mx-auto px-4 -mt-16 relative z-20">
									<SearchBar
										query={query}
										setQuery={setQuery}
									/>
								</div>
								<Destinations
									places={filteredPlaces}
									loading={loading}
									error={error}
								/>
							</main>
						}
					/>
					<Route
						path="/signin"
						element={<SignIn />}
					/>
					<Route
						path="/signup"
						element={<SignUp />}
					/>
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<UserDashboard />
							</PrivateRoute>
						}
					/>
					<Route
						path="/booking/:id"
						element={<BookingPage places={places} />}
					/>
					<Route
						path="*"
						element={
							<div className="bg-white dark:bg-black dark:text-white text-black h-screen flex justify-center items-center">
								Not found this page
							</div>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
