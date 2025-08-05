import React, { useState, useEffect } from "react";

const StudentsManagement = ({ setCurrentPage }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents =
      JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
    // নিশ্চিত করুন যে প্রতিটি ছাত্রের একটি স্ট্যাটাস আছে
    const studentsWithStatus = storedStudents.map((student) => ({
      ...student,
      isActive: student.isActive !== undefined ? student.isActive : true, // ডিফল্টভাবে সক্রিয়
    }));
    setStudents(studentsWithStatus);
  }, []);

  // ছাত্রের স্ট্যাটাস পরিবর্তন করার ফাংশন
  const handleToggleStatus = (email) => {
    const updatedStudents = students.map((student) =>
      student.email === email
        ? { ...student, isActive: !student.isActive }
        : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("doubtDeskStudents", JSON.stringify(updatedStudents));
  };

  // ছাত্রকে মুছে ফেলার ফাংশন
  const handleDeleteStudent = (email) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updatedStudents = students.filter(
        (student) => student.email !== email
      );
      setStudents(updatedStudents);
      localStorage.setItem(
        "doubtDeskStudents",
        JSON.stringify(updatedStudents)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          Students ({students.length} Total)
        </h2>
        {students.length === 0 ? (
          <p className="text-lg text-gray-700">No students registered yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-100 border-b border-blue-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    Grade/Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {student.gradeLevel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          student.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => handleToggleStatus(student.email)}
                        className={`px-3 py-1 rounded-md font-medium transition-colors duration-200 shadow-sm ${
                          student.isActive
                            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                            : "bg-green-500 hover:bg-green-600 text-white"
                        }`}
                      >
                        {student.isActive ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.email)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-medium transition-colors duration-200 shadow-sm"
                      >
                        Delete
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

export default StudentsManagement;
