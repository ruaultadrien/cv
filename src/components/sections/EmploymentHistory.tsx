import { Box } from "@mui/material";
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
      <CareerBreak />
      <Visium />
      <CSEM />
      <SenSat />
      <NeuralConcept />
    </Box>
  );
}
