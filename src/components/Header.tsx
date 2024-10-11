import { Box, Typography } from "@mui/material";

export default function Header() {
    return (

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>Hello</Box>
        <Box>
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
      </Box>
    )
}