import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Profile() {
	return (
		<Box>
			<SectionTitle title="Profile" />
			<Box
				sx={{ display: "flex", flexDirection: "column", gap: 1, ml: 1, mr: 1 }}
			>
				<Typography>
					I am a Senior AI Engineer with 7+ years of experience, passionate
					about building impactful AI-driven solutions. I have built a strong
					record in leading AI initiatives that drive impact. My versatile
					skillset spans from cutting-edge AI technologies, LLMs, agentic
					frameworks, MLOps, to full-stack engineering and cloud platforms.
				</Typography>
				<Typography>Looking forward to connecting!</Typography>
			</Box>
		</Box>
	);
}
