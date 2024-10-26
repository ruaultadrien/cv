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
        // backgroundColor: "#0858cf", # Deep blue
        padding: 1,
        borderRadius: 2,
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
