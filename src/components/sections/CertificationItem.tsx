import { Box, Typography } from "@mui/material";

export default function CertificationItem({
	title,
	date,
	company,
	image,
}: {
	title: string;
	date: string;
	company: string;
	image?: string;
}) {
	return (
		<Box
			sx={{
				backgroundColor: "#f2f2f2",
				padding: 1,
				borderRadius: 2,
				display: "flex",
				alignItems: "center",
				gap: 2,
			}}
		>
			{image && (
				<Box
					component="img"
					src={image}
					alt={`${title} logo`}
					sx={{ width: 40, height: 40 }}
				/>
			)}
			<Box>
				<Typography
					variant="body1"
					sx={{
						fontSize: "1rem",
						fontWeight: "bold",
					}}
				>
					{title}
				</Typography>
				<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
					<Typography
						variant="body2"
						sx={{
							color: "#666",
							fontSize: "0.9rem",
							fontWeight: "medium",
						}}
					>
						{company}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: "#888",
							fontSize: "0.9rem",
						}}
					>
						• {date}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
