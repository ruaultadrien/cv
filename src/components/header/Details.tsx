import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Divider, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ContactDetails from "./ContactDetails";

export default function Details() {
	return (
		<div className="flex flex-row gap-1 rounded-lg px-4 py-1 bg-gray-100 shadow-md">
			<ContactDetails />
			<Divider orientation="vertical" flexItem />
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<IconButton
					aria-label="LinkedIn profile"
					onClick={() =>
						window.open("https://www.linkedin.com/in/adrien-ruault", "_blank")
					}
				>
					<Link
						href="https://www.linkedin.com/in/adrien-ruault"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn profile"
						sx={{
							textDecoration: "none", // Prevent underline
							color: "inherit", // Inherit text color for the icon
						}}
					>
						<LinkedInIcon />
					</Link>
				</IconButton>
				<IconButton
					aria-label="LinkedIn profile"
					onClick={() =>
						window.open("https://github.com/ruaultadrien", "_blank")
					}
				>
					<Link
						href="https://github.com/ruaultadrien"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub profile"
						sx={{
							textDecoration: "none", // Prevent underline
							color: "inherit", // Inherit text color for the icon
						}}
					>
						<GitHubIcon />
					</Link>
				</IconButton>
			</Box>
		</div>
	);
}
