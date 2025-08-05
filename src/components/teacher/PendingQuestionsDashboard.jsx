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

  const sampleQuestions = [
    {
      id: 1,
      studentEmail: "student1@example.com",
      course: "Engineering + Biology Admission Program 2025",
      subject: "Physics 1st Paper",
      description: "What is the principle of superposition of waves?",
      timestamp: "2025-07-22, 10:00:00 AM",
      status: "pending",
      solution: "",
      solvedByTeacher: null,
      attachments: { image: null, voice: null, video: null, file: null },
    },
    {
      id: 2,
      studentEmail: "student2@example.com",
      course: "SSC Full Course (Science Group)",
      subject: "Chemistry",
      description: "Explain the process of electrolysis of water.",
      timestamp: "2025-07-22, 11:30:00 AM",
      status: "pending",
      solution: "",
      solvedByTeacher: null,
      attachments: {
        image: "diagram.png",
        voice: null,
        video: null,
        file: null,
      },
    },
  ];

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    if (storedQuestions.length === 0) {
      localStorage.setItem(
        "doubtDeskQuestions",
        JSON.stringify(sampleQuestions)
      );
      setAllQuestions(sampleQuestions);
    } else {
      setAllQuestions(storedQuestions);
    }
  }, []);

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

  const handleSolveClick = (question) => {
    setSolvingQuestion(question);
  };

  const handleSolutionSubmit = (
    questionId,
    solutionText,
    solutionAttachments,
    solvedByTeacherEmail
  ) => {
    const updatedQuestions = allQuestions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            status:
              q.status === "follow-up-pending" ? "follow-up-solved" : "solved",
            solution: solutionText,
            solutionAttachments: solutionAttachments,
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

  const pendingQuestions = allQuestions.filter(
    (q) =>
      q.status === "pending" ||
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
            No pending doubts at the moment.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {pendingQuestions.map((question) => (
              <div
                key={question.id}
                ref={(el) => (questionRefs.current[question.id] = el)}
                className={`bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 flex flex-col md:flex-row justify-between items-start md:items-center ${
                  highlightQuestionId === question.id
                    ? "ring-4 ring-orange-500 ring-opacity-75"
                    : ""
                }`}
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-blue-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                  <p className="text-gray-700 text-base">
                    {question.description}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Asked by: {question.studentEmail} on: {question.timestamp}
                  </p>
                </div>
                <button
                  onClick={() => handleSolveClick(question)}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md flex-shrink-0"
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
