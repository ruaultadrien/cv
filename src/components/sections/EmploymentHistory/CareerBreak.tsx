import { ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CareerBreak() {
  return (
    <EmploymentHistoryItem title="Career Break" date="November 2024 – Ongoing">
      <ListItem>
        <Typography>
          <strong>Product Development -</strong> Currently developing Mikasa,
          the next-gen property rental marketplace.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          <strong>Personal Time -</strong> Traveled in Asia and volunteered in
          an organic farm.
        </Typography>
      </ListItem>
    </EmploymentHistoryItem>
  );
}
