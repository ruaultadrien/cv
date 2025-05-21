import { List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "../EmploymentHistoryItem";

export default function NeuralConcept() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, Neural Concept, Lausanne, Switzerland"
      date="February 2018 – August 2018 | 6 months"
    >
      <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling & Patenting -</strong> Accelerated the
            research of cars and airplanes design with Deep Learning models
            predicting airflows. Resulted in a patent in collaboration with
            EPFL.
          </Typography>
          <Typography variant="body2">
            Python, Tensorflow, Docker, Bash, Research
          </Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
