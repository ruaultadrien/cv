import { Home, Mail, Phone } from "lucide-react";

export default function ContactDetails() {
	return (
		<div className="flex flex-col justify-evenly">
			<div className="flex flex-row items-center">
				<Home className="mr-2 h-4 w-4" />
				<span className="text-base">Lausanne, Switzerland</span>
			</div>
			<div className="flex flex-row items-center">
				<Phone className="mr-2 h-4 w-4" />
				<a
					href="tel:+41774415342"
					className="text-base text-gray-600 hover:text-gray-800 hover:underline"
				>
					+41 77 441 53 42
				</a>
			</div>
			<div className="flex flex-row items-center">
				<Mail className="mr-2 h-4 w-4" />
				<a
					href="mailto:ruaultadrien@gmail.com"
					className="text-base text-gray-600 hover:text-gray-800 hover:underline"
				>
					ruaultadrien@gmail.com
				</a>
			</div>
		</div>
	);
}
