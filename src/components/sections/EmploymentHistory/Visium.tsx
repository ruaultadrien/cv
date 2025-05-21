import { ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Visium() {
  return (
    <EmploymentHistoryItem
      title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
      date="October 2019 – October 2024 | 5 years"
    >
      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>AI Consulting -</strong> Managed and actively developed 10+
          client projects, from specifications definition to execution with time
          and budget constraints.
        </Typography>
        <Typography variant="body2">
          Python, Sklearn, Tensorflow, GCP, Azure, Time Series Forecasting,
          Recommender Systems, Computer Vision
        </Typography>
      </ListItem>

      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>Product Development -</strong> Led Visium's products. First,
          an AI Recommender API enabling training and serving predictions as a
          service. Second, Visium's ML Platform to accelerate project execution.
        </Typography>
        <Typography variant="body2">
          Python, Tensorflow, MLOps, GCP, GKE, NestJS, Agile Development,
          Recommender Systems
        </Typography>
      </ListItem>

      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>Data Engineering -</strong> Enabled Visium's Business
          Intelligence with the development of a Data Warehouse which
          centralizes and transform the company's data into a high quality data
          layer.
        </Typography>
        <Typography variant="body2">
          dbt, SQL, Google BigQuery, GCP, Fivetran, Python
        </Typography>
      </ListItem>

      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>Full Stack Engineering -</strong> Developed and integrated
          React frontends with Python backends on two high-impact projects.
        </Typography>
        <Typography variant="body2">
          React, Typescript, CSS, Postgres, FastAPI, Python
        </Typography>
      </ListItem>

      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>Cloud Engineering -</strong> Deployed and maintained many
          containerized services in Azure and GCP's serverless platforms and in
          managed Kubernetes environments like Openshift and GKE.
        </Typography>
        <Typography variant="body2">
          Docker, GCP, Azure, Openshift, GKE, Terraform
        </Typography>
      </ListItem>

      <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography>
          <strong>Business Development -</strong> Actively helped Visium grow
          from a start-up to a 60+ employees company by supporting sales and
          establishing scalable engineering processes.
        </Typography>
        <Typography variant="body2">Sales, Strategic Thinking</Typography>
      </ListItem>
    </EmploymentHistoryItem>
  );
}
