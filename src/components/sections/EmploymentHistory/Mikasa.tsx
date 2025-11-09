import EmploymentHistoryItem from "./EmploymentHistoryItem";
import mikasaLogo from "../../../assets/companies/mikasa.png";

export default function Mikasa() {
  return (
    <EmploymentHistoryItem
      title="Founder, Mikasa, Lausanne, Switzerland"
      date="November 2024 – Ongoing | 1 year"
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
              <strong>Product -</strong> Building an AI-driven real estate
              search platform using agentic frameworks and RAG systems for
              intelligent property discovery and recommendations. 👉
              <a
                href="https://mksa.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 underline text-md"
              >
                Try beta
              </a>
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Python, React, Node, Typescript, Tailwind, PostgreSQL, LangGraph,
            LLMs, Supabase
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
