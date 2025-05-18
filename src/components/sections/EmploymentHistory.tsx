import { Box, List, ListItem, Typography } from "@mui/material";
import EmploymentHistoryItem from "./EmploymentHistoryItem";
import SectionTitle from "../SectionTitle";

export function EmploymentHistory() {
  return (
    <Box>
      <SectionTitle title="Employment History" />
      <EmploymentHistoryItem
        title="Personal career break"
        date="November 2024 – Now | Ongoing"
      />
      <List sx={{ paddingTop: 0 }}>
        <ListItem>
          <Typography>
            <strong>Personal break -</strong> I took some time off to travel in
            Asia and to volunteer in an organic farm.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Mikasa - </strong> Currently developing Mikasa, a property
            rental digital marketplace.
          </Typography>
        </ListItem>
      </List>
      <EmploymentHistoryItem
        title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
        date="October 2019 – October 2024 | 5 years"
      />
      <List sx={{ paddingTop: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling -</strong> Ensured the technical
            leadership and development of over 20 consulting projects, including
            Time Series Forecasting, Recommender Systems, Computer Vision,
            Tabular Machine Learning and General Optimization Problems. Also
            developed a ML Platform as a Python package, significantly reducing
            development efforts to perform data exploration and model
            deployment.
          </Typography>
          <Typography variant="body2">
            Python, Sklearn, Tensorflow, Docker, GCP, Azure, DVC, Streamlit,
            MLFlow
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Product Development -</strong> Led the development of an AI
            Recommender System SaaS, coordinating a team of 3 to 4 engineers.
            Supervised all the technical aspects of the product including: Data
            Science modeling, MLOps and Backend. Ensured the translation of
            business requirements into technical specifications and the
            successful delivery of the product.
          </Typography>
          <Typography variant="body2">
            Agile Development, Python, Tensorflow
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Engineering -</strong> Developed Visium's Data
            Warehouse which centralizes all the company data sources in one
            place and provides a trustworthy single source of truth for the
            business. It involves the development of an ETL pipeline, as well as
            scheduled data transformations and validations, enabling Business
            Intelligence.
          </Typography>
          <Typography variant="body2">
            dbt, SQL, Google BigQuery, GCP, Fivetran, Python
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Full Stack Engineering -</strong> Expanded my skill set by
            learning React which enabled me to integrate React frontends with
            Python backends on two high-impact projects.
          </Typography>
          <Typography variant="body2">
            React, Typescript, CSS, Postgres, FastApi, Python
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Cloud Engineering -</strong> Deployed numerous containerized
            services in various cloud platforms, utilizing PaaS, serverless
            functions and managed Kubernetes (K8s) environments.
          </Typography>
          <Typography variant="body2">
            Docker, GCP, Azure, Openshift, GKE, Terraform
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Project Management -</strong> Managed over 20 consulting
            projects. Ensured the alignment of developments with clients' needs
            and the successful delivery on time and on budget.
          </Typography>
          <Typography variant="body2">
            Agile Development, Strategic Thinking
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Business Development -</strong> Actively contributed to the
            growth of Visium as it grew from a start-up to a 60+ employees
            company. Actively took part in sales and in developing the
            operational processes of the company, especially developed processes
            for the Quality Assurance of projects and to ensure Knowledge
            Transfer between engineers.
          </Typography>
          <Typography variant="body2">Sales, Strategic Thinking</Typography>
        </ListItem>
      </List>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, CSEM, Neuchâtel, Switzerland"
        date="February 2019 – July 2019 | 6 months"
      />
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

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, SenSat, London, United Kingdom"
        date="September 2018 – February 2019 | 6 months"
      />
      <List sx={{ paddingTop: 0 }}>
        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Data Science Modeling -</strong> Developed Deep Learning
            Computer Vision algorithms to perform Object Detection and Semantic
            Segmentation in Point Clouds of landscapes generated via drone
            photogrammetry.
          </Typography>
          <Typography variant="body2">
            Python, Tensorflow, Computer Vision
          </Typography>
        </ListItem>

        <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Typography>
            <strong>Full Stack Engineering -</strong> Acively developed Sensat's
            Web App SaaS to display ML predictions in interactive Point Clouds.
          </Typography>
          <Typography variant="body2">
            Angular, C++, Python, Tensorflow, Docker
          </Typography>
        </ListItem>
      </List>

      <EmploymentHistoryItem
        title="Junior Machine Learning Engineer, Neural Concept, Lausanne, Switzerland"
        date="February 2018 – August 2018 | 6 months"
      />
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
            <strong>Data Engineering -</strong> Developed a pipeline that
            generates novel designs of cars and airplanes, integrated with a
            fluid mechanic solver to simulate the airflow around the designs.
            Enabled the automated generation of thousands of training examples,
            significantly reducing the manual data preparation effort for
            downstream ML models.
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
    </Box>
  );
}
