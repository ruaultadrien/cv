import { Box, Typography } from "@mui/material";
import Contact from "./Contact";
import styles from "./CurriculumVitae.module.css";
import LinksSection from "./LinksSection";
import SectionTitle from "./SectionTitle";
import { EmploymentHistory } from "./EmploymentHistory";

function CurriculumVitae() {
  const innerStyles = {
    ul: {
      marginTop: 0,
      marginRight: "30px",
    },
    paragraph: {
      marginBottom: "1rem",
      color: "#333",
    },
    itemContainer: {
      backgroundColor: "#e9edfa",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "0px",
      marginTop: "10px",
    },
    itemContainerTitle: {
      margin: 0,
      fontSize: "16px",
      fontWeight: "bold",
    },
    educationItem: {
      backgroundColor: "#ccf2ff",
    },
  };

  return (
    <Box
      sx={{
        borderRadius: 10,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        padding: 4,
        margin: 4,
        backgroundColor: "white",
        maxWidth: "800px",
        // width: "100%",
        flexGrow: 1,
        // alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#001a57" }}
      >
        Adrien Ruault
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#001a57" }}
      >
        Machine Learning Engineer
      </Typography>

      <SectionTitle title="Profile" />
      <Typography style={innerStyles.paragraph}>
        Machine Learning Engineer with 6+ years of experience, passionate about
        developing AI and Data solutions. Skilled in Data Science, MLOps, Cloud
        Engineering, Data Engineering, and Project Management. Proud to have
        helped grow my current company from a start-up to an established
        consulting business. Looking forward to connecting!
      </Typography>

      <EmploymentHistory />

      <SectionTitle title="Education" />
      <div
        style={{
          ...innerStyles.itemContainer,
          ...innerStyles.educationItem,
        }}
      >
        <h4 style={innerStyles.itemContainerTitle}>
          MSc in Computational Science and Engineering, EPFL - Ecole
          Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
        </h4>
        <p className={styles.text}>
          September 2016 – July 2019 | Grade: 5.44/6
        </p>
      </div>

      <div
        style={{
          ...innerStyles.itemContainer,
          ...innerStyles.educationItem,
        }}
      >
        <h4 style={innerStyles.itemContainerTitle}>
          BSc in Materials Science and Engineering, EPFL - Ecole Polytechnique
          Fédérale de Lausanne, Lausanne, Switzerland
        </h4>
        <p className={styles.text}>
          September 2013 – July 2016 | Grade: 5.56/6
        </p>
      </div>

      <div className={styles.containerContactLinks}>
        <Contact />
        <LinksSection />
      </div>

      <section>
        <SectionTitle title="Skills" />
        <ul style={innerStyles.ul}>
          <li className={styles.text}>
            <strong>Data Science:</strong> Python, TensorFlow, DVC,
            scikit-learn, HuggingFace
          </li>
          <li className={styles.text}>
            <strong>MLOps:</strong> Azure ML, VertexAI, TFX, MLFlow, TensorFlow
            Serving
          </li>
          <li className={styles.text}>
            <strong>Cloud Engineering:</strong> GCP, Azure, Terraform, CI/CD
            (GitHub Actions, Azure Pipelines)
          </li>
          <li className={styles.text}>
            <strong>Data Engineering:</strong> dbt, BigQuery, Snowflake, SQL,
            Fivetran, Databricks
          </li>
          <li className={styles.text}>
            <strong>Soft Skills:</strong> Agile Project Management, Product
            Development, Strategic Thinking
          </li>
        </ul>
      </section>

      <section>
        <SectionTitle title="Hobbies" />
        <p style={innerStyles.paragraph}>
          Traveling across Europe on a bike, ski touring in winter, and beer
          brewing.
        </p>
      </section>

      <section>
        <SectionTitle title="Languages" />
        <ul style={innerStyles.ul}>
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
      </section>
    </Box>
  );
}

export default CurriculumVitae;
