import { useState } from "react";

function Proposal() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleAnswer = async (value) => {
    setAnswer(value);
    setSending(true);

    const answerText = {
      yes: "❤️ हो",
      no: "💔 नाही",
      time: "🤍 मला थोडा वेळ हवा आहे",
    };

    const buttonText = {
      yes: "YES Button",
      no: "NO Button",
      time: "TAKE YOUR TIME Button",
    };

    // Exact date and time
    const clickedAt = new Date();

    const date = clickedAt.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const time = clickedAt.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_SECRET_KEY,

          subject: `Proposal Response: ${answerText[value]}`,

          from_name: "Proposal Website",

          message: `
Proposal Response ❤️

Answer:
${answerText[value]}

Button Clicked:
${buttonText[value]}

Her Message:
${message || "No message written"}

Date:
${date}

Exact Time:
${time}

Timestamp:
${clickedAt.toISOString()}
          `,
        }),
      });
    } catch (error) {
      console.log("Email error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="text-center max-w-3xl w-full">

        {!answer && (
          <>
            <div className="text-8xl animate-pulse mb-8">
              ❤️
            </div>

            <p className="text-gray-400">
              शेवटी एक प्रश्न...
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-5">
              मला तू आवडतेस...
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              खरंच, मनापासून.
            </p>

            <p className="text-lg text-gray-400 mt-8">
              तुला माझ्याबद्दल काय वाटतं?
            </p>

            

            {/* Message Box */}
            <div className="mt-10 max-w-xl mx-auto">

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="काही सांगायचं असेल तर इथे लिही... ❤️"
                rows="4"
                className="w-full bg-[#111] border border-white/10 rounded-2xl p-5 text-white placeholder-gray-600 outline-none focus:border-red-500/50 transition resize-none"
              />

              <p className="text-sm text-gray-600 mt-2">
                काहीही मनात असेल तर मोकळेपणाने सांग. तुझं उत्तर माझ्यासाठी महत्त्वाचं आहे..
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <button
                onClick={() => handleAnswer("yes")}
                disabled={sending}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full transition disabled:opacity-50"
              >
                ❤️ हो
              </button>

              <button
                onClick={() => handleAnswer("no")}
                disabled={sending}
                className="px-8 py-4 border border-red-500/30 hover:bg-red-500/10 rounded-full transition disabled:opacity-50"
              >
                💔 नाही
              </button>

              <button
                onClick={() => handleAnswer("time")}
                disabled={sending}
                className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full transition disabled:opacity-50"
              >
                🤍 मला थोडा वेळ हवा आहे
              </button>

            </div>

            {sending && (
              <p className="text-gray-500 mt-6">
                Sending...
              </p>
            )}
          </>
        )}

        {/* YES */}
        {answer === "yes" && (
          <div>
            <div className="text-8xl mb-8">
              ❤️
            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              Thank You ❤️
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              आजचा दिवस माझ्यासाठी कायम special राहील.
            </p>
          </div>
        )}

        {/* NO */}
        {answer === "no" && (
          <div>
            <div className="text-8xl mb-8">
              🤍
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              It's Okay 🤍
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              तुझा निर्णय मी मनापासून स्वीकारतो.
            </p>

            <p className="text-gray-400 mt-4">
              काहीही असो, तुझ्याबद्दलची माझी respect कायम राहील.
            </p>
          </div>
        )}

        {/* TIME */}
        {answer === "time" && (
          <div>
            <div className="text-8xl mb-8">
              🤍
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Take Your Time
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              कोणताही pressure नाही.
            </p>

            <p className="text-gray-400 mt-4">
              तुझं मनापासूनचं उत्तर माझ्यासाठी महत्त्वाचं आहे.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}

export default Proposal;