import { Box } from "@mui/material";
import styles from "./CurriculumVitae.module.css";
import SectionTitle from "./SectionTitle";
const LinksSection = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <SectionTitle title="Links" />
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
