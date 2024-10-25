import { Box, Typography } from "@mui/material";

export default function EmploymentHistoryItem({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#0858cf",
        padding: 1,
        borderRadius: 2,
        marginTop: "10px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "white" }} variant="body1">
        {date}
      </Typography>
    </Box>
  );
}
