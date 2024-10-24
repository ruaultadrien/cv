import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Profile() {
  return (
    <Box>
      <SectionTitle title="Profile" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography>
          Machine Learning Engineer with 6+ years of experience, passionate
          about developing Digital Solutions. Provide services in MLOps, Cloud
          Engineering, Data Engineering, and Full Stack Engineering. Proud to
          have helped grow my previous company from a start-up to an established
          consulting business.
        </Typography>
        <Typography>Looking forward to connecting!</Typography>
      </Box>
    </Box>
  );
}
