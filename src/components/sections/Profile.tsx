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
          Machine Learning Engineer with 6+ years of experience, passionate
          about developing Digital Solutions. Able to handle the whole
          development lifecycle of data-driven applications.
        </Typography>
        <Typography>Looking forward to connecting!</Typography>
      </Box>
    </Box>
  );
}
