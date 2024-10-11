import { Box } from "@mui/material";
import styles from "./CurriculumVitae.module.css";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "15px",
        borderRadius: "5px",
        flexGrow: 1,
      }}
    >
      <h3 className={styles.sectionTitle}>Contact</h3>
      <p className={styles.text}>Location: Lausanne, Switzerland</p>
      <p className={styles.text}>Phone: +41 77 441 53 42</p>
      <p className={styles.text}>
        Email:{" "}
        <a href="mailto:ruaultadrien@gmail.com" className={styles.link}>
          ruaultadrien@gmail.com
        </a>
      </p>
    </Box>
  );
};

export default Contact;
