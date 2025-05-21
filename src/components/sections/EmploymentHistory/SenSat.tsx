import { ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function SenSat() {
  return (
    <EmploymentHistoryItem
      title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
      date="September 2018 – February 2019 | 6 months"
    >
      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>AI Modeling & Software Engineering -</strong> Developed AI
          computer vision algorithms on point clouds and integrated them in
          Sensat's client web app to enable the detection of objects in large
          landscapes.
        </Typography>
        <Typography variant="body2">
          Python, Tensorflow, Computer Vision
        </Typography>
      </ListItem>
    </EmploymentHistoryItem>
  );
}
