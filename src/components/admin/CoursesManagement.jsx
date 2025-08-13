import React, { useState, useEffect } from "react";

const CoursesManagement = ({ setCurrentPage, courses, setCourses }) => {
  const [localCourses, setLocalCourses] = useState([]);

  useEffect(() => {
    setLocalCourses(courses);
  }, [courses]);

  const handleToggleCourseStatus = (courseName) => {
    const updatedCourses = localCourses.map((course) =>
      course.courseName === courseName
        ? { ...course, isActive: !course.isActive }
        : course
    );
    setCourses(updatedCourses);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          Courses ({localCourses.length} Total Courses)
        </h2>
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setCurrentPage("add-course-form")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Add New Course
          </button>
        </div>
        {localCourses.length === 0 ? (
          <p className="text-lg text-gray-700">No courses available yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-yellow-100 border-b border-yellow-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {localCourses.map((course, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {course.courseName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {course.priceText}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          course.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {course.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() =>
                          handleToggleCourseStatus(course.courseName)
                        }
                        className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-md ${
                          course.isActive
                            ? "bg-blue-400 hover:bg-blue-600 text-white"
                            : "bg-green-400 hover:bg-green-600 text-white"
                        }`}
                      >
                        {course.isActive ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("admin-dashboard")}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesManagement;
