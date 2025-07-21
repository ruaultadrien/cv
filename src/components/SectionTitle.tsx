export default function SectionTitle({ title }: { title: string }) {
  return (
    <div
      className="bg-blue-950 rounded-xl shadow-lg
                 py-1 px-8 mb-4
                 print:shadow-none"
    >
      <h2 className="text-white text-xl font-bold">{title}</h2>
    </div>
  );
}
