import EmploymentHistoryItem from "./EmploymentHistoryItem";
import mikasaLogo from "../../../assets/companies/mikasa.png";

export default function Mikasa() {
  return (
    <EmploymentHistoryItem
      title="Founder, Mikasa, Lausanne, Switzerland"
      date="May 2025 – Ongoing"
      image={
        <img
          src={mikasaLogo}
          alt="Mikasa logo"
          className="w-24 h-24 object-contain rounded-lg p-1"
        />
      }
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>Product Development -</strong> Enabling a new AI-driven
            search experience for real estate.
          </p>
          <p className="text-sm text-gray-600">
            Python, React, Tailwind, PostgreSQL, Supabase, OpenAI, Langchain
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
