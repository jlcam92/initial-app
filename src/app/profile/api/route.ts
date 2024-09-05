export async function GET() {
	const userData = JSON.stringify({ firstName: "Tom", lastName: "Cruise", age: 61 });
	const response = new Response(userData);

	return response;
}
