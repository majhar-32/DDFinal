import React, { useState, useRef, useEffect } from "react";

// কোর্স অনুযায়ী বিষয়গুলোর ডেটা
const courseSubjectsData = {
  "Engineering + Biology Admission Program 2025": [
    "Physics 1st Paper",
    "Physics 2nd Paper",
    "Chemistry 1st Paper",
    "Chemistry 2nd Paper",
    "Mathematics 1st Paper",
    "Mathematics 2nd Paper",
    "Biology 1st Paper",
    "Biology 2nd Paper",
  ],
  "SSC Full Course (Science Group)": [
    "Physics",
    "Chemistry",
    "Biology",
    "Higher Mathematics",
    "General Mathematics",
    "ICT",
  ],
  "HSC 1st Year (Prime Batch)": [
    "Physics 1st Paper",
    "Chemistry 1st Paper",
    "Biology 1st Paper",
    "Mathematics 1st Paper",
    "ICT",
  ],
};

const AskDoubtForm = ({
  setCurrentPage,
  loggedInUser,
  isFollowUp = false,
  originalQuestion = null,
  addNotification,
  onSuccess,
  preselectedCourseName = null,
  preselectedSubjectName = null,
}) => {
  const [doubtDescription, setDoubtDescription] = useState("");
  const [localSelectedCourse, setLocalSelectedCourse] = useState(
    preselectedCourseName || ""
  );
  const [localSelectedSubject, setLocalSelectedSubject] = useState(
    preselectedSubjectName || ""
  );
  const [subjectsForCourse, setSubjectsForCourse] = useState([]);
  const [error, setError] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {
    if (localSelectedCourse) {
      setSubjectsForCourse(courseSubjectsData[localSelectedCourse] || []);
    } else {
      setSubjectsForCourse([]);
    }
  }, [localSelectedCourse]);

  const handlePostDoubt = (e) => {
    e.preventDefault();
    // ... (এই ফাংশনের বাকি কোড অপরিবর্তিত থাকবে) ...
    if (!doubtDescription.trim()) {
      setError("Please write your doubt description.");
      return;
    }
    if (!localSelectedCourse) {
      setError("Please select a course.");
      return;
    }
    if (!localSelectedSubject) {
      setError("Please select a subject.");
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

    if (isFollowUp) {
      if (originalQuestion.solvedByTeacher) {
        addNotification(
          originalQuestion.solvedByTeacher,
          newQuestion.id,
          `A student asked a follow-up question.`
        );
      }
      if (onSuccess) onSuccess();
    } else {
      setIsPosted(true);
      setTimeout(() => {
        setCurrentPage("student-dashboard");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">
          {isFollowUp ? "Ask a Follow-up" : "Ask a Doubt"}
        </h2>
        {isPosted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
            <strong className="font-bold">Success!</strong> Your doubt has been
            posted.
          </div>
        )}
        <form onSubmit={handlePostDoubt} className="space-y-6 text-left">
          {/* -- পরিবর্তন: কোর্স এবং বিষয় সিলেকশন এখন আর isFollowUp এর উপর নির্ভরশীল নয় -- */}
          {!isFollowUp && (
            <div>
              <label
                htmlFor="selectCourse"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Course:
              </label>
              <select
                id="selectCourse"
                value={localSelectedCourse}
                onChange={(e) => setLocalSelectedCourse(e.target.value)}
                disabled={!!preselectedCourseName}
                className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700"
              >
                <option value="">-- Select a Course --</option>
                {(JSON.parse(localStorage.getItem("enrolledCourses")) || [])
                  .filter((e) => e.studentEmail === loggedInUser.email)
                  .map((enrollment, index) => (
                    <option key={index} value={enrollment.courseName}>
                      {enrollment.courseName}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {localSelectedCourse && !isFollowUp && (
            <div>
              <label
                htmlFor="selectSubject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Subject:
              </label>
              <select
                id="selectSubject"
                value={localSelectedSubject}
                onChange={(e) => setLocalSelectedSubject(e.target.value)}
                disabled={!!preselectedSubjectName}
                className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700"
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
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {/* -- পরিবর্তন: লেবেলটি এখন ডাইনামিক -- */}
              {isFollowUp ? "Your Follow-up Question:" : "Your Doubt:"}
            </label>
            <textarea
              id="doubtDescription"
              value={doubtDescription}
              onChange={(e) => setDoubtDescription(e.target.value)}
              rows="6"
              placeholder={
                isFollowUp
                  ? "Describe your follow-up question..."
                  : "Describe your question in detail..."
              }
              className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700"
            ></textarea>
            {error && (
              <p className="text-red-500 text-xs italic mt-1">{error}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskDoubtForm;
