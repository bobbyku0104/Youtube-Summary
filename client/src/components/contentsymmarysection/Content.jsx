import React from "react";

const Content = ({ activeTab }) => {
  return (
    <div className="px-3 sm:px-6 md:px-10 max-w-8xl mx-auto w-full">
      <div className="w-full mb-10 containerBG text-white rounded-2xl shadow p-6 sm:p-8">

        {/* SUMMARY */}
        {activeTab === "summary" && (
          <>
           <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>

                <p className="text-gray-700 leading-relaxed">
                    This comprehensive video explores modern React development practices and patterns.
                    The presenter covers key concepts including:
                </p>

                <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-800">
                    <li>
                        <strong>Component Architecture</strong> – Best practices for structuring React
                        components with hooks and composition patterns
                    </li>

                    <li>
                        <strong>State Management</strong> – Comparison of useState, useReducer, and
                        Context API for managing application state
                    </li>

                    <li>
                        <strong>Performance Optimization</strong> – Memoization, code splitting,
                        and lazy loading techniques
                    </li>

                    <li>
                        <strong>Testing Strategies</strong> – Unit testing, integration testing,
                        and E2E best practices
                    </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Key Takeaways:</h3>

                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Use functional components with hooks for cleaner, reusable code</li>
                    <li>Implement error boundaries to handle component failures gracefully</li>
                    <li>Optimize performance by understanding React's rendering cycle</li>
                    <li>Write tests to ensure code quality and avoid regressions</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-6">
                    The video also discusses emerging patterns like Suspense and concurrent rendering
                    that are shaping the future of React development.
                </p>
          </>
        )}

        {/* TRANSCRIPT */}
        {activeTab === "transcript" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Transcript</h2>
            <p className="text-gray-700">
              Hello everyone, welcome to this React tutorial...
            </p>
          </>
        )}

        {/* KEY MOMENTS */}
        {activeTab === "moments" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Key Moments</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>0:45 – Introduction</li>
              <li>3:10 – useState vs useReducer</li>
              <li>6:30 – Performance tips</li>
            </ul>
          </>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button className="border px-5 py-2 rounded-2xl">💾 Save</button>
          <button className="border px-5 py-2 rounded-2xl">📥 PDF</button>
          <button className="border px-5 py-2 rounded-2xl">📋 Copy</button>
        </div>

      </div>
    </div>
  );
};

export default Content;

















