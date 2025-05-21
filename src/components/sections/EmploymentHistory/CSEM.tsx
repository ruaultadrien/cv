import { List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function CSEM() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
      date="February 2019 – July 2019 | 6 months"
    >
      <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling & Research -</strong> Researched the
            impact of Reinforcement Learning for controlling the energy systems
            in buildings, as part of my EPFL master thesis.
          </Typography>
          <Typography variant="body2">
            Python, Tensorflow, Reinforcement Learning
          </Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
