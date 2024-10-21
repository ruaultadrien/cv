import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import profilePicture from "../../assets/profile_picture.jpg";
import Title from "./Title";
import Details from "./Details";

export default function Header() {
  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 12, sm: 5 }}
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
        size={{ xs: 12, sm: 7 }}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          pl: { xs: 2, sm: 0 },
          pr: { xs: 2, sm: 0 },
        }}
      >
        <Title />
        <Details />
      </Grid>
    </Grid>
  );
}
