import { Box, Divider, Typography } from "@mui/material";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ width: "5%" }}>
        <Divider />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Divider />
      </Box>
    </Box>
  );
}
