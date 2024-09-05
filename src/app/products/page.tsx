import Link from "next/link";

export default function ProductList() {
	return (
		<>
			<h1>Product list</h1>
			<div className="flex flex-col justify-center gap-y-2">
				{/* Replace prop: replaces curr history stack */}
				{Array.from(Array(10)).map((_, i) => (
					<Link
						className="p-2 font-bold text-xl text-blue-500"
						key={i}
						href={`/products/${i + 1}`}>{`Product ${i + 1}`}</Link>
				))}
			</div>
		</>
	);
}
