import CurriculumVitae from "./components/CurriculumVitae";

function App() {
  return (
    <div
      className="flex flex-row h-screen w-full overflow-x-auto items-start justify-center print:h-auto print:overflow-x-visible print:zoom-65
    print:webkit-print-color-adjust-exact print:print-color-adjust-exact
    bg-linear-to-r from-blue-100 to-blue-50"
    >
      <CurriculumVitae />
    </div>
  );
}

export default App;
