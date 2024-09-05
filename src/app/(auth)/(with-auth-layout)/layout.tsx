"use client";
import { FormEvent, useState } from "react";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
	const [userName, setUserName] = useState("");
	return (
		<>
			<h1>Hello, {userName}</h1>
			<input
				type="text"
				onChange={e => setUserName(e.target.value)}
				value={userName}
			/>
			{children}
		</>
	);
}
