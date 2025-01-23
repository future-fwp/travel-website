import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useAuth } from "../../hooks/useAuth"; // Import the useAuth hook
import { Hero } from "../Hero";
import { Destinations } from "../Destinations";
// Mock the useAuth hook

import { usePlaces } from "../../hooks/usePlaces";
jest.mock("../../hooks/useAuth");
jest.mock("../../hooks/usePlaces");

beforeAll(() => {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
});

describe("Navbar Component", () => {
	beforeEach(() => {
		// Mock the useAuth hook to return a user
		(useAuth as jest.Mock).mockReturnValue({
			user: { username: "John Doe" },
			error: null,
			login: jest.fn(),
			signup: jest.fn(),
			logout: jest.fn(),
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("displays username if user is logged in", () => {
		// Render the component with MemoryRouter
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Navbar />
			</MemoryRouter>
		);

		// Check if the username is displayed with the correct class
		const usernameElement = screen.getByTestId("username");
		expect(usernameElement).toHaveTextContent("John Doe");
		expect(usernameElement).toHaveClass(
			"text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
		);
	});

	test('clicking "Book Now" button navigates to the correct page', () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Navbar />
				<Hero />
				<Destinations
					places={[
						{
							id: "1",
							title: "Santorini, Greece",
							description: "Experience the stunning white architecture and breathtaking sunsets",
							image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
							price: 1200,
							rating: 4.8,
							location: "Greece",
							latitude: 36.408333,
							longitude: 25,
						},
						{
							id: "2",
							title: "Paris, France",
							description: "Explore the city of love and its iconic landmarks",
							image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1052&q=80",
							price: 1500,
							rating: 4.9,
							location: "France",
							latitude: 48.856613,
							longitude: 2.352222,
						},
					]}
					loading={false}
					error={null}
				/>
			</MemoryRouter>
		);
		const bookNowButton = screen.getByTestId("book-button-2");
		fireEvent.click(bookNowButton);
		// Add navigation assertion here (e.g., check URL or rendered component)
	});

	test("fetches and displays places", async () => {
		const mockPlaces = [
			{
				id: "1",
				title: "Santorini, Greece",
				description: "Experience the stunning white architecture and breathtaking sunsets",
				image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
				price: 1200,
				rating: 4.8,
				location: "Greece",
			},
		];

		(usePlaces as jest.Mock).mockReturnValue({
			places: mockPlaces,
			loading: false,
			error: null,
		});

		render(
			<MemoryRouter initialEntries={["/"]}>
				<Navbar />
				<Hero />
				<Destinations
					places={[
						{
							id: "1",
							title: "Santorini, Greece",
							description: "Experience the stunning white architecture and breathtaking sunsets",
							image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
							price: 1200,
							rating: 4.8,
							location: "Greece",
							latitude: 36.408333,
							longitude: 25,
						},
						{
							id: "2",
							title: "Paris, France",
							description: "Explore the city of love and its iconic landmarks",
							image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1052&q=80",
							price: 1500,
							rating: 4.9,
							location: "France",
							latitude: 48.856613,
							longitude: 2.352222,
						},
					]}
					loading={false}
					error={null}
				/>
			</MemoryRouter>
		);

		await waitFor(() => {
			const placeTitle = screen.getByText("Santorini, Greece");
			expect(placeTitle).toBeInTheDocument();
		});
	});

	test("toggles dark/light mode", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Navbar />
				<Hero />
				<Destinations
					places={[
						{
							id: "1",
							title: "Santorini, Greece",
							description: "Experience the stunning white architecture and breathtaking sunsets",
							image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
							price: 1200,
							rating: 4.8,
							location: "Greece",
							latitude: 36.408333,
							longitude: 25,
						},
						{
							id: "2",
							title: "Paris, France",
							description: "Explore the city of love and its iconic landmarks",
							image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1052&q=80",
							price: 1500,
							rating: 4.9,
							location: "France",
							latitude: 48.856613,
							longitude: 2.352222,
						},
					]}
					loading={false}
					error={null}
				/>
			</MemoryRouter>
		);
		const toggleButton = screen.getByTestId("theme-toggle");
		fireEvent.click(toggleButton);

		const document = screen.getByRole("heading", { name: "Popular Destinations" });
		console.log(document);

		expect(document).toHaveClass("dark:text-white");
		// Add assertion for theme change (e.g., check class on body or root element)
	});
});
