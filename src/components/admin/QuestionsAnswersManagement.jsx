import React, { useState, useEffect } from "react";

const QuestionsAnswersManagement = ({ setCurrentPage }) => {
  const [questions, setQuestions] = useState([]);
  const [viewingQuestion, setViewingQuestion] = useState(null);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    setQuestions(storedQuestions);
  }, []);

  const handleDeleteQuestion = (questionId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this question permanently?"
      )
    ) {
      const updatedQuestions = questions.filter((q) => q.id !== questionId);
      setQuestions(updatedQuestions);
      localStorage.setItem(
        "doubtDeskQuestions",
        JSON.stringify(updatedQuestions)
      );
    }
  };

  // স্ট্যাটাস অনুযায়ী প্রশ্ন গণনা
  const pendingCount = questions.filter((q) => q.status === "pending").length;
  const solvedCount = questions.filter(
    (q) => q.status === "solved" || q.status === "satisfied"
  ).length;
  const followUpPendingCount = questions.filter(
    (q) => q.status === "follow-up-pending"
  ).length;
  const followUpSolvedCount = questions.filter(
    (q) => q.status === "follow-up-solved"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-5xl w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">
          Question & Answer Management ({questions.length} Total)
        </h2>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-yellow-700">Pending</p>
            <p className="text-2xl font-bold text-yellow-800">{pendingCount}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-green-700">Solved</p>
            <p className="text-2xl font-bold text-green-800">{solvedCount}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-orange-700">
              Follow-up Pending
            </p>
            <p className="text-2xl font-bold text-orange-800">
              {followUpPendingCount}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-blue-700">
              Follow-up Solved
            </p>
            <p className="text-2xl font-bold text-blue-800">
              {followUpSolvedCount}
            </p>
          </div>
        </div>

        {questions.length === 0 ? (
          <p className="text-lg text-gray-700">No questions asked yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-purple-100 border-b border-purple-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Question
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Solved By (Teacher)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {questions.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.description.substring(0, 30)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.studentEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.solvedByTeacher || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          ["solved", "satisfied", "follow-up-solved"].includes(
                            item.status
                          )
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => setViewingQuestion(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md font-medium"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("admin-dashboard")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {viewingQuestion && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Question Details
            </h3>
            <div className="text-left space-y-3">
              <p>
                <strong>Student:</strong> {viewingQuestion.studentEmail}
              </p>
              <div className="p-3 bg-gray-50 rounded-md border">
                <p className="font-semibold">Question:</p>
                <p>{viewingQuestion.description}</p>
              </div>

              {["solved", "satisfied", "follow-up-solved"].includes(
                viewingQuestion.status
              ) ? (
                <div className="p-3 bg-green-50 rounded-md border border-green-200">
                  <p className="font-semibold text-green-800">
                    Solution by {viewingQuestion.solvedByTeacher}:
                  </p>
                  <p className="whitespace-pre-wrap">
                    {viewingQuestion.solution}
                  </p>
                </div>
              ) : (
                <p className="text-yellow-600 font-semibold p-3 bg-yellow-50 rounded-md border">
                  This question has not been solved yet.
                </p>
              )}
            </div>
            <div className="text-right mt-6">
              <button
                onClick={() => setViewingQuestion(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
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

export default QuestionsAnswersManagement;
