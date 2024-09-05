interface Params {
	params: {
		slug: string[];
	};
}

export default function Docs({ params }: Params) {
	return params.slug ? (
		params.slug.length === 2 ? (
			<h1>
				Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
			</h1>
		) : (
			<h1>Viewing docs for feature {params.slug[0]}</h1>
		)
	) : (
		<h1>Docs page</h1>
	);
}
