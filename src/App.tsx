import CurriculumVitae from "./components/CurriculumVitae";

function App() {
  return (
    <div
      className="flex flex-row h-screen w-full overflow-x-auto items-start justify-center
      bg-gradient-to-r from-blue-100 to-blue-50
      print:bg-none print:bg-white
      printable-content"
    >
      <CurriculumVitae />
    </div>
  );
}

export default App;
