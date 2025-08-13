import React, { useState, useEffect } from "react";

const MoneyFlowManagement = ({ setCurrentPage, availableCourses }) => {
  const [enrollments, setEnrollments] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const storedEnrollments =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrollments(storedEnrollments);

    const revenue = storedEnrollments.reduce((sum, enrollment) => {
      const coursePrice =
        availableCourses.find((c) => c.courseName === enrollment.courseName)
          ?.priceText || "0 BDT";
      const priceValue = parseInt(coursePrice.replace(" BDT", "")) || 0;
      return sum + priceValue;
    }, 0);
    setTotalRevenue(revenue);
  }, [availableCourses]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-red-200">
        <div className="mb-8 p-4 bg-red-50 rounded-lg shadow-sm">
          <p className="text-lg font-semibold text-red-700">Total Revenue</p>
          <p className="text-3xl font-bold text-red-800">{totalRevenue} BDT</p>
        </div>
        {enrollments.length === 0 ? (
          <p className="text-lg text-gray-700">No transactions recorded yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-red-100 border-b border-red-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                    Student Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                    Amount (BDT)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                    Transaction ID
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {enrollments.map((enrollment, index) => {
                  const coursePrice =
                    availableCourses.find(
                      (c) => c.courseName === enrollment.courseName
                    )?.priceText || "0 BDT";
                  const priceValue = parseInt(coursePrice.replace(" BDT", ""));
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {enrollment.courseName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {enrollment.studentEmail}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        {priceValue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {enrollment.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {enrollment.transactionId}
                      </td>
                    </tr>
                  );
                })}
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

export default MoneyFlowManagement;
