import { List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "../EmploymentHistoryItem";

export default function CSEM() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
      date="February 2019 – July 2019 | 6 months"
    >
      <List sx={{ paddingTop: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling -</strong> Developed Reinforcement
            Learning algorithms for controlling energy systems in buildings.
          </Typography>
          <Typography variant="body2">Python, Tensorflow</Typography>
        </ListItem>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Academic Research -</strong> Wrote my Master Thesis in the
            context of my Computational Science MSc at EPFL.
          </Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
