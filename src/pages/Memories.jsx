import redwhite from "../assets/redwhite.jpeg";
import Flower from "../assets/flower.jpeg";
import Moon from "../assets/moon.jpeg";
function Memories() {

  const memories = [
    {
      title: "That Thing We Share",
      image: redwhite
    },
    {
      title: "A Special Moment",
      image: Moon
    },
    {
      title: "Just You",
      image: Flower
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-32 pb-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          काही खास क्षण 📸
        </h1>

        <p className="text-center text-gray-400 mt-4">
          काही moments जपून ठेवावेसे वाटतात.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {memories.map((memory, index) => (

            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
            >

              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {memory.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  A little memory to remember ❤️
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Memories;