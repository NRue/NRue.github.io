export default function Tile({ title, desc }: { title: String; desc: String }) {
  return (
    <div className="block border-b-4 border-r-4 border-gray-300 rounded-3xl py-20 px-10 bg-gray-700 h-full w-full">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
