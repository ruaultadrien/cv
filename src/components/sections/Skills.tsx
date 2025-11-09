import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Skills() {
  const skills = [
    "Machine Learning",
    "AI Engineering",
    "Python",
    "Pytorch",
    "FastAPI",
    "MLOps",
    "MLFlow",
    "Agentic AI",
    "LangGraph",
    "Cloud Engineering",
    "Azure DevOps",
    "OpenShift",
    "GKE",
    "Data Engineering",
    "dbt",
    "SQL",
    "Google BigQuery",
    "Fivetran",
    "Full Stack Engineering",
    "React",
    "Node",
    "Supabase",
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
