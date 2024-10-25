import { Box, Divider, Typography } from "@mui/material";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#001a57",
        borderRadius: 4,
        marginBottom: 1,
      }}
    >
      <Box sx={{ width: "5%" }}></Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
    </Box>
  );
}
