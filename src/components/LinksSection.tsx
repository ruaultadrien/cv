import { Box } from "@mui/material";
import styles from "./CurriculumVitae.module.css";
const LinksSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "15px",
        borderRadius: "5px",
        flexGrow: 1,
      }}
    >
      <h3 className={styles.sectionTitle}>Links</h3>
      <p>
        <a
          href="https://www.linkedin.com/in/adrien-ruault/"
          className={styles.link}
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a href="https://github.com/ruaultadrien" className={styles.link}>
          GitHub
        </a>
      </p>
    </Box>
  );
};

export default LinksSection;
