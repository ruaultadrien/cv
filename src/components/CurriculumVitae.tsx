import Header from "./header/Header";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import { EmploymentHistory } from "./sections/EmploymentHistory";
import Hobbies from "./sections/Hobbies";
import Languages from "./sections/Languages";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";

function CurriculumVitae() {
	return (
		<div
			className="shadow-lg max-w-3xl mx-auto bg-white rounded-3xl
                 px-2 py-4 sm:px-4 sm:py-8 m-4 sm:m-8 
                 flex flex-col gap-8
                 print:shadow-none print:rounded-none print:mt-0 print:max-w-4xl"
		>
			<Header />

			<Profile />

			<EmploymentHistory />

			<Education />

			<Certifications />

			<Skills />

			<Languages />

			<Hobbies />
		</div>
	);
}

export default CurriculumVitae;
