import React, { useState } from "react";

const TeacherRegistrationForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    institute: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.institute.trim())
      newErrors.institute = "Institute is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      const existingTeachers =
        JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
      const emailExists = existingTeachers.some(
        (teacher) => teacher.email === formData.email
      );

      if (emailExists) {
        setErrors({ email: "This email is already registered." });
        setIsSubmitted(false);
        return;
      }

      setErrors({});
      setIsSubmitted(true);

      const newTeacher = {
        institute: formData.institute,
        email: formData.email,
        password: formData.password,
        isActive: true,
      };

      localStorage.setItem(
        "doubtDeskTeachers",
        JSON.stringify([...existingTeachers, newTeacher])
      );
      setCurrentPage("teacher-login");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Teacher Registration
        </h2>
        {/* {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your registration has been submitted. Redirecting to login...
            </span>
          </div>
        )} */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="institute"
              placeholder="Enter your institute's name"
              value={formData.institute}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.institute ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.institute && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.institute}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
