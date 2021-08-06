export default function Tile({ title, desc }: { title: String; desc: String }) {
  return (
    <div
      className="block py-10 px-10 h-full w-full cursor-pointer 
                bg-gray-700 rounded-3xl border-b-2 border-r-2 border-gray-300
                hover:bg-gray-600
                  bg-fixed bg-cover"
      style={{ backgroundImage: `url(/images/img-mountain-sky.jpg)` }}
    >
      <h1 className="p-4 text-xl text-white">{title}</h1>
      <p className="m-4 text-white">{desc}</p>
    </div>
  );
}
