import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";

import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Certifications() {
  return (
    <Box>
      <SectionTitle title="Certifications" />
      <Grid container columnSpacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <EmploymentHistoryItem
            title="Azure Data Scientist Associate"
            date="Microsoft, August 2024"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <EmploymentHistoryItem
            title="Dataiku Core Designer"
            date="Dataiku, April 2023"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <EmploymentHistoryItem
            title="Foundational Strategic Thinking"
            date="MQ Learning, July 2023"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <EmploymentHistoryItem
            title="Foundational Systemic People Management"
            date="MQ Learning, February 2023"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
