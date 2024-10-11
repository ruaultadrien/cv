import { Box, Typography } from "@mui/material";
import EmploymentHistoryItem from "../EmploymentHistoryItem";
import SectionTitle from "../SectionTitle";

export function EmploymentHistory() {
  return (
    <Box>
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
        <li>
          <Typography>
            Provided technical leadership for several client engagements,
            ensuring compatibility with business requirements and successful
            delivery.
          </Typography>
        </li>
        <li>
          <Typography>
            Gained experience in various technical fields, including Natural
            Language Processing, Computer Vision, Time Series Forecasting,
            Recommender Systems, and Predictive Maintenance.
          </Typography>
        </li>
        <li>
          <Typography>
            Led the development of an AI SaaS product delivering recommendations
            based on customer baskets in online shopping.
          </Typography>
        </li>
        <li>
          <Typography>
            Oversaw the development of the company's internal Data Warehouse.
          </Typography>
        </li>
        <li>
          <Typography>
            Shaped the company's engineering operational processes as it grew
            from a start-up to a 60+ employee company.
          </Typography>
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
        date="February 2019 – July 2019 | 6 months"
      />
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li>
          <Typography>
            Developed RL algorithms for controlling energy systems in buildings.
          </Typography>
        </li>
        <li>
          <Typography>
            Wrote a Master Thesis in the context of an MSc at EPFL.
          </Typography>
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
        date="September 2018 – February 2019 | 6 months"
      />
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li>
          <Typography>
            Developed Deep Learning Computer Vision algorithms for object
            detection.
          </Typography>
        </li>
        <li>
          <Typography>
            Worked as a full-stack developer on the company's web product.
          </Typography>
        </li>
      </ul>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, Neural Concept, Lausanne"
        date="February 2018 – August 2018 | 6 months"
      />
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li>
          <Typography>
            Developed Deep Learning algorithms to predict fluid mechanics.
          </Typography>
        </li>
        <li>
          <Typography>
            Automated the company's generation of training examples.
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
