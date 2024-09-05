import { Card } from "@/components/atoms/card";
import Link from "next/link";

export default function Notifications() {
	return (
		<Card>
			<div className="flex flex-col gap-y-2">
				<div>Notifications</div>
				<Link
					href="/complex-dashboard/archived"
					className="text-blue-400">
					Archived
				</Link>
			</div>
		</Card>
	);
}
