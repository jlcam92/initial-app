import { Metadata } from "next";

interface Params {
	params: {
		productId: string;
	};
}
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const title = await new Promise(resolve => {
		setTimeout(() => resolve(`phone ${params.productId}`), 1000);
	});
	return {
		title: `${title}`
	};
};

export default function ProductDetails({ params }: Params) {
	return <h2>Details about product {params.productId}</h2>;
}
