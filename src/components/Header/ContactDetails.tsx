import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";

export default function ContactDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <HomeIcon sx={{ marginRight: 1 }} fontSize="inherit" />
        <Typography variant="body1">Lausanne, Switzerland</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <PhoneIcon sx={{ marginRight: 1 }} fontSize="inherit" />
        <Typography variant="body1">+41 77 441 53 42</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MailIcon sx={{ marginRight: 1 }} fontSize="inherit" />
        <Typography
          variant="body1"
          component="a"
          href={`mailto:ruaultadrien@gmail.com`}
          color="primary"
        >
          ruaultadrien@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
