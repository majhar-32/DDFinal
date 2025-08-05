import React, { useState, useEffect, useRef } from "react";

const QuestionHistoryPage = ({
  setCurrentPage,
  loggedInUser,
  highlightQuestionId,
  setHighlightQuestionId,
  addNotification,
  filterByCourseName = null,
}) => {
  const [questions, setQuestions] = useState([]);
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);
  const [selectedOriginalQuestion, setSelectedOriginalQuestion] =
    useState(null);
  const questionRefs = useRef({});

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    let studentQuestions = storedQuestions.filter(
      (q) => q.studentEmail === loggedInUser.email
    );

    if (filterByCourseName) {
      studentQuestions = studentQuestions.filter(
        (q) => q.course === filterByCourseName
      );
    }

    const rootQuestions = studentQuestions.filter((q) => !q.originalQuestionId);
    const followUpQuestions = studentQuestions.filter(
      (q) => q.originalQuestionId
    );

    const questionsWithFollowUps = rootQuestions.map((q) => ({
      ...q,
      followUps: followUpQuestions
        .filter((fu) => fu.originalQuestionId === q.id)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)),
    }));

    setQuestions(questionsWithFollowUps);
  }, [loggedInUser, showFollowUpForm, filterByCourseName]);

  useEffect(() => {
    if (highlightQuestionId && questionRefs.current[highlightQuestionId]) {
      questionRefs.current[highlightQuestionId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      const timer = setTimeout(() => {
        setHighlightQuestionId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightQuestionId]);

  const handleMarkSatisfied = (questionId) => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const updatedQuestions = storedQuestions.map((q) =>
      q.id === questionId ? { ...q, status: "satisfied" } : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, status: "satisfied" } : q))
    );
  };

  const handleAskFollowUp = (question) => {
    setSelectedOriginalQuestion(question);
    setShowFollowUpForm(true);
  };

  const handleCloseFollowUpForm = () => {
    setShowFollowUpForm(false);
    setSelectedOriginalQuestion(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-6 text-center">
          {filterByCourseName
            ? `${filterByCourseName} Questions`
            : "Your Question History"}
        </h2>
        {questions.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">
            {filterByCourseName
              ? `You haven't asked any questions for ${filterByCourseName} yet.`
              : "You haven't asked any questions yet."}
          </p>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                ref={(el) => (questionRefs.current[question.id] = el)}
                className={`bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100 text-left transition-all duration-500 ${
                  highlightQuestionId === question.id
                    ? "ring-4 ring-yellow-500 ring-opacity-75"
                    : ""
                }`}
              >
                {question.course && question.subject && (
                  <p className="text-gray-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                )}
                <p className="text-gray-800 font-semibold mb-2">Question:</p>
                <p className="text-gray-700 mb-2">{question.description}</p>

                {question.status === "solved" && question.solution && (
                  <div className="mt-3 p-3 bg-purple-100 rounded-md border border-purple-200">
                    <p className="text-purple-800 font-semibold mb-1">
                      Solution:
                    </p>
                    <p className="text-purple-700 text-sm">
                      {question.solution}
                    </p>

                    {question.solvedByTeacher && (
                      <p className="text-xs text-gray-500 mt-1">
                        Solved by: {question.solvedByTeacher}
                      </p>
                    )}
                    <div className="flex space-x-2 mt-3 justify-end">
                      {question.status !== "satisfied" && (
                        <button
                          onClick={() => handleMarkSatisfied(question.id)}
                          className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
                        >
                          Mark as Satisfied
                        </button>
                      )}
                      <button
                        onClick={() => handleAskFollowUp(question)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
                      >
                        Ask Follow-up
                      </button>
                    </div>
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Asked: {question.timestamp} | Status:{" "}
                  <span
                    className={`font-semibold ${
                      question.status === "pending"
                        ? "text-yellow-600"
                        : question.status === "solved"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {question.status.charAt(0).toUpperCase() +
                      question.status.slice(1)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionHistoryPage;
