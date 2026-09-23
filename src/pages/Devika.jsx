import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import devikaImage from "../assets/DevikaImage.jpeg";

function Devika() {
  return (
    <section className="min-h-screen text-white relative overflow-hidden px-6 py-20 md:py-28">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={devikaImage}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-20"
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hearts */}
          <div className="flex justify-center gap-4 text-4xl mb-6">
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.span>

            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🤍
            </motion.span>
          </div>

          <p className="text-gray-400 tracking-[0.3em] text-sm">
            SOMEONE SPECIAL
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold mt-4"
            style={{
              background:
                "linear-gradient(90deg, #ffffff, #f87171, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Devika
          </h1>

          <motion.div
            className="mx-auto mt-5 h-px bg-red-400"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          />
        </motion.div>

        {/* TWO SECTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT - PHOTO */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="relative w-full max-w-md rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 0 60px rgba(255,0,60,0.12)",
              }}
            >
              <img
                src={devikaImage}
                alt="Devika"
                className="w-full h-[520px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white text-2xl font-medium">
                  Devika ❤️
                </p>

                <p className="text-gray-300 text-sm mt-2">
                  Someone truly special...
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - MESSAGE CARD */}
          <motion.div
            className="p-8 md:p-10 rounded-3xl"
            style={{
              background: "rgba(0,0,0,0.58)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 50px rgba(255,0,60,0.10)",
            }}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <p className="text-gray-200 text-lg md:text-xl leading-8">
              देविका...
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-8 mt-6">
              काही माणसं आयुष्यात येतात आणि नकळत
              आपल्या मनात त्यांच्यासाठी एक वेगळीच जागा तयार होते.
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-8 mt-6">
              तुझ्यासोबतही काहीतरी असंच झालं...
              कधी हे जाणवलं कळलंच नाही. ❤️
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-8 mt-6">
              तुझा स्वभाव, तुझं बोलणं,
              आणि तू ज्या पद्धतीने स्वतःला व्यक्त करतेस...
              या सगळ्या गोष्टी मला मनापासून आवडतात.
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-8 mt-6">
              म्हणूनच या छोट्याशा website मध्ये
              तुझ्यासाठी काही मनापासून लिहायचं होतं.
            </p>

            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm">
                For someone who became special...
              </p>

              <p className="text-red-400 text-xl mt-3 font-medium">
                Devika ❤️
              </p>
            </div>
          </motion.div>

        </div>

        {/* NEXT BUTTON */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <Link
            to="/proposal"
            className="inline-block px-8 py-3 rounded-full border border-red-400/40 text-red-300 hover:bg-red-500/10 hover:border-red-400/70 transition"
          >
            पुढे जाऊया... →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Devika;