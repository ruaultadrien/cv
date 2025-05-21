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
            <strong>Data Science Modeling -</strong> Accelerated the research of
            cars and airplanes design with Deep Learning models predicting
            airflows.
          </Typography>
          <Typography variant="body2">Python, Tensorflow</Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Engineering -</strong> Significantly accelerated the
            developemnt of ML models with the automation of fluid dynamics
            simulations in the training pipeline.
          </Typography>
          <Typography variant="body2">
            Python, Bash, Docker, OpenFOAM
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Patented Technology -</strong> The software resulting from
            my work is a patented technology called AutoFOAM, in collaboration
            with NeuralConcept and EPFL.
          </Typography>
          <Typography variant="body2">Python, Tensorflow</Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
