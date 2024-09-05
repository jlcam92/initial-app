interface NavLink {
	name: string;
	href: string;
}

export const navLinks: NavLink[] = [
	{ name: "Order Product", href: "/order-product" },
	{ name: "Blog", href: "/blog" },
	{ name: "Dashboard", href: "/dashboard" },
	{ name: "Docs", href: "/docs" },
	{ name: "Products", href: "/products" },
	{ name: "Profile", href: "/profile" },
	{ name: "Register", href: "/register" },
	{ name: "Forgot Password", href: "/forgot-password" },
	{ name: "About", href: "/about" }
];
