import sensatLogo from "../../../assets/companies/sensat.png";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function SenSat() {
	return (
		<EmploymentHistoryItem
			title="Junior AI Engineer, SenSat, London, United Kingdom"
			date="September 2018 – February 2019 | 6 months"
			image={
				<img
					src={sensatLogo}
					alt="SenSat logo"
					className="object-contain rounded-lg bg-white"
				/>
			}
		>
			<div className="flex flex-col gap-2">
				<div>
					<p>
						<strong>AI Research & Engineering -</strong> Developed AI computer
						vision algorithms on point clouds and integrated them in Sensat's
						client web app to enable the detection of objects in large
						landscapes.
					</p>
					<p className="text-sm text-gray-600">
						Python, Tensorflow, Computer Vision
					</p>
				</div>
			</div>
		</EmploymentHistoryItem>
	);
}
