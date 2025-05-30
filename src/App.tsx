import { Box, createTheme, ThemeProvider } from "@mui/material";
import CurriculumVitae from "./components/CurriculumVitae";

const theme = createTheme({
  typography: {
    // Set a global base font size for the body (this is relative to `rem`).
    fontSize: 14, // This will set the base size for body text
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          flexDirection: "row",
          overflowX: "auto",
          alignItems: "flex-start",
          justifyContent: "center",
          "@media print": {
            height: "auto",
            overflowX: "visible",
            zoom: 0.65, // Adjust zoom level for printing
            "-webkit-print-color-adjust": "exact", // Ensure colors are printed
            "print-color-adjust": "exact", // Ensure colors are printed
          },
        }}
      >
        <CurriculumVitae />
      </Box>
    </ThemeProvider>
  );
}

export default App;
