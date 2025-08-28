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
          <div className="flex flex-row gap-2">
            <p>
              <strong>Product Development -</strong> Enabling a new AI-driven
              search experience for real estate.
            </p>
            <a
              href="https://mksa.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 underline text-md"
            >
              Try preview
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Python, React, Tailwind, PostgreSQL, Supabase, OpenAI, Langchain
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
