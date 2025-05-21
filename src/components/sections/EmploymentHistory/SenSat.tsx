import { List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function SenSat() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
      date="September 2018 – February 2019 | 6 months"
    >
      <List sx={{ paddingTop: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling -</strong> Developed Deep Learning
            Computer Vision algorithms to perform Object Detection and Semantic
            Segmentation in Point Clouds generated via drone photogrammetry.
          </Typography>
          <Typography variant="body2">
            Python, Tensorflow, Computer Vision
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Full Stack Engineering -</strong> Integrated ML models with
            Sensat's client product to visualize predictions.
          </Typography>
          <Typography variant="body2">
            Angular, C++, Python, Tensorflow, Docker
          </Typography>
        </ListItem>
      </List>
    </EmploymentHistoryItem>
  );
}
