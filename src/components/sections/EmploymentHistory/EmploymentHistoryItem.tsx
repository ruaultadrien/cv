import { Box, Divider, List, Typography } from "@mui/material";

export default function EmploymentHistoryItem({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#e9edfa",
          // backgroundColor: "#0858cf", # Deep blue
          padding: 1,
          ml: 1,
          mr: 1,
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
      {children && (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ ml: 2 }}
          />
          <List sx={{ paddingTop: 0, paddingBottom: 0 }}>{children}</List>
        </Box>
      )}
    </Box>
  );
}
