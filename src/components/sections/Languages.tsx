import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Languages() {
  return (
    <Box>
      <SectionTitle title="Languages" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, ml: 1, mr: 1 }}>
        <Chip label="🇫🇷 French - Native Speaker" />
        <Chip label="🇬🇧 English - Fluent" />
        <Chip label="🇩🇪 German - Beginner" />
      </Box>
    </Box>
  );
}
