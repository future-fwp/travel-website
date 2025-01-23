import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Clock, Bus, Map } from "lucide-react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../lib/stripe";
import { PaymentForm } from "../payment/PaymentForm";
import type { Place } from "../../types/places";

interface BookingPageProps {
	places: Place[];
}

export function BookingPage({ places }: BookingPageProps) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [selectedDates, setSelectedDates] = useState({ checkIn: "", checkOut: "" });
	const [guests, setGuests] = useState(1);
	const [showPayment, setShowPayment] = useState(false);

	const place = places.find((p) => p.id === id);

	useEffect(() => {
		if (!place) {
			navigate("/");
		}
	}, [place, navigate]);

	if (!place) return null;

	const totalAmount = place.price * guests;

	const handleBooking = (e: React.FormEvent) => {
		e.preventDefault();
		setShowPayment(true);
	};

	const handlePaymentSuccess = () => {
		// Handle successful payment
		navigate("/booking/success");
	};

	const handlePaymentError = (error: string) => {
		console.error("Payment error:", error);
		// Handle payment error (show error message, etc.)
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
			<div className="container mx-auto px-4 py-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8"
				>
					{/* Left Column - Place Details */}
					<div className="space-y-6">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
							<img
								src={place.image}
								alt={place.title}
								className="w-full h-64 object-cover"
							/>
							<div className="p-6">
								<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{place.title}</h1>
								<p className="text-gray-600 dark:text-gray-300 mb-4">{place.description}</p>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<Clock className="w-5 h-5 text-blue-600" />
										<span className="text-gray-700 dark:text-gray-300">Duration: 7 days</span>
									</div>
									<div className="flex items-center space-x-3">
										<Bus className="w-5 h-5 text-blue-600" />
										<span className="text-gray-700 dark:text-gray-300">
											Transportation: Flight + Local Transport
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="w-5 h-5 text-blue-600" />
										<span className="text-gray-700 dark:text-gray-300">Available seats: 20</span>
									</div>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
							<div className="flex items-center space-x-2 mb-4">
								<Map className="w-5 h-5 text-blue-600" />
								<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h2>
							</div>
							<div className="h-64 rounded-lg overflow-hidden">
								<iframe
									width="100%"
									height="100%"
									frameBorder="0"
									scrolling="no"
									marginHeight={0}
									marginWidth={0}
									src={`https://www.openstreetmap.org/export/embed.html?bbox=${place.longitude - 0.01},${
										place.latitude - 0.01
									},${place.longitude + 0.01},${place.latitude + 0.01}&layer=mapnik&marker=${place.latitude},${
										place.longitude
									}`}
								/>
							</div>
						</div>
					</div>

					{/* Right Column - Booking Form */}
					<div className="lg:sticky lg:top-24 h-fit">
						<motion.div
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
						>
							{!showPayment ? (
								<>
									<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Book Your Trip</h2>
									<form
										onSubmit={handleBooking}
										className="space-y-6"
									>
										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Price
											</label>
											<div className="text-3xl font-bold text-blue-600">${place.price}</div>
											<p className="text-sm text-gray-500 dark:text-gray-400">per person</p>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Check-in Date
											</label>
											<input
												type="date"
												value={selectedDates.checkIn}
												onChange={(e) => setSelectedDates((prev) => ({ ...prev, checkIn: e.target.value }))}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
												required
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Check-out Date
											</label>
											<input
												type="date"
												value={selectedDates.checkOut}
												onChange={(e) =>
													setSelectedDates((prev) => ({ ...prev, checkOut: e.target.value }))
												}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
												required
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Number of Guests
											</label>
											<input
												type="number"
												min="1"
												max="20"
												value={guests}
												onChange={(e) => setGuests(Number(e.target.value))}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
												required
											/>
										</div>

										<div className="pt-4">
											<motion.button
												type="submit"
												className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												Proceed to Payment - ${totalAmount}
											</motion.button>
										</div>
									</form>
								</>
							) : (
								<Elements stripe={stripePromise}>
									<PaymentForm
										amount={totalAmount}
										onSuccess={handlePaymentSuccess}
										onError={handlePaymentError}
									/>
								</Elements>
							)}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
