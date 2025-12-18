import csemLogo from "../../../assets/companies/csem.png";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CSEM() {
  return (
    <EmploymentHistoryItem
      title="Junior AI Research Engineer, CSEM, Neuchâtel, Switzerland"
      date="February 2019 – July 2019 | 6 months"
      image={
        <img
          src={csemLogo}
          alt="CSEM logo"
          className="p-1 object-contain rounded-lg bg-white"
        />
      }
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>AI Research -</strong> Researched the impact of
            Reinforcement Learning for controlling the energy systems in
            buildings, as part of my EPFL master thesis.
          </p>
          <p className="text-sm text-gray-600">
            Python, Tensorflow, Reinforcement Learning
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
