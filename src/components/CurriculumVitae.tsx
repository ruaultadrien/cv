import { Box } from "@mui/material";
import { EmploymentHistory } from "./sections/EmploymentHistory";
import Header from "./header/Header";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Hobbies from "./sections/Hobbies";
import Languages from "./sections/Languages";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";

function CurriculumVitae() {
  return (
    <Box
      sx={{
        borderRadius: 10,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        padding: { xs: 2, sm: 4 },
        margin: { xs: 2, sm: 4 },
        backgroundColor: "white",
        maxWidth: "800px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        "@media print": {
          boxShadow: "none",
          borderRadius: 0,
          mt: 0,
        },
      }}
    >
      <Header />

      <Profile />

      <EmploymentHistory />

      <Education />

      <Certifications />

      <Skills />

      <Languages />

      <Hobbies />
    </Box>
  );
}

export default CurriculumVitae;
