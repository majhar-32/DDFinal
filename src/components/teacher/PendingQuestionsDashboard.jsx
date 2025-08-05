import React, { useState, useEffect, useRef } from "react";
import SolutionForm from "./SolutionForm";

const PendingQuestionsDashboard = ({
  setCurrentPage,
  loggedInUser,
  addNotification,
  highlightQuestionId,
  setHighlightQuestionId,
}) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [solvingQuestion, setSolvingQuestion] = useState(null);
  const questionRefs = useRef({});

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    setAllQuestions(storedQuestions);
  }, [solvingQuestion]); // সমাধান করার পর UI রিফ্রেশ হবে

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
  }, [highlightQuestionId, allQuestions]);

  const handleSolveClick = (question) => {
    setSolvingQuestion(question);
  };

  const handleSolutionSubmit = (
    questionId,
    solutionText,
    solutionAttachments,
    solvedByTeacherEmail,
    newStatus
  ) => {
    const updatedQuestions = allQuestions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            status: newStatus,
            solution: solutionText,
            solutionAttachments,
            solvedByTeacher: solvedByTeacherEmail,
          }
        : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setAllQuestions(updatedQuestions);
    setSolvingQuestion(null);
  };

  const handleCancelSolve = () => {
    setSolvingQuestion(null);
  };

  // ধাপ ২ এর মূল পরিবর্তন: ফিল্টার লজিক আপডেট করা হয়েছে
  const pendingQuestions = allQuestions.filter(
    (q) =>
      // সব সাধারণ পেন্ডিং প্রশ্ন
      q.status === "pending" ||
      // শুধুমাত্র সেই ফলো-আপ প্রশ্ন যা এই শিক্ষকের কাছে পাঠানো হয়েছে
      (q.status === "follow-up-pending" &&
        q.solvedByTeacher === loggedInUser.email)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-6">
          Pending Questions
        </h2>

        {pendingQuestions.length === 0 ? (
          <p className="text-lg text-gray-700">
            No pending questions assigned to you.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
            {pendingQuestions.map((question) => (
              <div
                key={question.id}
                ref={(el) => (questionRefs.current[question.id] = el)}
                className={`bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200 flex flex-col md:flex-row justify-between items-start md:items-center ${
                  highlightQuestionId === question.id
                    ? "ring-4 ring-orange-500 ring-opacity-75"
                    : ""
                }`}
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-blue-800 font-semibold mb-1">
                    {question.course} | {question.subject}
                  </p>
                  <p className="text-gray-700 text-base">
                    {question.description}
                  </p>
                  {/* ফলো-আপ প্রশ্ন চেনার জন্য একটি ইন্ডিকেটর */}
                  {question.status === "follow-up-pending" && (
                    <p className="text-orange-600 text-sm font-semibold mt-1">
                      (Follow-up Question)
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleSolveClick(question)}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium"
                >
                  Solve
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {solvingQuestion && (
        <SolutionForm
          question={solvingQuestion}
          onSolve={handleSolutionSubmit}
          onCancel={handleCancelSolve}
          loggedInUser={loggedInUser}
          addNotification={addNotification}
        />
      )}
    </div>
  );
};

export default PendingQuestionsDashboard;
