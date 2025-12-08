import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import azureLogo from "../../assets/certifications/azure.svg";
import mqLearning from "../../assets/certifications/mq_learning.jpeg";
import SectionTitle from "../SectionTitle";
import CertificationItem from "./CertificationItem";

export default function Certifications() {
	return (
		<Box>
			<SectionTitle title="Certifications" />
			<Grid container spacing={1} sx={{ ml: 1, mr: 1 }}>
				<Grid size={{ xs: 12, sm: 6 }}>
					<CertificationItem
						title="Azure Data Scientist Associate"
						company="Microsoft"
						date="August 2024"
						image={azureLogo}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<CertificationItem
						title="Foundational Strategic Thinking"
						company="MQ Learning"
						date="July 2023"
						image={mqLearning}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<CertificationItem
						title="Foundational Systemic People Management"
						company="MQ Learning"
						date="February 2023"
						image={mqLearning}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
