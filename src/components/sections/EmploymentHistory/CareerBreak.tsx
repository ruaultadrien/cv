import { List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CareerBreak() {
  return (
    <EmploymentHistoryItem title="Career Break" date="November 2024 – Ongoing">
      <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItem>
          <Typography>
            <strong>Personal Time -</strong> Took some time off to travel in
            Asia and do some volunteering work.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Product Development - </strong> Currently developing Mikasa,
            the next-gen property rental marketplace.
          </Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
