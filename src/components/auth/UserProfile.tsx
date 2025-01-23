import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { useBookings } from "../../hooks/useBookings";

export function UserProfile() {
	const { user } = useAuth();
	const { bookings, loading } = useBookings(user?.id);

	if (!user) return null;

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
			<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Hello, {user.username}!</h2>
			<div className="mt-4">
				<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your Bookings</h3>
				{loading ? (
					<div className="animate-pulse">Loading bookings...</div>
				) : (
					<div className="space-y-2">
						{bookings.map((booking) => (
							<motion.div
								key={booking.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="border border-gray-200 dark:border-gray-700 rounded p-3"
							>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Check-in: {new Date(booking.checkIn).toLocaleDateString()}
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									Check-out: {new Date(booking.checkOut).toLocaleDateString()}
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-300">Guests: {booking.guests}</p>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
