import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";
import styles from "./Languages.module.css";

export default function Languages() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <SectionTitle title="Languages" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Chip label="🇫🇷 French - Native Speaker" />
        <Chip label="🇬🇧 English - Highly Proficient" />
        <Chip label="🇩🇪 German - Beginner" />
      </Box>
      {/* <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li className={styles.text}>
          <strong>French</strong> - Native Speaker
        </li>
        <li className={styles.text}>
          <strong>English</strong> - Highly Proficient
        </li>
        <li className={styles.text}>
          <strong>German</strong> - Beginner
        </li>
      </ul>
    </section> */}
    </Box>
  );
}
