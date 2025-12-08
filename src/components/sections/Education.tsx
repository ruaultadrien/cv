import { Box } from "@mui/material";
import epflLogo from "../../assets/universities/epfl.png";
import uomLogo from "../../assets/universities/uom.png";
import SectionTitle from "../SectionTitle";
import EmploymentHistoryItem from "./EmploymentHistory/EmploymentHistoryItem";

export default function Education() {
	return (
		<Box>
			<SectionTitle title="Education" />
			<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
				<EmploymentHistoryItem
					title="MSc in Computational Science and Engineering, EPFL, Lausanne, Switzerland"
					date="September 2015 – July 2019 | Grade: 5.44/6"
					image={
						<img
							src={epflLogo}
							alt="EPFL logo"
							className="object-contain rounded-lg bg-white"
						/>
					}
				/>
				<EmploymentHistoryItem
					title="Erasmus Exchange Year, The University of Manchester, Manchester, United Kingdom"
					date="September 2014 – July 2015"
					image={
						<img
							src={uomLogo}
							alt="Manchester logo"
							className="object-contain p-0.5"
						/>
					}
				/>
				<EmploymentHistoryItem
					title="BSc in Materials Science and Engineering, EPFL, Lausanne, Switzerland"
					date="September 2012 – July 2016 | Grade: 5.56/6"
					image={
						<img
							src={epflLogo}
							alt="EPFL logo"
							className="object-contain rounded-lg bg-white"
						/>
					}
				/>
			</Box>
		</Box>
	);
}
