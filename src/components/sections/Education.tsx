import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Education() {
  return (
    <Box>
      <SectionTitle title="Education" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <EmploymentHistoryItem
          title="MSc in Computational Science and Engineering, EPFL - Ecole Polytechnique Fédérale de Lausanne"
          date="September 2016 – July 2019 | Grade: 5.44/6"
        />
        <EmploymentHistoryItem
          title="Erasmus, The University of Manchester (as part of my BSc at EPFL)"
          date="September 2015 – July 2016"
        />
        <EmploymentHistoryItem
          title="BSc in Materials Science and Engineering, EPFL - Ecole Polytechnique Fédérale de Lausanne"
          date="September 2013 – July 2016 | Grade: 5.56/6"
        />
      </Box>
    </Box>
  );
}
