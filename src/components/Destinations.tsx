import React from "react";
import { motion } from "framer-motion";
import { PlaceCard } from "./PlaceCard";
import type { Place } from "../types/places";

interface DestinationsProps {
	places: Place[];
	loading: boolean;
	error: string | null;
}

export function Destinations({ places, loading, error }: DestinationsProps) {
	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-[400px]">
				<div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
			</div>
		);
	}

	if (error) {
		return <div className="text-center text-red-600 py-8">{error}</div>;
	}

	return (
		<section
			id="destinations"
			className="py-20 bg-gray-50 dark:bg-gray-900"
		>
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					data-testid="destinations-title"
				>
					Popular Destinations
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{places.map((place) => (
						<PlaceCard
							key={place.id}
							place={place}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
