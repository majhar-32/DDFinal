import React from "react";

const CourseDetailsPage = ({ courseName, setCurrentPage }) => {
  const handleAskDoubtClick = () => {
    setCurrentPage("ask-doubt-for-course");
  };

  const handleViewQuestionsClick = () => {
    setCurrentPage("question-history-for-course");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          {courseName} Details
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleAskDoubtClick}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Ask a Doubt for this Course
          </button>
          <button
            onClick={handleViewQuestionsClick}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View Questions for this Course
          </button>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
