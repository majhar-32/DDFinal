import React, { useState, useEffect } from "react";

const TeachersManagement = ({ setCurrentPage }) => {
  const [teachers, setTeachers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedTeachers =
      JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
    const teachersWithStatus = storedTeachers.map((teacher) => ({
      ...teacher,
      isActive: teacher.isActive !== undefined ? teacher.isActive : true,
    }));
    setTeachers(teachersWithStatus);

    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    setQuestions(storedQuestions);
  }, []);

  const getSolvedQuestionsCount = (teacherEmail) => {
    return questions.filter(
      (q) =>
        (q.status === "solved" || q.status === "follow-up-solved") &&
        q.solvedByTeacher === teacherEmail
    ).length;
  };

  const handleToggleTeacherStatus = (email) => {
    const updatedTeachers = teachers.map((teacher) =>
      teacher.email === email
        ? { ...teacher, isActive: !teacher.isActive }
        : teacher
    );
    localStorage.setItem("doubtDeskTeachers", JSON.stringify(updatedTeachers));
    setTeachers(updatedTeachers);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-green-200">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          Teachers ({teachers.length} Total)
        </h2>
        {teachers.length === 0 ? (
          <p className="text-lg text-gray-700">No teachers registered yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-green-100 border-b border-green-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                    Institute
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                    Questions Solved
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teachers.map((teacher, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {teacher.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {teacher.institute}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {getSolvedQuestionsCount(teacher.email)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          teacher.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {teacher.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleToggleTeacherStatus(teacher.email)}
                        className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-md ${
                          teacher.isActive
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                      >
                        {teacher.isActive ? "Remove" : "Retain"}
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersManagement;
