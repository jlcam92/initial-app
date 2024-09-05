"use client";
import Link from "next/link";
import { navLinks } from "@/app/_constants/navLinks";
import { usePathname } from "next/navigation";

export const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 flex justify-start gap-x-5 text-xl font-bold text-amber-300">
			{navLinks.map((link, index) => {
				const isActive = pathname.startsWith(link.href);
				return (
					<Link
						key={index}
						href={link.href}
						className={isActive ? "text-orange-500" : "text-orange-300"}>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};
