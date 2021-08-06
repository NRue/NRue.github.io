import Typewriter from "typewriter-effect";

export default function Navbar() {
  const diamondIcon = "/icons/diamond.svg";

  return (
    <div className="flex h-16 bg-image bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <nav className="flex m-1 shadow-lg rounded-lg bg-gray-700">
        <div className="hidden md:flex p-1 mt-1 mx-1 ml-3">
          <img src="/icons/diamond.png" max-height="100%" max-width="100%" />
        </div>
        <div className="lg:px-4 mr-4 pt-0">
          <div className="flex justify-between">
            <div className="flex lg:space-x-6">
              <div>
                <a href="#" className="flex items-center py-4 px-4">
                  <span className="hidden lg:inline-block font-semibold text-gray-100 text-lg">
                    Dev Blog
                  </span>
                </a>
              </div>
              <div className="items-center flex space-x-1 lg:space-x-10">
                <a
                  href=""
                  className="py-4 px-2 text-green-300 border-b-4 border-green-500 font-semibold "
                >
                  Home
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-300 font-semibold hover:text-green-500 transition duration-300"
                >
                  Projects
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-300 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-300 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Typewriter
        options={{
          strings: ["React.js", "Node.js", "Software Design", "RESTful"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
