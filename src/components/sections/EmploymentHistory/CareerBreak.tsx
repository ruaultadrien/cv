import { Calendar } from "lucide-react";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CareerBreak() {
  return (
    <EmploymentHistoryItem
      title="Career Break"
      date="November 2024 – Ongoing"
      image={<Calendar className=" bg-white" />}
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>Personal Time -</strong> Traveled in Asia and volunteered in
            an organic farm.
          </p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
