import { Calendar } from "lucide-react";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CareerBreak() {
  return (
    <EmploymentHistoryItem
      title="Career Break"
      date="November 2024 – Ongoing"
      image={<Calendar className="w-12 h-12 bg-white" />}
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>Product Development -</strong> Currently developing Mikasa,
            the next-gen property rental marketplace.
          </p>
        </div>
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
