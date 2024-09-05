export async function GET() {
	const jsonString = JSON.stringify({ hola: "esto es un json" });
	const response = new Response(jsonString);

	return response;
}
