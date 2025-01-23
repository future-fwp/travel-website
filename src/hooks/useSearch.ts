import { useState, useCallback } from "react";
import type { Place } from "../types/places";
// import places  from
// import {places} from './usePlaces'
import { useSearchParams } from "./useSearchParams";
export function useSearch() {
	const [query, setQuery] = useState("");
	const [activeQuery, setActiveQuery] = useState("");
	// const {places} = usePlaces();
	const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
	const { searchParams } = useSearchParams();

	const filterPlaces = useCallback(
		(places: Place[]) => {
			if (!activeQuery.trim()) return places;

			return places.filter(
				(place) =>
					place.title.toLowerCase().includes(searchParams.destination.toLowerCase()) ||
					place.location.toLowerCase().includes(activeQuery.toLowerCase())
			);
		},
		[query]
	); // if not expected try activeQuery

	const handleSearch = useCallback(
		(places: Place[]) => {
			setActiveQuery(query);
			setFilteredPlaces(filterPlaces(places));
		},
		[query, filterPlaces]
	);

	// click button and handleSearch

	return {
		query,
		setQuery,
		filteredPlaces,
		handleSearch,
	};
}
