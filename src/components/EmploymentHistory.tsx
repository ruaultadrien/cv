import { Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";
import SectionTitle from "./SectionTitle";
import styles from "./CurriculumVitae.module.css";

export function EmploymentHistory() {
  return (
    <>
      <SectionTitle title="Employment History" />
      <EmploymentHistoryItem
        title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
        date="October 2019 – Present | 5+ years"
      />
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li>
          <Typography variant="body1">
            Delivered over 20 client projects in Data Science, MLOps, DevOps,
            Cloud Engineering, and Data Engineering.
          </Typography>
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
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
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
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
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
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li className={styles.text}>
          Developed Deep Learning algorithms to predict fluid mechanics.
        </li>
        <li className={styles.text}>
          Automated the company's generation of training examples.
        </li>
      </ul>
    </>
  );
}
