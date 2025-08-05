import React, { useState, useEffect } from "react";

const EnrollmentForm = ({
  courseName,
  setCurrentPage,
  loggedInUser,
  availableCourses,
}) => {
  const [formData, setFormData] = useState({
    email: loggedInUser ? loggedInUser.email : "",
    paymentMethod: "",
    transactionId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  useEffect(() => {
    const existingEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const alreadyEnrolled = existingEnrolledCourses.some(
      (enrollment) =>
        enrollment.studentEmail === loggedInUser.email &&
        enrollment.courseName === courseName
    );
    setIsAlreadyEnrolled(alreadyEnrolled);
  }, [courseName, loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Payment method is required";
    if (!formData.transactionId.trim())
      newErrors.transactionId = "Transaction ID is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      if (isAlreadyEnrolled) {
        setErrors({ general: "You are already enrolled in this course." });
        setIsSubmitted(false);
        return;
      }

      setErrors({});
      setIsSubmitted(true);

      const existingEnrolledCourses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];
      const updatedEnrolledCourses = [
        ...existingEnrolledCourses,
        {
          studentEmail: loggedInUser.email,
          courseName: courseName,
          ...formData,
          date: new Date().toISOString().split("T")[0],
        },
      ];
      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(updatedEnrolledCourses)
      );

      setTimeout(() => {
        setCurrentPage("student-dashboard");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-indigo-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Enroll: {courseName}
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your purchase has been confirmed. Redirecting to dashboard...
            </span>
          </div>
        )}
        {isAlreadyEnrolled && (
          <div
            className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Already Enrolled!</strong>
            <span className="block sm:inline">
              You are already enrolled in this course.
            </span>
          </div>
        )}
        {errors.general && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{errors.general}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly={!!loggedInUser}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
                errors.paymentMethod ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a method</option>
              <option value="bkash">Bkash</option>
              <option value="nogod">Nagad</option>
              <option value="rocket">Rocket</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="transactionId"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Transaction ID:
            </label>
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
                errors.transactionId ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
              disabled={isAlreadyEnrolled}
            >
              Confirm Purchase
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage("home")}
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

export default EnrollmentForm;
