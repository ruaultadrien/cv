import visiumLogo from "../../../assets/companies/visium.png";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

export default function Visium() {
	return (
		<EmploymentHistoryItem
			title="Senior AI Engineer, Visium SA, Lausanne, Switzerland"
			date="October 2019 – October 2024 | 5 years"
			image={
				<img
					src={visiumLogo}
					alt="Visium logo"
					className="w-12 h-12 object-contain rounded-lg bg-white"
				/>
			}
		>
			<div className="flex flex-col gap-2">
				<div>
					<p>
						<strong>AI Engineering Lead -</strong> Managed teams delivering 15+
						AI initiatives across chemical, medtech, banking, and manufacturing
						sectors, overseeing full project lifecycles from specification to
						deployment and ensuring successful client outcomes.
					</p>
					<p className="text-sm text-gray-600">
						Python, Pytorch, GCP, Azure, Azure DevOps, LangGraph, LLMs,
						OpenShift, MLFlow, DVC, React, Agile
					</p>
				</div>
				<div>
					<p>
						<strong>Product Lead -</strong> 1) AI Recommender SaaS enabling on
						demand training and serving for manufacturing wholesalers. 2)
						Visium's ML Platform to accelerate project execution with MLOps
						workflows.
					</p>
					<p className="text-sm text-gray-600">
						Python, Pytorch, MLOps, MLFlow, GCP, GKE, NestJS, Azure DevOps,
						Agile Development, Recommender Systems
					</p>
				</div>
				<div>
					<p>
						<strong>Data Engineering -</strong> Powered Visium's decision-making
						with a Data Warehouse and a BI platform centralizing the company's
						data and enabling analytics as a service.
					</p>
					<p className="text-sm text-gray-600">
						dbt, SQL, Google BigQuery, GCP, Fivetran, Python, Looker
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
						<strong>Business Development -</strong> As one of the first
						engineers, I actively helped Visium grow from a start-up to a 60+
						employees company by supporting sales and establishing scalable
						engineering processes.
					</p>
					<p className="text-sm text-gray-600">Sales, Strategic Thinking</p>
				</div>
			</div>
		</EmploymentHistoryItem>
	);
}
