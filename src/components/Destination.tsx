import React, { useState } from "react";
import Card from "./Card";
import Filters from "./Filters.tsx";
import styled from "styled-components";

const places = [
	{
		id: 1,
		name: "Central Park",
		description: "A large public park in New York City.",
		date: "2023-10-01",
		type: "Park",
	},
	{
		id: 2,
		name: "Eiffel Tower",
		description: "A wrought-iron lattice tower in Paris, France.",
		date: "2023-09-15",
		type: "Monument",
	},
	{
		id: 3,
		name: "Louvre Museum",
		description: "The world's largest art museum in Paris, France.",
		date: "2023-08-20",
		type: "Museum",
	},
	{
		id: 4,
		name: "Great Wall of China",
		description: "A series of fortifications made of stone, brick, tamped earth, wood, and other materials.",
		date: "2023-07-10",
		type: "Historical Site",
	},
	{
		id: 5,
		name: "Sydney Opera House",
		description: "A multi-venue performing arts centre in Sydney, Australia.",
		date: "2023-06-25",
		type: "Cultural",
	},
	{
		id: 6,
		name: "Mount Fuji",
		description: "An active stratovolcano and the highest mountain in Japan.",
		date: "2023-05-15",
		type: "Natural Wonder",
	},
	{
		id: 7,
		name: "Statue of Liberty",
		description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
		date: "2023-04-20",
		type: "Monument",
	},
	{
		id: 8,
		name: "Machu Picchu",
		description: "A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
		date: "2023-03-30",
		type: "Historical Site",
	},
	{
		id: 9,
		name: "Santorini",
		description:
			"A Greek island in the southern Aegean Sea, known for its stunning sunsets and white-washed buildings.",
		date: "2023-02-14",
		type: "Island",
	},
	{
		id: 10,
		name: "Grand Canyon",
		description: "A steep-sided canyon carved by the Colorado River in Arizona, United States.",
		date: "2023-01-05",
		type: "Natural Wonder",
	},
	// Add more mock data as needed
];

const MainContainer = styled.div`
	padding: 2rem;
`;

const GridLayOut = styled.div`
	display: grid;
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	@media (min-width: 320px) and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
	}

	@media (max-width: 320px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 0.5rem;
	}
`;

const Main = () => {
	const [filteredPlaces, setFilteredPlaces] = useState(places);

	const handleFilter = (filterType: string) => {
		if (filterType === "date") {
			setFilteredPlaces([...places].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
		} else if (filterType === "type") {
			setFilteredPlaces([...places].sort((a, b) => a.type.localeCompare(b.type)));
		}
	};

	return (
		<MainContainer>
			<Filters onFilter={handleFilter} />
			<GridLayOut>
				{filteredPlaces.map((place) => (
					<Card
						key={place.id}
						place={place}
					/>
				))}
			</GridLayOut>
		</MainContainer>
	);
};

export default Main;
