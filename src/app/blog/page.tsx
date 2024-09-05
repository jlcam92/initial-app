import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		// Overwrites template title from parent
		absolute: "Blog"
	}
};

export default function Blog() {
	// Not like this
	return (
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, alias illo facere
			officiis, dolores similique minima labore autem illum neque nostrum. Quos, earum
			dolorem debitis quaerat vel commodi fuga quo, incidunt illum architecto excepturi
			dolor voluptatum deserunt impedit, hic inventore. Architecto, saepe eveniet voluptas
			odio maxime aliquid neque molestias in.
		</div>
	);
}
