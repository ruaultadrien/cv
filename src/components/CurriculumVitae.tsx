import { Box, Typography } from "@mui/material";
import Contact from "./Contact";
import styles from "./CurriculumVitae.module.css";
import LinksSection from "./LinksSection";
import SectionTitle from "./SectionTitle";
import { EmploymentHistory } from "./EmploymentHistory";

function CurriculumVitae() {
  const innerStyles = {
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
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box></Box>
        <Box>
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
        </Box>
      </Box>

      <SectionTitle title="Profile" />
      <Typography>
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
        <Typography>September 2016 – July 2019 | Grade: 5.44/6</Typography>
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
        <Typography>September 2013 – July 2016 | Grade: 5.56/6</Typography>
      </div>

      <div className={styles.containerContactLinks}>
        <Contact />
        <LinksSection />
      </div>

      <section>
        <SectionTitle title="Skills" />
        <ul style={{ marginRight: "30px", marginTop: 0 }}>
          <li>
            <Typography>
              <strong>Data Science:</strong> Python, TensorFlow, DVC,
              scikit-learn, HuggingFace
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>MLOps:</strong> Azure ML, VertexAI, TFX, MLFlow,
              TensorFlow Serving
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Cloud Engineering:</strong> GCP, Azure, Terraform, CI/CD
              (GitHub Actions, Azure Pipelines)
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Data Engineering:</strong> dbt, BigQuery, Snowflake, SQL,
              Fivetran, Databricks
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Soft Skills:</strong> Agile Project Management, Product
              Development, Strategic Thinking
            </Typography>
          </li>
        </ul>
      </section>

      <section>
        <SectionTitle title="Hobbies" />
        <Typography>
          Traveling across Europe on a bike, ski touring in winter, and beer
          brewing.
        </Typography>
      </section>

      <section>
        <SectionTitle title="Languages" />
        <ul style={{ marginRight: "30px", marginTop: 0 }}>
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
