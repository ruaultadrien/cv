import { Box, Typography } from "@mui/material";
import Contact from "./Contact";
import styles from "./CurriculumVitae.module.css";
import LinksSection from "./LinksSection";
import SectionTitle from "./SectionTitle";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

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
        width: "50vw",
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

      <SectionTitle title="Employment History" />
      <EmploymentHistoryItem
        title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
        date="October 2019 – Present | 5+ years"
      />
      <ul style={innerStyles.ul}>
        <li className={styles.text}>
          Delivered over 20 client projects in Data Science, MLOps, DevOps,
          Cloud Engineering, and Data Engineering.
        </li>
        <li className={styles.text}>
          Provided technical leadership for several client engagements, ensuring
          compatibility with business requirements and successful delivery.
        </li>
        <li className={styles.text}>
          Gained experience in various technical fields, including Natural
          Language Processing, Computer Vision, Time Series Forecasting,
          Recommender Systems, and Predictive Maintenance.
        </li>
        <li className={styles.text}>
          Led the development of an AI SaaS product delivering recommendations
          based on customer baskets in online shopping.
        </li>
        <li className={styles.text}>
          Oversaw the development of the company's internal Data Warehouse.
        </li>
        <li className={styles.text}>
          Shaped the company's engineering operational processes as it grew from
          a start-up to a 60+ employee company.
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
        date="February 2019 – July 2019 | 6 months"
      />
      <ul style={innerStyles.ul}>
        <li className={styles.text}>
          Developed RL algorithms for controlling energy systems in buildings.
        </li>
        <li className={styles.text}>
          Wrote a Master Thesis in the context of an MSc at EPFL.
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
        date="September 2018 – February 2019 | 6 months"
      />
      <ul style={innerStyles.ul}>
        <li className={styles.text}>
          Developed Deep Learning Computer Vision algorithms for object
          detection.
        </li>
        <li className={styles.text}>
          Worked as a full-stack developer on the company's web product.
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, Neural Concept, Lausanne"
        date="February 2018 – August 2018 | 6 months"
      />
      <ul style={innerStyles.ul}>
        <li className={styles.text}>
          Developed Deep Learning algorithms to predict fluid mechanics.
        </li>
        <li className={styles.text}>
          Automated the company's generation of training examples.
        </li>
      </ul>

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
