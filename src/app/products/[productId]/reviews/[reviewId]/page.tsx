"use client";
import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

interface Params {
	params: {
		reviewId: string;
		productId: string;
	};
}

export default function ReviewDetail({ params }: Params) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Test error");
	}
	return parseInt(params.reviewId) > 1000 ? (
		notFound()
	) : (
		<h2>
			Details about product {params.productId} review {params.reviewId}
		</h2>
	);
}
