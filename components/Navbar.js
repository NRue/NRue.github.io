export default function Navbar() {
  const diamondIcon = "/icons/diamond.svg";

  return (
    <div className="flex h-16 bg-image bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <nav className="flex shadow-lg rounded-lg bg-gray-700">
        <div className="hidden md:block mt-1 mx-1 ml-3">
          <img
            src="nrue.github.io/icons/diamond.svg"
            className="h-8 w-8 p-2 m-2"
            height={50}
            width={50}
          />
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
                  Services
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
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
