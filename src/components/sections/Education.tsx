import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Education() {
  const innerStyles = {
    itemContainer: {
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "0px",
      marginTop: "10px",
      backgroundColor: "#ccf2ff",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    },
    itemContainerTitle: {
      margin: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    educationItem: {},
  };
  return (
    <Box>
      <SectionTitle title="Education" />
      <EmploymentHistoryItem
        title="MSc in Computational Science and Engineering, EPFL - Ecole Polytechnique Fédérale de Lausanne"
        date="September 2016 – July 2019 | Grade: 5.44/6"
      />
      <EmploymentHistoryItem
        title="BSc in Materials Science and Engineering, EPFL - Ecole Polytechnique Fédérale de Lausanne"
        date="September 2013 – July 2016 | Grade: 5.56/6"
      />
    </Box>
  );
}
