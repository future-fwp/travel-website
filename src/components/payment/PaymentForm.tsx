import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Lock } from "lucide-react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import type { StripeCardElementChangeEvent } from "@stripe/stripe-js";

interface PaymentFormProps {
	amount: number;
	onSuccess: () => void;
	onError: (error: string) => void;
}

// onSuccess should be used in payment form;

export function PaymentForm({ amount, onError }: PaymentFormProps) {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [cardError, setCardError] = useState<string | null>(null);

	const handleCardChange = (event: StripeCardElementChangeEvent) => {
		setCardError(event.error ? event.error.message : null);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);

		try {
			const { error: paymentError } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					return_url: `${window.location.origin}/booking/success`,
				},
			});

			if (paymentError) {
				onError(paymentError.message || "Payment failed");
			}
			// } else if (paymentIntent && paymentIntent.status === "succeeded") {
			// 	onSuccess();
			// }
		} catch (error) {
			onError("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6"
		>
			<div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Details</h3>
					<Lock className="w-5 h-5 text-gray-400" />
				</div>

				<div className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Card Information
						</label>
						<div className="relative">
							<CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
							<div className="pl-10 pr-3 py-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
								<CardElement
									options={{
										style: {
											base: {
												fontSize: "16px",
												color: "#424770",
												"::placeholder": {
													color: "#aab7c4",
												},
											},
											invalid: {
												color: "#9e2146",
											},
										},
									}}
									onChange={handleCardChange}
								/>
							</div>
						</div>
						{cardError && <p className="mt-2 text-sm text-red-600">{cardError}</p>}
					</div>

					<div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Total Amount: <span className="font-semibold">${amount}</span>
						</p>
					</div>
				</div>

				<motion.button
					type="submit"
					disabled={!stripe || loading}
					className={`mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
						loading ? "opacity-75 cursor-not-allowed" : ""
					}`}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					{loading ? "Processing..." : "Pay Now"}
				</motion.button>
			</div>
		</form>
	);
}
