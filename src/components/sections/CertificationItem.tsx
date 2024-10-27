import { Box, Typography } from "@mui/material";

export default function CertificationItem({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        padding: 1,
        borderRadius: 2,
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
