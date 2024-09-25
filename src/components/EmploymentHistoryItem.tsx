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
        backgroundColor: "#e9edfa",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "0px",
        marginTop: "10px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{date}</Typography>
    </Box>
  );
}
