import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";

import profilePicture from "../../assets/profile_picture.jpeg";

export default function Header() {
  return (
    <Grid container spacing={4}>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          component="img"
          src={profilePicture}
          height="200px"
          width="200px"
          sx={{
            borderRadius: "50%",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Adds border shading
          }}
        />
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#001a57" }}
          >
            Adrien Ruault
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#001a57" }}
          >
            Machine Learning Engineer
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#f1f1f1",
            padding: 1,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
            borderRadius: 1,
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
      </Grid>
    </Grid>
  );
}
