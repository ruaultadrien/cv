import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import profilePicture from "../../assets/profile_picture.jpeg";

export default function Header() {
  return (
    <Grid container spacing={4}>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
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
      </Grid>
    </Grid>
  );
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ flexGrow: 1 }}>
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
      </Box>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#001a57", flexGrow: 1 }}
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
    </Box>
  );
}
