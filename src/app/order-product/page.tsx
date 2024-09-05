"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();
	const placeOrder = () => {
		router.push("/");
	};
	return (
		<>
			<h1>Order product</h1>
			<button
				className="border-2 rounded-lg border-black bg-teal-400 p-5 font-bold "
				onClick={placeOrder}>
				Place order
			</button>
		</>
	);
}
