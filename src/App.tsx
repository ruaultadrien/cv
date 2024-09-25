import { Box } from "@mui/material";
import "./App.css";
import CurriculumVitae from "./components/CurriculumVitae";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CurriculumVitae />;
    </Box>
  );
}

export default App;
