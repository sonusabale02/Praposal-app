function OurStory() {
  const moments = [
    {
      title: "पहिली ओळख",
      text: "कदाचित सुरुवात साधी होती... पण ती माझ्यासाठी खास होती."
    },
    {
      title: "पहिली Conversation",
      text: "थोड्या थोड्या conversations मधून एक वेगळं connection तयार होत गेलं."
    },
    {
      title: "हळूहळू...",
      text: "कधी तू माझ्यासाठी इतकी special झालीस, कळलंच नाही."
    },
    {
      title: "आज",
      text: "आजही तुझ्याशी बोलताना एक वेगळाच smile येतो."
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-32 pb-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          आपली गोष्ट 🌸
        </h1>

        <p className="text-center text-gray-400 mt-4">
          काही stories plan केलेल्या नसतात...
        </p>

        <div className="mt-16 space-y-8">

          {moments.map((moment, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <span className="text-red-400">
                0{index + 1}
              </span>

              <h2 className="text-2xl font-semibold mt-2">
                {moment.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {moment.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default OurStory;