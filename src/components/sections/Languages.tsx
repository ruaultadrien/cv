import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Languages() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <SectionTitle title="Languages" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Chip label="🇫🇷 French - Native Speaker" />
        <Chip label="🇬🇧 English - Highly Proficient" />
        <Chip label="🇩🇪 German - Beginner" />
      </Box>
    </Box>
  );
}
