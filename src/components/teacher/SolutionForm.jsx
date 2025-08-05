import React, { useState } from "react";

const SolutionForm = ({
  question,
  onSolve,
  onCancel,
  loggedInUser,
  addNotification,
}) => {
  const [solutionText, setSolutionText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!solutionText.trim()) {
      setError("Please write a solution.");
      return;
    }

    setError("");
    onSolve(question.id, solutionText, {}, loggedInUser.email);

    const notificationMessage =
      question.status === "follow-up-pending"
        ? `Your follow-up question has been solved: "${question.description.substring(
            0,
            30
          )}..."`
        : `Your question "${question.description.substring(
            0,
            30
          )}..." has been solved!`;

    addNotification(
      question.studentEmail,
      question.originalQuestionId || question.id,
      notificationMessage
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-green-200">
        <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Solve Question
        </h3>
        <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-gray-700 text-base">
            Question: {question.description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={solutionText}
              onChange={(e) => {
                setSolutionText(e.target.value);
                setError("");
              }}
              rows="8"
              placeholder="Write your detailed solution here..."
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {error && (
              <p className="text-red-500 text-xs italic mt-1">{error}</p>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg"
            >
              Submit Solution
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-5 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SolutionForm;
