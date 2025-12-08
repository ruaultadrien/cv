import { Box, Chip } from "@mui/material";
import SectionTitle from "../SectionTitle";

interface Skill {
	id: string;
	name: string;
}

export default function Skills() {
	const skills: Skill[] = [
		{ id: "machine-learning", name: "Machine Learning" },
		{ id: "ai-engineering", name: "AI Engineering" },
		{ id: "python", name: "Python" },
		{ id: "pytorch", name: "Pytorch" },
		{ id: "fastapi", name: "FastAPI" },
		{ id: "mlops", name: "MLOps" },
		{ id: "mlflow", name: "MLFlow" },
		{ id: "agentic-ai", name: "Agentic AI" },
		{ id: "langgraph", name: "LangGraph" },
		{ id: "cloud-engineering", name: "Cloud Engineering" },
		{ id: "azure-devops", name: "Azure DevOps" },
		{ id: "openshift", name: "OpenShift" },
		{ id: "gke", name: "GKE" },
		{ id: "data-engineering", name: "Data Engineering" },
		{ id: "dbt", name: "dbt" },
		{ id: "sql", name: "SQL" },
		{ id: "google-bigquery", name: "Google BigQuery" },
		{ id: "fivetran", name: "Fivetran" },
		{ id: "looker", name: "Looker" },
		{ id: "react", name: "React" },
		{ id: "node", name: "Node" },
		{ id: "supabase", name: "Supabase" },
		{ id: "full-stack-engineering", name: "Full Stack Engineering" },
	];

	return (
		<Box>
			<SectionTitle title="Skills" />
			<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, ml: 1, mr: 1 }}>
				{skills.map((skill) => (
					<Chip key={`skill-${skill.id}`} label={skill.name} />
				))}
			</Box>
		</Box>
	);
}
