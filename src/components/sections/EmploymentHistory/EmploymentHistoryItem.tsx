import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function EmploymentHistoryItem({
  title,
  date,
  image,
  children,
  className,
}: {
  title: string;
  date: string;
  image: ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-row gap-4 items-center bg-gray-100 p-2 rounded-lg">
        <div className="w-12 h-12 flex items-center justify-center">
          {image}
        </div>
        <div className="flex-grow">
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
      </div>
      {children && <div className="pl-4">{children}</div>}
    </div>
  );
}
