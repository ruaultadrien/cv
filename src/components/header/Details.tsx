import { Box, Divider } from "@mui/material";
import ContactDetails from "./ContactDetails";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

export default function Details() {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: 1,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
        borderRadius: 1,
        display: "flex",
        flexDirection: "row",
        gap: 1,
      }}
    >
      <ContactDetails />
      <Divider orientation="vertical" flexItem />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IconButton
          aria-label="LinkedIn profile"
          onClick={() =>
            window.open("https://www.linkedin.com/in/adrien-ruault", "_blank")
          }
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn profile"
          onClick={() =>
            window.open("https://github.com/ruaultadrien", "_blank")
          }
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
