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

    // স্ট্যাটাস সঠিকভাবে নির্ধারণ করা হচ্ছে
    const newStatus =
      question.status === "follow-up-pending" ? "follow-up-solved" : "solved";

    // onSolve ফাংশনকে নতুন স্ট্যাটাস সহ কল করা হচ্ছে
    onSolve(question.id, solutionText, {}, loggedInUser.email, newStatus);

    // ছাত্রের জন্য নোটিফিকেশন তৈরি করা
    const notificationMessage =
      newStatus === "follow-up-solved"
        ? `Your follow-up question has been solved.`
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
          {question.status === "follow-up-pending"
            ? "Solve Follow-up Question"
            : "Solve Question"}
        </h3>
        <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-left">
          <p className="text-gray-700 text-base">
            <strong>Question:</strong> {question.description}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="solutionText"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Solution:
            </label>
            <textarea
              id="solutionText"
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
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg"
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
