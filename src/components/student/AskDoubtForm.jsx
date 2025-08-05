import React, { useState, useRef, useEffect } from "react";

const AskDoubtForm = ({
  setCurrentPage,
  selectedCourse,
  selectedSubject,
  loggedInUser,
  isFollowUp = false,
  originalQuestion = null,
  addNotification,
  preselectedCourseName = null,
  preselectedSubjectName = null,
}) => {
  const [doubtDescription, setDoubtDescription] = useState("");
  const [localSelectedCourse, setLocalSelectedCourse] = useState(
    preselectedCourseName || selectedCourse || ""
  );
  const [localSelectedSubject, setLocalSelectedSubject] = useState(
    preselectedSubjectName || selectedSubject || ""
  );
  const [subjectsForCourse, setSubjectsForCourse] = useState([]);
  const [error, setError] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {
    if (localSelectedCourse) {
      // Dummy data for subjects based on course
      const courseSubjectsData = {
        "Engineering + Biology Admission Program 2025": [
          "Physics",
          "Chemistry",
          "Math",
          "Biology",
        ],
        "SSC Full Course (Science Group)": [
          "Physics",
          "Chemistry",
          "Higher Math",
        ],
        "HSC 1st Year (Prime Batch)": ["Physics", "Chemistry", "Math"],
      };
      setSubjectsForCourse(courseSubjectsData[localSelectedCourse] || []);
    } else {
      setSubjectsForCourse([]);
    }
  }, [localSelectedCourse]);

  const handleDescriptionChange = (e) => {
    setDoubtDescription(e.target.value);
    if (e.target.value.trim()) {
      setError("");
    }
  };

  const handlePostDoubt = (e) => {
    e.preventDefault();
    if (!doubtDescription.trim()) {
      setError("Please write your doubt description.");
      setIsPosted(false);
      return;
    }
    if (!localSelectedCourse) {
      setError("Please select a course.");
      setIsPosted(false);
      return;
    }
    if (!localSelectedSubject) {
      setError("Please select a subject.");
      setIsPosted(false);
      return;
    }

    const existingQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const newQuestion = {
      id: Date.now(),
      studentEmail: loggedInUser.email,
      course: localSelectedCourse,
      subject: localSelectedSubject,
      description: doubtDescription,
      timestamp: new Date().toLocaleString(),
      status: isFollowUp ? "follow-up-pending" : "pending",
      solution: "",
      solvedByTeacher: isFollowUp ? originalQuestion.solvedByTeacher : null,
      originalQuestionId: isFollowUp ? originalQuestion.id : null,
    };
    const updatedQuestions = [newQuestion, ...existingQuestions];

    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );

    setIsPosted(true);
    setError("");
    setDoubtDescription("");

    if (isFollowUp && originalQuestion.solvedByTeacher) {
      addNotification(
        originalQuestion.solvedByTeacher,
        newQuestion.id,
        `Student "${
          loggedInUser.email
        }" asked a follow-up question on your solved question: "${newQuestion.description.substring(
          0,
          30
        )}..."`
      );
    }

    setTimeout(() => {
      if (isFollowUp) {
        setCurrentPage("question-history");
      } else {
        setCurrentPage("student-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">
          {isFollowUp ? "Ask a Follow-up Question" : "Ask a Doubt"}
        </h2>
        {isFollowUp && originalQuestion && (
          <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-left">
            <p className="text-gray-800 font-semibold mb-1">
              Original Question:
            </p>
            <p className="text-gray-700 text-base">
              {originalQuestion.description}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Solved by: {originalQuestion.solvedByTeacher}
            </p>
          </div>
        )}

        <p className="text-lg text-gray-700 mb-8">
          Type your question below and our expert teachers will help you!
        </p>
        {isPosted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your doubt has been posted. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handlePostDoubt} className="space-y-6">
          <div>
            <label
              htmlFor="selectCourse"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Select Course:
            </label>
            <select
              id="selectCourse"
              value={localSelectedCourse}
              onChange={(e) => {
                setLocalSelectedCourse(e.target.value);
                setError("");
              }}
              disabled={!!preselectedCourseName}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !localSelectedCourse
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="">-- Select a Course --</option>
              {loggedInUser &&
                JSON.parse(localStorage.getItem("enrolledCourses"))
                  ?.filter(
                    (enrollment) =>
                      enrollment.studentEmail === loggedInUser.email
                  )
                  .map((enrollment, index) => (
                    <option key={index} value={enrollment.courseName}>
                      {enrollment.courseName}
                    </option>
                  ))}
            </select>
          </div>

          {localSelectedCourse && (
            <div>
              <label
                htmlFor="selectSubject"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Select Subject:
              </label>
              <select
                id="selectSubject"
                value={localSelectedSubject}
                onChange={(e) => {
                  setLocalSelectedSubject(e.target.value);
                  setError("");
                }}
                disabled={!!preselectedSubjectName}
                className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                  error && !localSelectedSubject
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">-- Select a Subject --</option>
                {subjectsForCourse.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label
              htmlFor="doubtDescription"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Your Doubt:
            </label>
            <textarea
              id="doubtDescription"
              name="doubtDescription"
              value={doubtDescription}
              onChange={handleDescriptionChange}
              rows="8"
              placeholder="Describe your question in detail..."
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 resize-y ${
                error && !doubtDescription.trim()
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            ></textarea>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              {isFollowUp ? "Post Follow-up Question" : "Post Question"}
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage("student-dashboard")}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskDoubtForm;
