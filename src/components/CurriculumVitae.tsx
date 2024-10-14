import { Box } from "@mui/material";
import LinksSection from "./LinksSection";
import { EmploymentHistory } from "./sections/EmploymentHistory";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import Languages from "./sections/Languages";

function CurriculumVitae() {
  return (
    <Box
      sx={{
        borderRadius: 10,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        padding: 4,
        margin: { xs: 2, sm: 4 },
        backgroundColor: "white",
        maxWidth: "800px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Header />

      <Profile />

      <EmploymentHistory />

      <Education />

      <LinksSection />

      <Skills />

      <Hobbies />

      <Languages />
    </Box>
  );
}

export default CurriculumVitae;
