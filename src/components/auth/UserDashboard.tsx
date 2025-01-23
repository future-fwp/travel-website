import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { useBookings } from "../../hooks/useBookings";

export function UserDashboard() {
	const { user } = useAuth();
	const { bookings, loading } = useBookings(user?.id);

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
				>
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
						Welcome back, {user?.username}!
					</h1>

					<div className="space-y-6">
						<div>
							<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Bookings</h2>
							{loading ? (
								<div className="text-gray-600 dark:text-gray-300">Loading bookings...</div>
							) : bookings.length > 0 ? (
								<div className="grid gap-4">
									{bookings.map((booking) => (
										<motion.div
											key={booking.id}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
										>
											<div className="flex justify-between items-start">
												<div>
													<p className="text-gray-900 dark:text-white font-medium">
														Booking ID: {booking.id}
													</p>
													<p className="text-gray-600 dark:text-gray-300">
														Check-in: {new Date(booking.checkIn).toLocaleDateString()}
													</p>
													<p className="text-gray-600 dark:text-gray-300">
														Check-out: {new Date(booking.checkOut).toLocaleDateString()}
													</p>
													<p className="text-gray-600 dark:text-gray-300">Guests: {booking.guests}</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							) : (
								<p className="text-gray-600 dark:text-gray-300">No bookings found.</p>
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
