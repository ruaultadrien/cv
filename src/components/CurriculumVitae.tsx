import { EmploymentHistory } from "./sections/EmploymentHistory";
import Header from "./header/Header";
import Profile from "./sections/Profile";
import Education from "./sections/Education";
import Hobbies from "./sections/Hobbies";
import Languages from "./sections/Languages";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";

function CurriculumVitae() {
  return (
    <div
      className="shadow-lg max-w-3xl mx-auto p-2 sm:p-4 m-4 sm:m-8 bg-white rounded-3xl
      flex flex-col gap-8
      print:shadow-none print:rounded-none print:mt-0"
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
