import SectionTitle from "../SectionTitle";
import CareerBreak from "./EmploymentHistory/CareerBreak";
import Visium from "./EmploymentHistory/Visium";
import CSEM from "./EmploymentHistory/CSEM";
import SenSat from "./EmploymentHistory/SenSat";
import NeuralConcept from "./EmploymentHistory/NeuralConcept";
import Mikasa from "./EmploymentHistory/Mikasa";

export function EmploymentHistory() {
  return (
    <div>
      <SectionTitle title="Employment History" />
      <div className="grid grid-cols-1 gap-4">
        <Mikasa />
        <CareerBreak />
        <Visium />
        <CSEM />
        <SenSat />
        <NeuralConcept />
      </div>
    </div>
  );
}
