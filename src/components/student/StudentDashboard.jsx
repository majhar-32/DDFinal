import React, { useState, useEffect } from "react";

const StudentDashboard = ({
  setCurrentPage,
  setSelectedCourseForSubjects,
  loggedInUser,
  setIsCoursesOnlyView,
}) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const studentEnrolledCourses = storedEnrolledCourses
      .filter((enrollment) => enrollment.studentEmail === loggedInUser.email)
      .map((enrollment) => enrollment.courseName);
    setEnrolledCourses(studentEnrolledCourses);
  }, [loggedInUser]);

  const handleGoToCourse = (courseName) => {
    setSelectedCourseForSubjects(courseName);
    setCurrentPage("course-details");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-indigo-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md col-span-full md:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              Enrolled Courses
            </h3>
            {enrolledCourses.length === 0 ? (
              <>
                <p className="text-gray-600">
                  You haven't enrolled in any courses yet.
                </p>
                <button
                  onClick={() => {
                    setIsCoursesOnlyView(true);
                    setCurrentPage("home-and-scroll");
                  }}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Buy Courses
                </button>
              </>
            ) : (
              <div className="space-y-3">
                {enrolledCourses.map((courseName, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-indigo-100 p-3 rounded-md shadow-sm"
                  >
                    <span className="text-indigo-800 font-medium">
                      {courseName}
                    </span>
                    <button
                      onClick={() => handleGoToCourse(courseName)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md"
                    >
                      Go to Course
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setIsCoursesOnlyView(true);
                    setCurrentPage("home-and-scroll");
                  }}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Buy More Courses
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
