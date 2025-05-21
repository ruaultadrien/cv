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
          I am a Machine Learning Engineer with 6+ years of experience,
          passionate about developing Digital Solutions that drive impact. In my
          previous experience I was able to develop a versatile skillset, from
          AI technologies to full-stack engineering.
        </Typography>
        <Typography>Looking forward to connecting!</Typography>
      </Box>
    </Box>
  );
}
