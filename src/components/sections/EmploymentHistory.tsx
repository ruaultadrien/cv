import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SectionTitle from "../SectionTitle";
import CareerBreak from "./EmploymentHistory/CareerBreak";
import Visium from "./EmploymentHistory/Visium";
import CSEM from "./EmploymentHistory/CSEM";
import SenSat from "./EmploymentHistory/SenSat";
import NeuralConcept from "./EmploymentHistory/NeuralConcept";

export function EmploymentHistory() {
  return (
    <Box>
      <SectionTitle title="Employment History" />
      <Grid container spacing={2}>
        <Grid size={12}>
          <CareerBreak />
        </Grid>
        <Grid size={12}>
          <Visium />
        </Grid>
        <Grid size={12}>
          <CSEM />
        </Grid>
        <Grid size={12}>
          <SenSat />
        </Grid>
        <Grid size={12}>
          <NeuralConcept />
        </Grid>
      </Grid>
    </Box>
  );
}
