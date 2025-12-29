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
					AI Engineer with 7+ years of experience delivering production-grade AI
					systems end-to-end, from specification and model development to
					deployment and monitoring. My strong cross-functional expertise in
					data engineering, cloud platforms, MLOps, and frontend engineering
					enables me to build scalable, real-world AI solutions.
				</Typography>
				<Typography>Looking forward to connecting!</Typography>
			</Box>
		</Box>
	);
}
