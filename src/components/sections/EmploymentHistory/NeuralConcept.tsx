import { ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function NeuralConcept() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, Neural Concept, Lausanne, Switzerland"
      date="February 2018 – August 2018 | 6 months"
    >
      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>AI Modeling & Patenting -</strong> Accelerated the discovery
          of new cars and airplanes designs with ML models that predict the
          airflow around their shape. Resulted in a patent in collaboration with
          EPFL.
        </Typography>
        <Typography variant="body2">
          Python, Tensorflow, Docker, Bash, Research
        </Typography>
      </ListItem>
    </EmploymentHistoryItem>
  );
}
