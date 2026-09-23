import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        <div className="text-7xl mb-8 animate-pulse">
          ❤️
        </div>

        <p className="text-gray-400 mb-4">
          एक छोटीशी गोष्ट...
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          काही व्यक्ती आयुष्यात अचानक येतात...
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          आणि नकळत आपल्या आयुष्यात खूप खास होऊन जातात.
        </p>

        <Link
          to="/story"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          Start Our Story →
        </Link>

      </div>

    </section>
  );
}

export default Home;