import SectionTitle from "../SectionTitle";
import CSEM from "./EmploymentHistory/CSEM";
import Mikasa from "./EmploymentHistory/Mikasa";
import NeuralConcept from "./EmploymentHistory/NeuralConcept";
import SenSat from "./EmploymentHistory/SenSat";
import Visium from "./EmploymentHistory/Visium";

export function EmploymentHistory() {
	return (
		<div>
			<SectionTitle title="Employment History" />
			<div className="grid grid-cols-1 gap-8">
				<Mikasa />
				<Visium />
				<CSEM />
				<SenSat />
				<NeuralConcept />
			</div>
		</div>
	);
}
