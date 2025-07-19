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
          className="w-24 h-24 object-contain rounded-lg"
        />
      }
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>Product Development -</strong> Developing Mikasa, gathering
            all real-estate listings in one place.
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
