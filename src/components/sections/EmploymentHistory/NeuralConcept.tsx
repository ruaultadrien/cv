import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function NeuralConcept() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, Neural Concept, Lausanne, Switzerland"
      date="February 2018 – August 2018 | 6 months"
      image={
        <img
          src="/src/assets/companies/neural_concept.webp"
          alt="Neural Concept logo"
          className="w-24 h-24 object-contain rounded-lg"
        />
      }
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>AI Modeling & Patenting -</strong> Accelerated the discovery
            of new cars and airplanes designs with ML models that predict the
            airflow around their shape. Resulted in a patent in collaboration
            with EPFL.
          </p>
          <p className="text-sm text-gray-600">
            Python, Tensorflow, Docker, Bash, Research
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
