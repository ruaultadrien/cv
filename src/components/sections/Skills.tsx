import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Skills() {
  const skills = [
    "Machine Learning",
    "Data Science",
    "MLOps",
    "Cloud Engineering",
    "Data Engineering",
    "Full Stack Development",
    "Python",
    "TensorFlow",
    "Project Management",
    "Agile Development",
  ];

  return (
    <Box>
      <SectionTitle title="Skills" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} />
        ))}
      </Box>
    </Box>
  );
}
