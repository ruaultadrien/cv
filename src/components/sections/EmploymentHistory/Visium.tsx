import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Visium() {
  return (
    <EmploymentHistoryItem
      title="Senior Machine Learning Engineer, Visium SA, Lausanne, Switzerland"
      date="October 2019 – October 2024 | 5 years"
      image={
        <img
          src="/src/assets/companies/visium.png"
          alt="Visium logo"
          className="w-12 h-12 object-contain rounded-lg bg-white"
        />
      }
    >
      <div className="flex flex-col gap-2">
        <div>
          <p>
            <strong>AI Consulting -</strong> Managed and actively developed 10+
            client projects, from specifications definition to execution with
            time and budget constraints.
          </p>
          <p className="text-sm text-gray-600">
            Python, Sklearn, Tensorflow, GCP, Azure, Time Series Forecasting,
            Recommender Systems, Computer Vision
          </p>
        </div>
        <div>
          <p>
            <strong>Product Development -</strong> Led Visium's products. First,
            an AI Recommender API enabling training and serving predictions as a
            service. Second, Visium's ML Platform to accelerate project
            execution.
          </p>
          <p className="text-sm text-gray-600">
            Python, Tensorflow, MLOps, GCP, GKE, NestJS, Agile Development,
            Recommender Systems
          </p>
        </div>
        <div>
          <p>
            <strong>Data Engineering -</strong> Enabled Visium's Business
            Intelligence with the development of a Data Warehouse which
            centralizes and transform the company's data into a high quality
            data layer.
          </p>
          <p className="text-sm text-gray-600">
            dbt, SQL, Google BigQuery, GCP, Fivetran, Python
          </p>
        </div>
        <div>
          <p>
            <strong>Full Stack Engineering -</strong> Developed and integrated
            React frontends with Python backends on two high-impact projects.
          </p>
          <p className="text-sm text-gray-600">
            React, Typescript, CSS, Postgres, FastAPI, Python
          </p>
        </div>
        <div>
          <p>
            <strong>Cloud Engineering -</strong> Deployed and maintained many
            containerized services in Azure and GCP's serverless platforms and
            in managed Kubernetes environments like Openshift and GKE.
          </p>
          <p className="text-sm text-gray-600">
            Docker, GCP, Azure, Openshift, GKE, Terraform
          </p>
        </div>
        <div>
          <p>
            <strong>Business Development -</strong> Actively helped Visium grow
            from a start-up to a 60+ employees company by supporting sales and
            establishing scalable engineering processes.
          </p>
          <p className="text-sm text-gray-600">Sales, Strategic Thinking</p>
        </div>
      </div>
    </EmploymentHistoryItem>
  );
}
