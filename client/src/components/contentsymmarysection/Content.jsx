import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStates";

const Content = ({ activeTab }) => {
  const { summaryData } = useContext(GlobalContext);

  if (!summaryData) {
    return (
      <div className="px-3 sm:px-6 md:px-10 mt-6 text-gray-400">
        Loading content...
      </div>
    );
  }

  const { videoSummary, transcript } = summaryData;

  return (
    <div className="px-3 sm:px-6 md:px-10 max-w-8xl mx-auto w-full mt-6">
      <div className="w-full mb-2 containerBG text-white rounded-2xl shadow p-6 sm:p-8 h-[500px] md:h-[500px] overflow-y-auto hide-scrollbar border border-zinc-300/10 ">
        {/* SUMMARY */}

        {activeTab === "summary" && (
          <>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              {videoSummary.title}
            </h2>

            <p className="text-gray-200 leading-relaxed">
              {videoSummary.overall_summary}
            </p>

            <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
              Key Takeaways:
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              {videoSummary?.key_takeaways?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="mt-4 text-gray-300 mb-4">
              <strong className="text-xl font-semibold text-gray-200  mb-2 ">
                Conclusion:
              </strong>
              <p className="list-disc ml-3 space-y-2 text-gray-200">
                {videoSummary.conclusion}
              </p>
            </p>

            <strong className="text-xl font-semibold text-gray-200 mt-4 mb-2 ">
              key points:
            </strong>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              {videoSummary.key_points?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* TRANSCRIPT */}
        {activeTab === "transcript" && (
          <>
            <h2 className="text-2xl sm:text-2xl font-bold mb-4 text-white">
              Transcript
            </h2>
            <p className="text-gray-200">{transcript}</p>
          </>
        )}

        {/* KEY MOMENTS */}
        {activeTab === "moments" && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Key Moments</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              {videoSummary.key_points?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* ACTION BUTTONS */}
        <div className="py-2 sm:px-4 flex gap-3 mt-4 bottom-0 lg:flex-row border-t border-zinc-300/10 p-1 text-sm">
          {[
            { text: "📥 PDF", fn: "" },
            { text: "📋 Copy", fn: "" },
          ].map((item, index) => (
            <button
              key={index}
              className="border border-zinc-300/10 outline-none px-5 py-2 rounded-2xl  bg-purple-800"
            >
              {item?.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
