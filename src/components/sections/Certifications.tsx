import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";

import CertificationItem from "./CertificationItem";
import huggingFaceLogo from "../../assets/certifications/hugging_face.svg";
import dataikuLogo from "../../assets/certifications/dataiku.png";
import mqLearning from "../../assets/certifications/mq_learning.jpeg";
import azureLogo from "../../assets/certifications/azure.svg";

export default function Certifications() {
  return (
    <Box>
      <SectionTitle title="Certifications" />
      <Grid container spacing={1} sx={{ ml: 1, mr: 1 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Fundamentals of Agents"
            company="Hugging Face"
            date="February 2025"
            image={huggingFaceLogo}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Azure Data Scientist Associate"
            company="Microsoft"
            date="August 2024"
            image={azureLogo}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Dataiku Core Designer"
            company="Dataiku"
            date="April 2023"
            image={dataikuLogo}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Foundational Strategic Thinking"
            company="MQ Learning"
            date="July 2023"
            image={mqLearning}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CertificationItem
            title="Foundational Systemic People Management"
            company="MQ Learning"
            date="February 2023"
            image={mqLearning}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
