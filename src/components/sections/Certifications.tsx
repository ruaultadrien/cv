import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";

import CertificationItem from "./CertificationItem";

export default function Certifications() {
  return (
    <Box>
      <SectionTitle title="Certifications" />
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Azure Data Scientist Associate"
            date="Microsoft, August 2024"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Dataiku Core Designer"
            date="Dataiku, April 2023"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Foundational Strategic Thinking"
            date="MQ Learning, July 2023"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Foundational Systemic People Management"
            date="MQ Learning, February 2023"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
