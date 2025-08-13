import React, { useState, useEffect, useRef } from "react";
import AskDoubtForm from "./AskDoubtForm";

// FollowUpQuestionForm কম্পোনেন্টটি অপরিবর্তিত থাকবে
const FollowUpQuestionForm = ({
  originalQuestion,
  loggedInUser,
  onClose,
  addNotification,
  setCurrentPage,
  onSuccess,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <AskDoubtForm
          setCurrentPage={setCurrentPage}
          loggedInUser={loggedInUser}
          isFollowUp={true}
          originalQuestion={originalQuestion}
          addNotification={addNotification}
          onSuccess={onSuccess}
          preselectedCourseName={originalQuestion.course}
          preselectedSubjectName={originalQuestion.subject}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
          aria-label="Close"
        >
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const QuestionHistoryPage = ({
  setCurrentPage,
  loggedInUser,
  addNotification,
  // highlight props গুলো এখন আর প্রয়োজন নেই, তাই বাদ দেওয়া যেতে পারে
}) => {
  const [questions, setQuestions] = useState([]);
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);
  const [selectedOriginalQuestion, setSelectedOriginalQuestion] =
    useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];

    // ছাত্রের সব প্রশ্ন (মূল এবং ফলো-আপ) আনা হচ্ছে
    const studentQuestions = storedQuestions.filter(
      (q) => q.studentEmail === loggedInUser.email
    );

    // মূল প্রশ্নগুলো খুঁজে বের করা
    const rootQuestions = studentQuestions.filter((q) => !q.originalQuestionId);

    // প্রতিটি মূল প্রশ্নের সাথে তার ফলো-আপ প্রশ্ন যুক্ত করা
    const questionsWithFollowUps = rootQuestions.map((rootQuestion) => {
      const followUp = studentQuestions.find(
        (q) => q.originalQuestionId === rootQuestion.id
      );
      return { ...rootQuestion, followUp: followUp || null };
    });

    setQuestions(questionsWithFollowUps);
  }, [loggedInUser, showFollowUpForm]); // showFollowUpForm state পরিবর্তন হলে re-render হবে

  const handleMarkSatisfied = (questionId) => {
    const allQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const updatedQuestions = allQuestions.map((q) =>
      q.id === questionId ? { ...q, status: "satisfied" } : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, status: "satisfied" } : q
      )
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

  const handleFollowUpSuccess = () => {
    setShowFollowUpForm(false);
    setSubmissionSuccess(true);
    setSubmissionSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-3xl w-full border border-purple-200">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-6 text-center">
          Your Question History
        </h2>

        {submissionSuccess && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
            role="alert"
          >
            <p>Your follow-up question has been posted successfully!</p>
          </div>
        )}

        {questions.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">
            You haven't asked any questions yet.
          </p>
        ) : (
          <div className="space-y-6">
            {questions.map((question) => {
              const isSolved = question.status === "solved";
              const canTakeAction = isSolved && !question.followUp;

              return (
                <div
                  key={question.id}
                  className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100"
                >
                  {/* মূল প্রশ্ন */}
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 mb-2">
                      Question:
                    </p>
                    <p className="text-gray-700">{question.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Status:{" "}
                      <span className="font-semibold">{question.status}</span>
                    </p>
                  </div>

                  {/* মূল প্রশ্নের উত্তর */}
                  {question.solution && (
                    <div className="mt-3 p-3 bg-purple-100 rounded-md border border-purple-200 text-left">
                      <p className="font-semibold text-purple-800 mb-1">
                        Solution:
                      </p>
                      <p className="text-purple-700 text-sm">
                        {question.solution}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Solved by: {question.solvedByTeacher}
                      </p>

                      {/* অ্যাকশন বাটনগুলো শুধুমাত্র শর্তসাপেক্ষে দেখা যাবে */}
                      {canTakeAction && (
                        <div className="flex space-x-2 mt-3 justify-end">
                          <button
                            onClick={() => handleMarkSatisfied(question.id)}
                            className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md"
                          >
                            Mark as Satisfied
                          </button>
                          <button
                            onClick={() => handleAskFollowUp(question)}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md"
                          >
                            Ask Follow-up
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ফলো-আপ প্রশ্ন এবং তার উত্তর */}
                  {question.followUp && (
                    <div className="mt-4 border-t-2 border-dashed border-purple-200 pt-4 text-left">
                      <p className="font-semibold text-gray-800 mb-2">
                        Your Follow-up Question:
                      </p>
                      <p className="text-gray-700 bg-gray-100 p-2 rounded">
                        {question.followUp.description}
                      </p>

                      {question.followUp.solution && (
                        <div className="mt-3 p-3 bg-green-50 rounded-md border border-green-200">
                          <p className="font-semibold text-green-800 mb-1">
                            Follow-up Solution:
                          </p>
                          <p className="text-green-700 text-sm">
                            {question.followUp.solution}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Solved by: {question.followUp.solvedByTeacher}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {showFollowUpForm && (
        <FollowUpQuestionForm
          originalQuestion={selectedOriginalQuestion}
          loggedInUser={loggedInUser}
          onClose={handleCloseFollowUpForm}
          addNotification={addNotification}
          setCurrentPage={setCurrentPage}
          onSuccess={handleFollowUpSuccess}
        />
      )}
    </div>
  );
};

export default QuestionHistoryPage;
