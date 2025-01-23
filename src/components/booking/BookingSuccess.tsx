import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function BookingSuccess() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Booking Confirmed!</h1>
					<p className="text-gray-600 dark:text-gray-300 mb-8">
						Thank you for your booking. We've sent a confirmation email with all the details.
					</p>
					<Link to="/dashboard">
						<motion.button
							className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<ArrowLeft className="w-5 h-5 mr-2" />
							View My Bookings
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
