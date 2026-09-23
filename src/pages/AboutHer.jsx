function AboutHer() {

  const qualities = [
    "तुझा स्वभाव",
    "तुझी Smile",
    "तुझी Simplicity",
    "तुझं Caring Nature",
    "तुझी विचार करण्याची पद्धत",
    "तुझं वेगळेपण"
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-32 pb-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          तुझ्यातलं मला आवडणारं... 🤍
        </h1>

        <p className="text-center text-gray-400 mt-4">
          सांगायला खूप काही आहे...
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:-translate-y-2 transition duration-300"
            >

              <div className="text-4xl mb-5">
                🤍
              </div>

              <h2 className="text-xl font-semibold">
                {quality}
              </h2>

              <p className="text-gray-500 mt-3 group-hover:text-gray-300">
                कारण हेच तुला इतरांपेक्षा वेगळं बनवतं.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutHer;