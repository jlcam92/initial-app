import { Card } from "@/components/atoms/card";
import Link from "next/link";

export default function ArchivedNotifications() {
	return (
		<Card>
			<div className="flex flex-col gap-y-2">
				<div>Archived</div>
				<Link
					href="/complex-dashboard"
					className="text-blue-400">
					Go back
				</Link>
			</div>
		</Card>
	);
}
