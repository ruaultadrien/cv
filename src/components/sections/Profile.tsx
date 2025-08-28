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
          I am a Machine Learning Engineer with 7+ years of experience,
          passionate about building Digital Solutions that drive impact. I have
          built a strong record in leading AI initiatives, developing a
          versatile skillset that spans from cutting-edge AI technologies to
          full-stack engineering.
        </Typography>
        <Typography>Looking forward to connecting!</Typography>
      </Box>
    </Box>
  );
}
