import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">

        {/* Hearts */}
        <motion.div
          className="flex justify-center gap-5 text-6xl mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>

        {/* Small Text */}
        <motion.p
          className="text-gray-500 tracking-[0.3em] text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A LITTLE SOMETHING FOR YOU
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          style={{
            background:
              "linear-gradient(90deg, #ffffff, #f87171, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome ❤️
        </motion.h1>

        {/* Message */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mt-6 leading-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          ही website थोडी खास आहे...
          <br />
          कारण ही फक्त website नाही,
          <br />
          तर काही मनापासून लिहिलेल्या भावना आहेत. 🤍
        </motion.p>

        {/* Line */}
        <motion.div
          className="mx-auto mt-8 h-px bg-red-400/50"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* Enter Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Link
            to="/home"
            className="inline-block px-10 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition duration-300 shadow-lg shadow-red-500/20"
          >
            Enter ❤️
          </Link>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-gray-600 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          Take a little time... and read it slowly.
        </motion.p>

      </div>
    </section>
  );
}

export default Welcome;