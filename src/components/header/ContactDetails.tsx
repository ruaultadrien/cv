import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Link, Typography } from "@mui/material";

export default function ContactDetails() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<HomeIcon sx={{ marginRight: 1 }} fontSize="inherit" />
				<Typography variant="body1">Lausanne, Switzerland</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<PhoneIcon sx={{ marginRight: 1 }} fontSize="inherit" />
				<Link href={`tel:+41774415342`} sx={{ color: "gray" }}>+41 77 441 53 42</Link>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<MailIcon sx={{ marginRight: 1 }} fontSize="inherit" />
				<Link href={`mailto:ruaultadrien@gmail.com`} sx={{ color: "gray" }}>
					ruaultadrien@gmail.com
				</Link>
			</Box>
		</Box>
	);
}
