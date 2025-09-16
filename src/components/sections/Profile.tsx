import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Profile() {
  return (
    <Box>
      <SectionTitle title="Profile" />
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, ml: 1, mr: 1 }}
      >
        <Typography>
          I am a Senior Machine Learning Engineer with 7+ years of experience,
          passionate about building impactful AI-driven solutions. I have built
          a strong record in leading AI initiatives, developing agentic
          frameworks, and implementing RAG systems with LLMs. My versatile
          skillset spans from cutting-edge AI technologies and MLOps to
          full-stack engineering and cloud platforms.
        </Typography>
        <Typography>Looking forward to connecting!</Typography>
      </Box>
    </Box>
  );
}
