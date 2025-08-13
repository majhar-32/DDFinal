import React, { useState, useEffect } from "react";

const SolvedQuestionsDashboard = ({ setCurrentPage, loggedInUser }) => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [viewingSolution, setViewingSolution] = useState(null);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    // সমাধান করা সব ধরনের প্রশ্ন ফিল্টার করা হচ্ছে
    const filteredSolvedQuestions = storedQuestions.filter(
      (q) =>
        (q.status === "solved" ||
          q.status === "follow-up-solved" ||
          q.status === "satisfied") &&
        q.solvedByTeacher === loggedInUser.email
    );
    setSolvedQuestions(filteredSolvedQuestions);
  }, [loggedInUser]);

  const handleViewSolutionClick = (question) => {
    setViewingSolution(question);
  };

  const handleCloseSolutionView = () => {
    setViewingSolution(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Solved Questions
        </h2>

        {solvedQuestions.length === 0 ? (
          <p className="text-lg text-gray-700">
            You haven't solved any questions yet.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
            {solvedQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-green-800 font-semibold mb-1">
                    {question.description.substring(0, 50)}...
                    {/* ফলো-আপ প্রশ্ন হলে তা দেখানো হচ্ছে */}
                    {question.originalQuestionId && (
                      <span className="text-sm text-gray-500">
                        {" "}
                        (Follow-up)
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-gray-600">
                    Status:{" "}
                    <span className="font-medium">{question.status}</span>
                  </p>
                </div>
                <button
                  onClick={() => handleViewSolutionClick(question)}
                  className="bg-purple-400 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-medium"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Solution Details Modal */}
      {viewingSolution && (
        <div className="fixed inset-0 bg-green-100 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {viewingSolution.originalQuestionId
                ? "Follow-up Details"
                : "Question Details"}
            </h3>
            <div className="space-y-2">
              <p>
                <strong>Question:</strong> {viewingSolution.description}
              </p>
              <p>
                <strong>Solution:</strong> {viewingSolution.solution}
              </p>
              <p>
                <strong>Status:</strong> {viewingSolution.status}
              </p>
            </div>
            <div className="text-right mt-6">
              <button
                onClick={handleCloseSolutionView}
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolvedQuestionsDashboard;
