const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

export default function SingleProductLayout({ children }: { children: React.ReactNode }) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Test error");
	}
	return (
		<>
			<h1>Hello single product layout</h1>
			{children}
		</>
	);
}
