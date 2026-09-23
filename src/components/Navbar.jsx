import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-xl font-semibold text-white"
        >
          Devika ❤️💐
        </Link>

        <div className="flex gap-6 text-sm text-gray-300">

          <Link to="/" className="hover:text-red-400">
            Home
          </Link>

          <Link to="/story" className="hover:text-red-400">
            Our Story
          </Link>

          <Link to="/about-her" className="hover:text-red-400">
            You
          </Link>

          <Link to="/distance" className="hover:text-red-400">
            Distance
          </Link>

          <Link to="/memories" className="hover:text-red-400">
            Memories
          </Link>

          <Link to="/letter" className="hover:text-red-400">
            Letter
          </Link>

          <Link to="/devika" className="hover:text-red-400">
            Devika❤️
          </Link>

          <Link to="/proposal" className="hover:text-red-400">
            Praposal❤️
          </Link>
          

        </div>
      </div>
    </nav>
  );
}

export default Navbar;