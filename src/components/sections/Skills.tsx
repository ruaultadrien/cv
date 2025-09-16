import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Skills() {
  const skills = [
    "Python",
    "Pytorch",
    "Machine Learning",
    "FastAPI",
    "MLOps",
    "MLFlow",
    "Agentic Frameworks",
    "LangGraph",
    "LangChain",
    "Azure DevOps",
    "Cloud Engineering",
    "Data Engineering",
    "Full Stack Development",
    "ReactJS",
    "JavaScript",
  ];

  return (
    <Box>
      <SectionTitle title="Skills" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, ml: 1, mr: 1 }}>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} />
        ))}
      </Box>
    </Box>
  );
}
