import React, { useState, useEffect } from "react";

const SolvedQuestionsDashboard = ({ setCurrentPage, loggedInUser }) => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [viewingSolution, setViewingSolution] = useState(null);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const filteredSolvedQuestions = storedQuestions.filter(
      (q) =>
        (q.status === "solved" || q.status === "follow-up-solved") &&
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
            No questions solved by you yet.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {solvedQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-green-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                  <p className="text-gray-700 text-base">
                    {question.description}
                  </p>
                </div>
                <button
                  onClick={() => handleViewSolutionClick(question)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md flex-shrink-0"
                >
                  View Solution
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {viewingSolution && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">
              Question Solution
            </h3>
            <div className="mb-6 p-4 bg-purple-100 rounded-md border border-purple-200">
              <p className="text-purple-800 font-semibold mb-1">Solution:</p>
              <p className="text-purple-700 text-base whitespace-pre-wrap">
                {viewingSolution.solution}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleCloseSolutionView}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline"
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
