import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Education() {
  const innerStyles = {
    itemContainer: {
      backgroundColor: "#e9edfa",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "0px",
      marginTop: "10px",
    },
    itemContainerTitle: {
      margin: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    educationItem: {
      backgroundColor: "#ccf2ff",
    },
  };
  return (
    <Box>
      <SectionTitle title="Education" />
      <div
        style={{
          ...innerStyles.itemContainer,
          ...innerStyles.educationItem,
        }}
      >
        <h4 style={innerStyles.itemContainerTitle}>
          MSc in Computational Science and Engineering, EPFL - Ecole
          Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
        </h4>
        <Typography>September 2016 – July 2019 | Grade: 5.44/6</Typography>
      </div>

      <div
        style={{
          ...innerStyles.itemContainer,
          ...innerStyles.educationItem,
        }}
      >
        <h4 style={innerStyles.itemContainerTitle}>
          BSc in Materials Science and Engineering, EPFL - Ecole Polytechnique
          Fédérale de Lausanne, Lausanne, Switzerland
        </h4>
        <Typography>September 2013 – July 2016 | Grade: 5.56/6</Typography>
      </div>
    </Box>
  );
}
