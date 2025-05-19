import { Box, List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";
import SectionTitle from "../SectionTitle";

export function EmploymentHistory() {
  return (
    <Box>
      <SectionTitle title="Employment History" />
      <EmploymentHistoryItem
        title="Career break"
        date="November 2024 – Ongoing"
      >
        <List sx={{ paddingTop: 0 }}>
          <ListItem>
            <Typography>
              <strong>Personal time -</strong> Took some time off to travel in
              Asia and to volunteer in a South Korean organic farm.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              <strong>Mikasa - </strong> Currently developing Mikasa, a property
              rental digital marketplace.
            </Typography>
          </ListItem>
        </List>
      </EmploymentHistoryItem>
      <EmploymentHistoryItem
        title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
        date="October 2019 – October 2024 | 5 years"
      >
        <List sx={{ paddingTop: 0 }}>
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Science Modeling -</strong> Ensured the technical
              leadership on a wide range of projects, including Time Series
              Forecasting, Recommender Systems, Computer Vision, Tabular Machine
              Learning and General Optimization Problems.
            </Typography>
            <Typography variant="body2">
              Python, Sklearn, Tensorflow, Docker, GCP, Azure, DVC, Streamlit,
              MLFlow
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Product Development -</strong> Led the development of an
              AI Recommender System SaaS, coordinating a team of 3 to 4
              engineers. Also lead the development of an ML Platform that was
              reused across projects to accelerate data exploration and model
              deployment.
            </Typography>
            <Typography variant="body2">
              Python, Tensorflow, MLOps, GCP, GKE, NestJS, Agile Development
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Engineering -</strong> Enabled Visium's Business
              Intelligence with the development of a Data Warehouse which
              centralizes and transform all the company's data into a high
              quality data layer.
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
              React, Typescript, CSS, Postgres, FastApi, Python
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Cloud Engineering -</strong> Deployed numerous
              containerized services in various cloud platforms, utilizing PaaS,
              serverless functions and managed Kubernetes (K8s) environments.
            </Typography>
            <Typography variant="body2">
              Docker, GCP, Azure, Openshift, GKE, Terraform
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Project Management -</strong> Managed the development of 2
              products and many client projects. Ensured the alignment of
              developments with business requirements and the delivery on time
              and on budget.
            </Typography>
            <Typography variant="body2">
              Agile Development, Communication, Leadership, Client Relations,
              Strategic Thinking
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Business Development -</strong> Actively helped Visium
              grow from a start-up to a 60+ employees company by supporting
              sales and establishing scalable engineering processes.
            </Typography>
            <Typography variant="body2">Sales, Strategic Thinking</Typography>
          </ListItem>
        </List>
      </EmploymentHistoryItem>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
        date="February 2019 – July 2019 | 6 months"
      >
        <List sx={{ paddingTop: 0 }}>
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Science Modeling -</strong> Developed Reinforcement
              Learning algorithms for controlling energy systems in buildings.
            </Typography>
            <Typography variant="body2">Python, Tensorflow</Typography>
          </ListItem>
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Academic Research -</strong> Wrote my Master Thesis in the
              context of my Computational Science MSc at EPFL.
            </Typography>
          </ListItem>
        </List>
      </EmploymentHistoryItem>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
        date="September 2018 – February 2019 | 6 months"
      >
        <List sx={{ paddingTop: 0 }}>
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Science Modeling -</strong> Developed Deep Learning
              Computer Vision algorithms to perform Object Detection and
              Semantic Segmentation in Point Clouds generated via drone
              photogrammetry.
            </Typography>
            <Typography variant="body2">
              Python, Tensorflow, Computer Vision
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Full Stack Engineering -</strong> Acively developed
              Sensat's Web App SaaS to display ML predictions in interactive
              Point Clouds.
            </Typography>
            <Typography variant="body2">
              Angular, C++, Python, Tensorflow, Docker
            </Typography>
          </ListItem>
        </List>
      </EmploymentHistoryItem>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, Neural Concept, Lausanne, Switzerland"
        date="February 2018 – August 2018 | 6 months"
      >
        <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Science Modeling -</strong> Developed Deep Learning
              algorithms to predict fluid mechanics around cars and airplanes.
              Used the model developed to accelerate the research of design.
            </Typography>
            <Typography variant="body2">Python, Tensorflow</Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Data Engineering -</strong> Significantly accelerated the
              developemnt of ML models with the automation of fluid dynamics
              simulations in the training pipeline.
            </Typography>
            <Typography variant="body2">
              Python, Bash, Docker, OpenFOAM
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography>
              <strong>Patented Technology -</strong> The software resulting from
              my work is a patented technology called AutoFOAM, in collaboration
              with NeuralConcept and EPFL.
            </Typography>
            <Typography variant="body2">Python, Tensorflow</Typography>
          </ListItem>
        </List>
      </EmploymentHistoryItem>
    </Box>
  );
}
