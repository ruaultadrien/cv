import { Box } from "@mui/material";
import "./App.css";
import CurriculumVitae from "./components/CurriculumVitae";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "row",
        overflowX: "auto",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <CurriculumVitae />;
    </Box>
  );
}

export default App;
