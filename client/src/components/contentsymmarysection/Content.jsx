import React from "react";

const Content = ({ activeTab }) => {
  return (
    <div className="px-3 sm:px-6 md:px-10 max-w-8xl mx-auto w-full mt-6">
      <div className="w-full mb-2 containerBG text-white rounded-2xl shadow p-6 sm:p-8 h-[500px] md:h-[500px] overflow-y-auto hide-scrollbar border border-zinc-300/10">
        {/* SUMMARY */}

        {activeTab === "summary" && (
          <>
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Summary</h2>

            <p className="text-gray-200 leading-relaxed">
              This comprehensive video explores modern React development
              practices and patterns. The presenter covers key concepts
              including:
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-200">
              <li>
                <strong>Component Architecture</strong> – Best practices for
                structuring React components with hooks and composition patterns
              </li>

              <li>
                <strong>State Management</strong> – Comparison of useState,
                useReducer, and Context API for managing application state
              </li>

              <li>
                <strong>Performance Optimization</strong> – Memoization, code
                splitting, and lazy loading techniques
              </li>

              <li>
                <strong>Testing Strategies</strong> – Unit testing, integration
                testing, and E2E best practices
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
              Key Takeaways:
            </h3>

            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>
                Use functional components with hooks for cleaner, reusable code
              </li>
              <li>
                Implement error boundaries to handle component failures
                gracefully
              </li>
              <li>
                Optimize performance by understanding React's rendering cycle
              </li>
              <li>Write tests to ensure code quality and avoid regressions</li>
            </ul>

            <p className="text-gray-200 leading-relaxed mt-6">
              The video also discusses emerging patterns like Suspense and
              concurrent rendering that are shaping the future of React
              development.
            </p>
          </>
        )}

        {/* TRANSCRIPT */}
        {activeTab === "transcript" && (
          <>
            <h2 className="text-2xl sm:text-2xl font-bold mb-4 text-white">
              Transcript
            </h2>
            <p className="text-gray-200">
              Hello everyone, welcome to this React tutorial...
            </p>
          </>
        )}

        {/* KEY MOMENTS */}
        {activeTab === "moments" && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Key Moments</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>0:45 – Introduction</li>
              <li>3:10 – useState vs useReducer</li>
              <li>6:30 – Performance tips</li>
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
