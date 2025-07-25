import React, { useState, useRef, useEffect } from "react";

// CourseCard Component
const CourseCard = ({
  topTitle,
  programTitle,
  courseName,
  features,
  priceText,
  enrollButtonText,
  onEnrollClick,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-gray-200 overflow-hidden">
      {/* Top Title Section */}
      <div className="w-full bg-indigo-700 text-white py-4 px-4 -mx-4 -mt-4 mb-4 rounded-t-xl">
        <h3 className="text-3xl font-extrabold mb-1 leading-tight">
          {topTitle}
        </h3>
        <p className="text-xl font-semibold text-yellow-400">{programTitle}</p>
      </div>

      {/* Course Name */}
      <h4 className="text-2xl font-bold text-gray-800 mb-4 px-2 leading-tight">
        {courseName}
      </h4>

      {/* Features List */}
      <ul className="list-disc list-inside p-0 mb-6 text-gray-700 flex-grow w-full px-4 text-left space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-indigo-600">•</span>
            <span className="flex-grow">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-auto px-2">
        {priceText && (
          <a
            href="#" // Price is usually not a clickable link, but keeping 'a' tag for consistency
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md"
          >
            {priceText}
          </a>
        )}
        {enrollButtonText && (
          <button
            onClick={() => onEnrollClick(courseName)} // Call onEnrollClick with courseName
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md"
          >
            {enrollButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        {/* Copyright Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} DoubtDesk. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            FAQ
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {/* Facebook Icon */}
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {/* YouTube Icon */}
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.116C19.762 3.5 12 3.5 12 3.5s-7.762 0-9.388.57A2.998 2.998 0 00.502 6.186C0 7.817 0 12 0 12s0 4.183.502 5.814a2.998 2.998 0 002.11 2.116C4.238 20.5 12 20.5 12 20.5s7.762 0 9.388-.57a2.998 2.998 0 002.11-2.116C24 16.183 24 12 24 12s0-4.183-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {/* LinkedIn Icon */}
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

// Teacher Registration Form Component
const TeacherRegistrationForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log("Teacher Registration Data:", formData);
      // Automatically navigate to home after successful submission
      setTimeout(() => {
        // Added a small delay for the user to see the success message
        setCurrentPage("home");
      }, 1500); // Redirect after 1.5 seconds
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-12 mb-16 border border-indigo-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Join as Teacher
      </h2>
      {isSubmitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your registration has been submitted. Redirecting to home...
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 resize-y ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

// Student Registration Form Component
const StudentRegistrationForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institute: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.institute.trim())
      newErrors.institute = "Institute is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log("Student Registration Data:", formData);
      // Automatically navigate to home after successful submission
      setTimeout(() => {
        setCurrentPage("home");
      }, 1500); // Redirect after 1.5 seconds
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-12 mb-16 border border-green-200">
      {" "}
      {/* Increased max-w, added shadow-xl and border for student form */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Join as Student
      </h2>
      {isSubmitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            Your registration has been submitted. Redirecting to home...
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {" "}
        {/* Increased space between form elements */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="institute"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Institute:
          </label>
          <input
            type="text"
            id="institute"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ${
              errors.institute ? "border-red-500" : ""
            }`}
          />
          {errors.institute && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.institute}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-y ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

// Login Form Component
const LoginForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "", // Added role to form data
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.role) newErrors.role = "Role is required"; // Validate role
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log("Login Data:", formData);
      // Redirect based on role
      if (formData.role === "student") {
        setTimeout(() => {
          setCurrentPage("student-dashboard");
        }, 1500);
      } else if (formData.role === "teacher") {
        setTimeout(() => {
          setCurrentPage("teacher-dashboard-pending"); // Redirect to teacher dashboard pending questions
        }, 1500);
      } else if (formData.role === "admin") {
        // New admin role
        setTimeout(() => {
          setCurrentPage("admin-dashboard"); // Redirect to admin dashboard
        }, 1500);
      } else {
        // Fallback for invalid role or other cases
        setTimeout(() => {
          setCurrentPage("home");
        }, 1500);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl mt-12 mb-16 border border-blue-200">
      {" "}
      {/* Adjusted max-w, added shadow-xl and border for login form */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Login
      </h2>
      {isSubmitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {" "}
            You have successfully logged in. Redirecting...
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {" "}
        {/* Increased space between form elements */}
        <div>
          <label
            htmlFor="loginEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="loginEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="loginPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.password}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
              errors.role ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select your role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option> {/* New Admin Option */}
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs italic mt-1">{errors.role}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

// Students Management Component
const StudentsManagement = ({ setCurrentPage }) => {
  const students = [
    {
      id: 1,
      name: "Ahmed",
      email: "ahmed@example.com",
      course: "SSC Full Course",
      status: "Active",
    },
    {
      id: 2,
      name: "Fatema",
      email: "fatema@example.com",
      course: "HSC 1st Year",
      status: "Active",
    },
    {
      id: 3,
      name: "Kamal",
      email: "kamal@example.com",
      course: "Engineering + Biology",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Nabila",
      email: "nabil@example.com",
      course: "SSC Full Course",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          Student Management
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-100 border-b border-blue-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {student.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

// Teachers Management Component
const TeachersManagement = ({ setCurrentPage }) => {
  const teachers = [
    {
      id: 1,
      name: "Mr. Rahman",
      email: "rahman@example.com",
      subject: "Physics",
      status: "Active",
    },
    {
      id: 2,
      name: "Mrs. Akter",
      email: "akter@example.com",
      subject: "Chemistry",
      status: "Active",
    },
    {
      id: 3,
      name: "Mr. Khan",
      email: "khan@example.com",
      subject: "Mathematics",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Mrs. Begum",
      email: "begum@example.com",
      subject: "Biology",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-green-200">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          Teacher Management
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-green-100 border-b border-green-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {teacher.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {teacher.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        teacher.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {teacher.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

// Courses Management Component
const CoursesManagement = ({ setCurrentPage }) => {
  const courses = [
    {
      id: 1,
      name: "Engineering + Biology Admission Program 2025",
      students: 150,
      teachers: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "SSC Full Course (Science Group)",
      students: 200,
      teachers: 7,
      status: "Active",
    },
    {
      id: 3,
      name: "HSC 1st Year (Prime Batch)",
      students: 120,
      teachers: 4,
      status: "Active",
    },
    {
      id: 4,
      name: "Junior Programming Basics",
      students: 80,
      teachers: 2,
      status: "Upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          Course Management
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-yellow-100 border-b border-yellow-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                  Teachers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-yellow-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {course.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {course.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {course.students}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {course.teachers}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        course.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

// Questions & Answers Management Component
const QuestionsAnswersManagement = ({ setCurrentPage }) => {
  const qa = [
    {
      id: 1,
      question: "What is the principle of superposition of waves?",
      student: "Ahmed",
      teacher: "Mr. Rahman",
      status: "Solved",
    },
    {
      id: 2,
      question: "Explain the process of electrolysis of water.",
      student: "Fatema",
      teacher: "Mrs. Akter",
      status: "Pending",
    },
    {
      id: 3,
      question: "Describe the structure and function of mitochondria.",
      student: "Kamal",
      teacher: "Mr. Khan",
      status: "Solved",
    },
    {
      id: 4,
      question: "What is Newton's third law of motion?",
      student: "Nabila",
      teacher: "Mrs. Begum",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">
          Questions & Answers Management
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-purple-100 border-b border-purple-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                  Question
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {qa.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {item.question}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {item.student}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {item.teacher}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === "Solved"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

// Money Flow Management Component
const MoneyFlowManagement = ({ setCurrentPage }) => {
  const transactions = [
    {
      id: 1,
      type: "Enrollment",
      amount: 2000,
      date: "2025-07-20",
      status: "Completed",
    },
    {
      id: 2,
      type: "Teacher Payment",
      amount: -500,
      date: "2025-07-21",
      status: "Completed",
    },
    {
      id: 3,
      type: "Enrollment",
      amount: 1000,
      date: "2025-07-22",
      status: "Pending",
    },
    {
      id: 4,
      type: "Refund",
      amount: -200,
      date: "2025-07-23",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-red-200">
        <h2 className="text-4xl font-bold text-red-600 mb-8">
          Money Flow Management
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-red-100 border-b border-red-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                  Amount (BDT)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {transaction.type}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

// Admin Dashboard Component
const AdminDashboard = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-6xl w-full text-center border border-red-200">
        <h2 className="text-4xl font-bold text-red-600 mb-8">
          Admin Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Students Section */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Students
            </h3>
            <p className="text-gray-600">Manage student accounts and data.</p>
            <button
              onClick={() => setCurrentPage("admin-students")}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Students
            </button>
          </div>

          {/* Teachers Section */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Teachers
            </h3>
            <p className="text-gray-600">
              Manage teacher accounts and assignments.
            </p>
            <button
              onClick={() => setCurrentPage("admin-teachers")}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Teachers
            </button>
          </div>

          {/* Courses Section */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
              Courses
            </h3>
            <p className="text-gray-600">
              Manage course offerings and content.
            </p>
            <button
              onClick={() => setCurrentPage("admin-courses")}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Courses
            </button>
          </div>

          {/* Questions & Answers Section */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              Questions & Answers
            </h3>
            <p className="text-gray-600">
              Monitor and review all questions and solutions.
            </p>
            <button
              onClick={() => setCurrentPage("admin-qa")}
              className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Q&A
            </button>
          </div>

          {/* Money Flow Section */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-red-700 mb-3">
              Money Flow
            </h3>
            <p className="text-gray-600">
              Track financial transactions and revenue.
            </p>
            <button
              onClick={() => setCurrentPage("admin-money-flow")}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("home")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Ask Doubt Form Component
const AskDoubtForm = ({ setCurrentPage, selectedCourse, selectedSubject }) => {
  const [doubtDescription, setDoubtDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const imageInputRef = useRef(null);
  const voiceInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleDescriptionChange = (e) => {
    setDoubtDescription(e.target.value);
    if (e.target.value.trim()) {
      setError(""); // Clear error if user starts typing
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      switch (type) {
        case "image":
          setSelectedImage(file);
          break;
        case "voice":
          setSelectedVoice(file);
          break;
        case "video":
          setSelectedVideo(file);
          break;
        case "file":
          setSelectedFile(file);
          break;
        default:
          break;
      }
    }
  };

  const handlePostDoubt = (e) => {
    e.preventDefault();
    if (!doubtDescription.trim()) {
      setError("Please enter your doubt description.");
      setIsPosted(false);
      return;
    }

    // Retrieve existing questions from localStorage
    const existingQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const newQuestion = {
      id: Date.now(), // Unique ID for the question
      course: selectedCourse, // Add selected course
      subject: selectedSubject, // Add selected subject
      description: doubtDescription,
      timestamp: new Date().toLocaleString(), // Add timestamp
      status: "pending", // Mark as pending
      solution: "", // Empty solution initially
      attachments: {
        // Include attachment details
        image: selectedImage ? selectedImage.name : null,
        voice: selectedVoice ? selectedVoice.name : null,
        video: selectedVideo ? selectedVideo.name : null,
        file: selectedFile ? selectedFile.name : null,
      },
      solutionAttachments: {
        // New field for teacher's solution attachments
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    };
    const updatedQuestions = [newQuestion, ...existingQuestions]; // Add new question to the beginning

    // Save updated questions to localStorage
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );

    console.log("Doubt Posted:", newQuestion);
    setIsPosted(true);
    setError("");
    setDoubtDescription(""); // Clear the textarea after posting
    setSelectedImage(null); // Clear selected files
    setSelectedVoice(null);
    setSelectedVideo(null);
    setSelectedFile(null);

    // Redirect to student dashboard after a short delay
    setTimeout(() => {
      setCurrentPage("student-dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">Ask a Doubt</h2>
        {selectedCourse && selectedSubject && (
          <p className="text-lg text-gray-700 mb-4">
            Course: <span className="font-semibold">{selectedCourse}</span> |
            Subject: <span className="font-semibold">{selectedSubject}</span>
          </p>
        )}
        <p className="text-lg text-gray-700 mb-8">
          Type your question below and our expert teachers will help you out!
        </p>
        {isPosted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              Your doubt has been posted. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handlePostDoubt} className="space-y-6">
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
                error ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {error && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          {/* Attachment Options */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            {/* Image Upload */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={(e) => handleFileChange(e, "image")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => imageInputRef.current.click()}
                className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200 shadow-md"
                title="Attach Image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {selectedImage && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedImage.name}
                </span>
              )}
            </div>

            {/* Voice Recording Upload */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="audio/*"
                ref={voiceInputRef}
                onChange={(e) => handleFileChange(e, "voice")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => voiceInputRef.current.click()}
                className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors duration-200 shadow-md"
                title="Attach Voice Note"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7v-2a5 5 0 005-5h2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 19a7 7 0 01-7-7H3a9 9 0 009 9v-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 9a2 2 0 114 0v5a2 2 0 11-4 0V9z"
                  />
                </svg>
              </button>
              {selectedVoice && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedVoice.name}
                </span>
              )}
            </div>

            {/* Video Upload */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="video/*"
                ref={videoInputRef}
                onChange={(e) => handleFileChange(e, "video")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => videoInputRef.current.click()}
                className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 shadow-md"
                title="Attach Video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {selectedVideo && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedVideo.name}
                </span>
              )}
            </div>

            {/* General File Upload */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e, "file")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors duration-200 shadow-md"
                title="Attach File"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13.5"
                  />
                </svg>
              </button>
              {selectedFile && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedFile.name}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Post Question
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

// Question History Page Component
const QuestionHistoryPage = ({ setCurrentPage }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Load questions from localStorage when the component mounts
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    setQuestions(storedQuestions);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-6 text-center">
          Your Question History
        </h2>
        {questions.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">
            You haven't asked any questions yet.
          </p>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100 text-left"
              >
                {question.course && question.subject && (
                  <p className="text-gray-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                )}
                <p className="text-gray-800 font-semibold mb-2">Question:</p>
                <p className="text-gray-700 mb-2">{question.description}</p>
                {question.attachments && (
                  <div className="text-sm text-gray-600 mt-2">
                    {question.attachments.image && (
                      <p>Image: {question.attachments.image}</p>
                    )}
                    {question.attachments.voice && (
                      <p>Voice: {question.attachments.voice}</p>
                    )}
                    {question.attachments.video && (
                      <p>Video: {question.attachments.video}</p>
                    )}
                    {question.attachments.file && (
                      <p>File: {question.attachments.file}</p>
                    )}
                  </div>
                )}
                {question.status === "solved" && question.solution && (
                  <div className="mt-3 p-3 bg-purple-100 rounded-md border border-purple-200">
                    <p className="text-purple-800 font-semibold mb-1">
                      Solution:
                    </p>
                    <p className="text-purple-700 text-sm">
                      {question.solution}
                    </p>
                    {question.solutionAttachments && (
                      <div className="text-xs text-gray-600 mt-2">
                        {question.solutionAttachments.image && (
                          <p>
                            Solution Image: {question.solutionAttachments.image}
                          </p>
                        )}
                        {question.solutionAttachments.voice && (
                          <p>
                            Solution Voice: {question.solutionAttachments.voice}
                          </p>
                        )}
                        {question.solutionAttachments.video && (
                          <p>
                            Solution Video: {question.solutionAttachments.video}
                          </p>
                        )}
                        {question.solutionAttachments.file && (
                          <p>
                            Solution File: {question.solutionAttachments.file}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Asked on: {question.timestamp} | Status:{" "}
                  <span
                    className={`font-semibold ${
                      question.status === "pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {question.status.charAt(0).toUpperCase() +
                      question.status.slice(1)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// Course Subjects Data
const courseSubjectsData = {
  "Engineering + Biology Admission Program 2025": [
    "Physics 1st Paper",
    "Physics 2nd Paper",
    "Chemistry 1st Paper",
    "Chemistry 2nd Paper",
    "Math 1st Paper",
    "Math 2nd Paper",
    "Biology 1st Paper",
    "Biology 2nd Paper",
  ],
  "SSC Full Course (Science Group)": [
    "Physics",
    "Chemistry",
    "Biology",
    "Higher Math",
    "General Math",
    "Bangla 1st Paper",
    "Bangla 2nd Paper",
    "English 1st Paper",
    "English 2nd Paper",
    "ICT",
  ],
  "HSC 1st Year (Prime Batch)": [
    "Physics 1st Paper",
    "Chemistry 1st Paper",
    "Biology 1st Paper",
    "Math 1st Paper",
    "Bangla 1st Paper",
    "English 1st Paper",
    "ICT",
  ],
};

// CourseSubjectsPage Component
const CourseSubjectsPage = ({ courseName, setCurrentPage }) => {
  const subjects = courseSubjectsData[courseName] || [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          {courseName} Subjects
        </h2>
        {subjects.length === 0 ? (
          <p className="text-lg text-gray-700">
            No subjects found for this course.
          </p>
        ) : (
          <ul className="list-disc list-inside text-left space-y-2 text-gray-700 text-lg">
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          <button
            onClick={() => setCurrentPage("student-dashboard")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// Student Dashboard Component
const StudentDashboard = ({
  setCurrentPage,
  setSelectedCourseForSubjects,
  setDoubtDetails,
}) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Load enrolled courses from localStorage when the component mounts
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const handleGoToCourse = (courseName) => {
    setSelectedCourseForSubjects(courseName);
    setCurrentPage("course-subjects");
  };

  const handleAskDoubtClick = () => {
    // Navigate to the new course and subject selection page
    setCurrentPage("select-doubt-details");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-indigo-200">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">
          Welcome to Student Dashboard!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Here you can manage your courses, view your progress, and interact
          with teachers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* My Courses Section */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              My Courses
            </h3>
            {enrolledCourses.length === 0 ? (
              <>
                <p className="text-gray-600">
                  You are not enrolled in any courses yet.
                </p>
                <button
                  onClick={() => setCurrentPage("home-and-scroll")} // Navigate to home page and scroll to courses
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Purchase Course
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
              </div>
            )}
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Ask a Doubt
            </h3>
            <p className="text-gray-600">
              Post your questions and get quick answers from expert teachers.
            </p>
            <button
              onClick={handleAskDoubtClick} // Modified to go to selection page
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              Ask Now
            </button>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              Question History
            </h3>
            <p className="text-gray-600">
              Review all your previously asked questions and their solutions.
            </p>
            <button
              onClick={() => setCurrentPage("question-history")}
              className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enrollment Form Component
const EnrollmentForm = ({ courseName, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
    transactionId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
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
      setErrors({});
      setIsSubmitted(true);
      console.log("Enrollment Data:", { courseName, ...formData });

      // Save enrolled course to localStorage
      const existingEnrolledCourses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];
      // Only add if not already enrolled to prevent duplicates
      if (!existingEnrolledCourses.includes(courseName)) {
        const updatedEnrolledCourses = [...existingEnrolledCourses, courseName];
        localStorage.setItem(
          "enrolledCourses",
          JSON.stringify(updatedEnrolledCourses)
        );
      }

      // Simulate API call or data storage
      setTimeout(() => {
        setCurrentPage("student-dashboard"); // Redirect to student dashboard after successful purchase
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-indigo-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Enroll in: {courseName}
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              Your purchase has been confirmed. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
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
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
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
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.phone}
              </p>
            )}
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
            {errors.paymentMethod && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.paymentMethod}
              </p>
            )}
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
            {errors.transactionId && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.transactionId}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
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

// New SelectCourseAndSubject Component
const SelectCourseAndSubject = ({ setCurrentPage, setDoubtDetails }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Load enrolled courses from localStorage
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  useEffect(() => {
    // Update subjects when selectedCourse changes
    if (selectedCourse) {
      setSubjects(courseSubjectsData[selectedCourse] || []);
      setSelectedSubject(""); // Reset selected subject when course changes
    } else {
      setSubjects([]);
      setSelectedSubject("");
    }
  }, [selectedCourse]);

  const handleNext = () => {
    if (!selectedCourse) {
      setError("Please select a course.");
      return;
    }
    if (!selectedSubject) {
      setError("Please select a subject.");
      return;
    }
    setError("");
    setDoubtDetails({ course: selectedCourse, subject: selectedSubject });
    setCurrentPage("ask-doubt");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-yellow-200">
        <h2 className="text-3xl font-bold text-yellow-600 mb-6">
          Select Course and Subject
        </h2>
        {enrolledCourses.length === 0 ? (
          <p className="text-lg text-gray-700 mb-6">
            You are not enrolled in any courses. Please enroll in a course
            first.
          </p>
        ) : (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="selectCourse"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Select Course:
              </label>
              <select
                id="selectCourse"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="">-- Select a Course --</option>
                {enrolledCourses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {selectedCourse && (
              <div>
                <label
                  htmlFor="selectSubject"
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                >
                  Select Subject:
                </label>
                <select
                  id="selectSubject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">-- Select a Subject --</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {error && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {error}
              </p>
            )}

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={handleNext}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Next
              </button>
              <button
                onClick={() => setCurrentPage("student-dashboard")}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// SolutionForm Component
const SolutionForm = ({ question, onSolve, onCancel }) => {
  const [solutionText, setSolutionText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // New state for solution image
  const [selectedVoice, setSelectedVoice] = useState(null); // New state for solution voice
  const [selectedVideo, setSelectedVideo] = useState(null); // New state for solution video
  const [selectedFile, setSelectedFile] = useState(null); // New state for solution file
  const [error, setError] = useState("");

  const imageInputRef = useRef(null);
  const voiceInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      switch (type) {
        case "image":
          setSelectedImage(file);
          break;
        case "voice":
          setSelectedVoice(file);
          break;
        case "video":
          setSelectedVideo(file);
          break;
        case "file":
          setSelectedFile(file);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!solutionText.trim()) {
      setError("Please write a solution.");
      return;
    }

    const solutionAttachments = {
      image: selectedImage ? selectedImage.name : null,
      voice: selectedVoice ? selectedVoice.name : null,
      video: selectedVideo ? selectedVideo.name : null,
      file: selectedFile ? selectedFile.name : null,
    };

    setError("");
    onSolve(question.id, solutionText, solutionAttachments);
    // Clear selected files after submission
    setSelectedImage(null);
    setSelectedVoice(null);
    setSelectedVideo(null);
    setSelectedFile(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-green-200">
        <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Solve Question
        </h3>
        <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-gray-800 font-semibold mb-1">
            Course: {question.course} | Subject: {question.subject}
          </p>
          <p className="text-gray-700 text-base">
            Question: {question.description}
          </p>
          {question.attachments && (
            <div className="text-sm text-gray-600 mt-2">
              {question.attachments.image && (
                <p>Image: {question.attachments.image}</p>
              )}
              {question.attachments.voice && (
                <p>Voice: {question.attachments.voice}</p>
              )}
              {question.attachments.video && (
                <p>Video: {question.attachments.video}</p>
              )}
              {question.attachments.file && (
                <p>File: {question.attachments.file}</p>
              )}
            </div>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Asked on: {question.timestamp}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="solutionText"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Your Solution:
            </label>
            <textarea
              id="solutionText"
              value={solutionText}
              onChange={(e) => {
                setSolutionText(e.target.value);
                setError("");
              }}
              rows="8"
              placeholder="Write your detailed solution here..."
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-y ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {error && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          {/* Attachment Options for Solution */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            {/* Image Upload for Solution */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={(e) => handleFileChange(e, "image")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => imageInputRef.current.click()}
                className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200 shadow-md"
                title="Attach Image to Solution"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {selectedImage && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedImage.name}
                </span>
              )}
            </div>

            {/* Voice Recording Upload for Solution */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="audio/*"
                ref={voiceInputRef}
                onChange={(e) => handleFileChange(e, "voice")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => voiceInputRef.current.click()}
                className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors duration-200 shadow-md"
                title="Attach Voice Note to Solution"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11a7 7 0 01-7 7v-2a5 5 0 005-5h2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 19a7 7 0 01-7-7H3a9 9 0 009 9v-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 9a2 2 0 114 0v5a2 2 0 11-4 0V9z"
                  />
                </svg>
              </button>
              {selectedVoice && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedVoice.name}
                </span>
              )}
            </div>

            {/* Video Upload for Solution */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="video/*"
                ref={videoInputRef}
                onChange={(e) => handleFileChange(e, "video")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => videoInputRef.current.click()}
                className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 shadow-md"
                title="Attach Video to Solution"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {selectedVideo && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedVideo.name}
                </span>
              )}
            </div>

            {/* General File Upload for Solution */}
            <div className="flex flex-col items-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e, "file")}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors duration-200 shadow-md"
                title="Attach File to Solution"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13.5"
                  />
                </svg>
              </button>
              {selectedFile && (
                <span className="text-xs text-gray-600 mt-1">
                  {selectedFile.name}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Submit Solution
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// PendingQuestionsDashboard Component
const PendingQuestionsDashboard = ({ setCurrentPage }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [solvingQuestion, setSolvingQuestion] = useState(null); // Stores the question being solved

  // Sample questions to populate if localStorage is empty
  const sampleQuestions = [
    {
      id: 1,
      course: "Engineering + Biology Admission Program 2025",
      subject: "Physics 1st Paper",
      description: "What is the principle of superposition of waves?",
      timestamp: "2025-07-22, 10:00:00 AM",
      status: "pending",
      solution: "",
      attachments: { image: null, voice: null, video: null, file: null },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    },
    {
      id: 2,
      course: "SSC Full Course (Science Group)",
      subject: "Chemistry",
      description: "Explain the process of electrolysis of water.",
      timestamp: "2025-07-22, 11:30:00 AM",
      status: "pending",
      solution: "",
      attachments: {
        image: "diagram.png",
        voice: null,
        video: null,
        file: null,
      },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    },
    {
      id: 3,
      course: "HSC 1st Year (Prime Batch)",
      subject: "Biology 1st Paper",
      description: "Describe the structure and function of mitochondria.",
      timestamp: "2025-07-22, 01:00:00 PM",
      status: "pending",
      solution: "",
      attachments: {
        image: null,
        voice: "audio_note.mp3",
        video: null,
        file: null,
      },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    },
    {
      id: 4,
      course: "Engineering + Biology Admission Program 2025",
      subject: "Math 2nd Paper",
      description: "What is the derivative of $f(x) = x^2 + 2x + 1$?",
      timestamp: "2025-07-22, 02:00:00 PM",
      status: "pending",
      solution: "",
      attachments: {
        image: null,
        voice: null,
        video: null,
        file: "problem_statement.pdf",
      },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    },
    {
      id: 5,
      course: "SSC Full Course (Science Group)",
      subject: "Physics",
      description: "Define Newton's third law of motion.",
      timestamp: "2025-07-22, 03:00:00 PM",
      status: "pending",
      solution: "",
      attachments: {
        image: null,
        voice: null,
        video: "experiment_video.mp4",
        file: null,
      },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
    },
  ];

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    if (storedQuestions.length === 0) {
      // If no questions in localStorage, populate with sample questions
      localStorage.setItem(
        "doubtDeskQuestions",
        JSON.stringify(sampleQuestions)
      );
      setAllQuestions(sampleQuestions);
    } else {
      setAllQuestions(storedQuestions);
    }
  }, []);

  const handleSolveClick = (question) => {
    setSolvingQuestion(question);
  };

  const handleSolutionSubmit = (
    questionId,
    solutionText,
    solutionAttachments
  ) => {
    const updatedQuestions = allQuestions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            status: "solved",
            solution: solutionText,
            solutionAttachments: solutionAttachments,
          }
        : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setAllQuestions(updatedQuestions);
    setSolvingQuestion(null); // Close the solution form
  };

  const handleCancelSolve = () => {
    setSolvingQuestion(null); // Close the solution form
  };

  const pendingQuestions = allQuestions.filter((q) => q.status === "pending");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-6">
          Pending Questions
        </h2>

        {pendingQuestions.length === 0 ? (
          <p className="text-lg text-gray-700">
            No pending doubts at the moment.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {pendingQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-blue-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                  <p className="text-gray-700 text-base">
                    {question.description}
                  </p>
                  {question.attachments && (
                    <div className="text-sm text-gray-600 mt-2">
                      {question.attachments.image && (
                        <p>Image: {question.attachments.image}</p>
                      )}
                      {question.attachments.voice && (
                        <p>Voice: {question.attachments.voice}</p>
                      )}
                      {question.attachments.video && (
                        <p>Video: {question.attachments.video}</p>
                      )}
                      {question.attachments.file && (
                        <p>File: {question.attachments.file}</p>
                      )}
                    </div>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    Asked on: {question.timestamp}
                  </p>
                </div>
                <button
                  onClick={() => handleSolveClick(question)}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md flex-shrink-0"
                >
                  Solve
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {solvingQuestion && (
        <SolutionForm
          question={solvingQuestion}
          onSolve={handleSolutionSubmit}
          onCancel={handleCancelSolve}
        />
      )}
    </div>
  );
};

// SolvedQuestionsDashboard Component
const SolvedQuestionsDashboard = ({ setCurrentPage }) => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [viewingSolution, setViewingSolution] = useState(null); // Stores the solution being viewed

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const filteredSolvedQuestions = storedQuestions.filter(
      (q) => q.status === "solved"
    );
    setSolvedQuestions(filteredSolvedQuestions);
  }, []);

  const handleViewSolutionClick = (question) => {
    setViewingSolution(question);
  };

  const handleCloseSolutionView = () => {
    setViewingSolution(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Solved Questions
        </h2>

        {solvedQuestions.length === 0 ? (
          <p className="text-lg text-gray-700">
            No questions have been solved yet.
          </p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {solvedQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="text-left flex-grow mb-3 md:mb-0">
                  <p className="text-green-800 font-semibold mb-1">
                    Course: {question.course} | Subject: {question.subject}
                  </p>
                  <p className="text-gray-700 text-base">
                    {question.description}
                  </p>
                  {question.attachments && (
                    <div className="text-sm text-gray-600 mt-2">
                      {question.attachments.image && (
                        <p>Image: {question.attachments.image}</p>
                      )}
                      {question.attachments.voice && (
                        <p>Voice: {question.attachments.voice}</p>
                      )}
                      {question.attachments.video && (
                        <p>Video: {question.attachments.video}</p>
                      )}
                      {question.attachments.file && (
                        <p>File: {question.attachments.file}</p>
                      )}
                    </div>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    Solved on: {question.timestamp}
                  </p>
                </div>
                <button
                  onClick={() => handleViewSolutionClick(question)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md flex-shrink-0"
                >
                  View Solution
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {viewingSolution && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">
              Solution for Question
            </h3>
            <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-gray-800 font-semibold mb-1">
                Course: {viewingSolution.course} | Subject:{" "}
                {viewingSolution.subject}
              </p>
              <p className="text-gray-700 text-base">
                Question: {viewingSolution.description}
              </p>
              {viewingSolution.attachments && (
                <div className="text-sm text-gray-600 mt-2">
                  {viewingSolution.attachments.image && (
                    <p>Image: {viewingSolution.attachments.image}</p>
                  )}
                  {viewingSolution.attachments.voice && (
                    <p>Voice: {viewingSolution.attachments.voice}</p>
                  )}
                  {viewingSolution.attachments.video && (
                    <p>Video: {viewingSolution.attachments.video}</p>
                  )}
                  {viewingSolution.attachments.file && (
                    <p>File: {viewingSolution.attachments.file}</p>
                  )}
                </div>
              )}
              <p className="text-gray-500 text-xs mt-1">
                Asked on: {viewingSolution.timestamp}
              </p>
            </div>
            <div className="mb-6 p-4 bg-purple-100 rounded-md border border-purple-200">
              <p className="text-purple-800 font-semibold mb-1">Solution:</p>
              <p className="text-purple-700 text-base whitespace-pre-wrap">
                {viewingSolution.solution}
              </p>
              {viewingSolution.solutionAttachments && (
                <div className="text-xs text-gray-600 mt-2">
                  {viewingSolution.solutionAttachments.image && (
                    <p>
                      Solution Image:{" "}
                      {viewingSolution.solutionAttachments.image}
                    </p>
                  )}
                  {viewingSolution.solutionAttachments.voice && (
                    <p>
                      Solution Voice:{" "}
                      {viewingSolution.solutionAttachments.voice}
                    </p>
                  )}
                  {viewingSolution.solutionAttachments.video && (
                    <p>
                      Solution Video:{" "}
                      {viewingSolution.solutionAttachments.video}
                    </p>
                  )}
                  {viewingSolution.solutionAttachments.file && (
                    <p>
                      Solution File: {viewingSolution.solutionAttachments.file}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleCloseSolutionView}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App component that includes the Navbar and Course Cards
const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // State to manage current page
  const [courseToEnroll, setCourseToEnroll] = useState(null); // State to hold the course name for enrollment
  const [selectedCourseForSubjects, setSelectedCourseForSubjects] =
    useState(null); // State to hold the course name for subjects page
  const [doubtDetails, setDoubtDetails] = useState({
    course: null,
    subject: null,
  }); // State to hold course and subject for asking doubt
  const coursesSectionRef = useRef(null); // Ref for the courses section

  // Effect to scroll to courses section when needed
  useEffect(() => {
    if (currentPage === "home-and-scroll" && coursesSectionRef.current) {
      coursesSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setCurrentPage("home"); // Reset page to 'home' after scrolling
    }
  }, [currentPage]); // Depend on currentPage

  const courses = [
    {
      topTitle: "Engineering",
      programTitle: "Admission Program 2025",
      courseName: "Engineering + Biology Admission Program 2025",
      features: [
        "All Subjects Covered",
        "Ask Unlimited Questions",
        "Subject-wise Expert Teachers",
        "Chapter-specific Doubt Posting",
        "Fast & Quality Answers",
        "Answer Visible Only to You",
        "24/7 Doubt Posting Facility",
      ],
      priceText: "2000 BDT",
      enrollButtonText: "Enroll Now",
    },
    {
      topTitle: "SSC",
      programTitle: "Complete Preparation Batch 2025",
      courseName: "SSC Full Course (Science Group)",
      features: [
        "All Subjects Covered",
        "Ask Unlimited Questions",
        "Subject-wise Expert Teachers",
        "Chapter-specific Doubt Posting",
        "Fast & Quality Answers",
        "Answer Visible Only to You",
        "24/7 Doubt Posting Facility",
      ],
      priceText: "1000 BDT",
      enrollButtonText: "Enroll Now",
    },
    {
      topTitle: "HSC",
      programTitle: "Academic Program Prime Batch 2027",
      courseName: "HSC 1st Year (Prime Batch)",
      features: [
        "All Subjects Covered",
        "Ask Unlimited Questions",
        "Subject-wise Expert Teachers",
        "Chapter-specific Doubt Posting",
        "Fast & Quality Answers",
        "Answer Visible Only to You",
        "24/7 Doubt Posting Facility",
      ],
      priceText: "1500 BDT",
      enrollButtonText: "Enroll Now",
    },
  ];

  // Function to handle "Enroll Now" click
  const handleEnrollClick = (courseName) => {
    setCourseToEnroll(courseName);
    setCurrentPage("enrollment-form");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
      case "home-and-scroll": // Handle both cases for rendering home content
        return (
          <main className="p-8 text-center flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Ask. Learn. Grow.
            </h1>
            <div className="flex flex-col md:flex-row mt-12 bg-white rounded-lg shadow-md max-w-6xl mx-auto overflow-hidden">
              {/* Text Section */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h1 className="text-lg text-gray-700 font-bold mb-2">
                  DoubtDesk – Your Personalized Doubt-Solving Partner
                </h1>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Struggling with a question? DoubtDesk helps students get
                  clear, subject-wise answers from expert teachers. Just post
                  your doubt, and let our assigned teachers guide you – fast and
                  focused.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Explore our courses, connect with teachers, and never let a
                  doubt hold you back from achieving your academic goals.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 h-full">
                <img
                  src="stress.png"
                  alt="Student thinking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Course Cards Section - Added id for scrolling */}
            <section
              id="courses-section"
              className="mt-16"
              ref={coursesSectionRef}
            >
              {" "}
              {/* Attach ref here */}
              <h2 className="text-4xl font-bold text-gray-800 mb-10">
                Our Popular Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    topTitle={course.topTitle}
                    programTitle={course.programTitle}
                    courseName={course.courseName}
                    features={course.features}
                    priceText={course.priceText}
                    enrollButtonText={course.enrollButtonText}
                    onEnrollClick={handleEnrollClick} // Pass the handler to CourseCard
                  />
                ))}
              </div>
            </section>
          </main>
        );
      case "teacher-registration":
        return <TeacherRegistrationForm setCurrentPage={setCurrentPage} />;
      case "student-registration":
        return <StudentRegistrationForm setCurrentPage={setCurrentPage} />;
      case "login":
        return <LoginForm setCurrentPage={setCurrentPage} />;
      case "student-dashboard":
        return (
          <StudentDashboard
            setCurrentPage={setCurrentPage}
            setSelectedCourseForSubjects={setSelectedCourseForSubjects}
            setDoubtDetails={setDoubtDetails}
          />
        );
      case "teacher-dashboard-pending": // New case for teacher dashboard pending questions
        return <PendingQuestionsDashboard setCurrentPage={setCurrentPage} />;
      case "teacher-dashboard-solved": // New case for teacher dashboard solved questions
        return <SolvedQuestionsDashboard setCurrentPage={setCurrentPage} />;
      case "admin-dashboard": // New case for admin dashboard
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      case "admin-students":
        return <StudentsManagement setCurrentPage={setCurrentPage} />;
      case "admin-teachers":
        return <TeachersManagement setCurrentPage={setCurrentPage} />;
      case "admin-courses":
        return <CoursesManagement setCurrentPage={setCurrentPage} />;
      case "admin-qa":
        return <QuestionsAnswersManagement setCurrentPage={setCurrentPage} />;
      case "admin-money-flow":
        return <MoneyFlowManagement setCurrentPage={setCurrentPage} />;
      case "select-doubt-details": // New case for selecting course and subject before asking doubt
        return (
          <SelectCourseAndSubject
            setCurrentPage={setCurrentPage}
            setDoubtDetails={setDoubtDetails}
          />
        );
      case "ask-doubt":
        return (
          <AskDoubtForm
            setCurrentPage={setCurrentPage}
            selectedCourse={doubtDetails.course}
            selectedSubject={doubtDetails.subject}
          />
        );
      case "question-history":
        return <QuestionHistoryPage setCurrentPage={setCurrentPage} />;
      case "enrollment-form":
        return (
          <EnrollmentForm
            courseName={courseToEnroll}
            setCurrentPage={setCurrentPage}
          />
        );
      case "course-subjects": // New case for course subjects page
        return (
          <CourseSubjectsPage
            courseName={selectedCourseForSubjects}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return (
          <main className="p-8 text-center flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h1>
            <button
              onClick={() => setCurrentPage("home")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 mt-8"
            >
              Go to Home
            </button>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const joinRef = useRef(null);

  const scrollToCourses = (e) => {
    e.preventDefault();
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setIsJoinOpen(false); // Close join dropdown when scrolling
  };

  const handleJoinOptionClick = (pageName) => {
    setCurrentPage(pageName);
    setIsOpen(false); // Close mobile menu
    setIsJoinOpen(false); // Close join dropdown
  };

  const handleNotificationClick = () => {
    console.log("Notification icon clicked!");
    // You can add logic here to show a notification panel or navigate to a notifications page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (joinRef.current && !joinRef.current.contains(event.target)) {
        setIsJoinOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [joinRef]);

  // Determine if it's a student or teacher or admin dashboard page
  const isUserDashboardPage = [
    "student-dashboard",
    "teacher-dashboard-pending",
    "teacher-dashboard-solved",
    "admin-dashboard", // Added admin-dashboard
    "admin-students", // New admin management pages
    "admin-teachers",
    "admin-courses",
    "admin-qa",
    "admin-money-flow",
    "ask-doubt",
    "question-history",
    "course-subjects",
    "select-doubt-details",
  ].includes(currentPage);
  const isTeacherDashboard = [
    "teacher-dashboard-pending",
    "teacher-dashboard-solved",
  ].includes(currentPage);
  const isAdminDashboard = [
    "admin-dashboard",
    "admin-students",
    "admin-teachers",
    "admin-courses",
    "admin-qa",
    "admin-money-flow",
  ].includes(currentPage); // Check for admin dashboard and its sub-pages

  // Determine the profile page based on current dashboard
  const getProfilePage = () => {
    if (
      currentPage === "student-dashboard" ||
      [
        "ask-doubt",
        "question-history",
        "course-subjects",
        "select-doubt-details",
      ].includes(currentPage)
    ) {
      return "student-dashboard";
    } else if (isTeacherDashboard) {
      return "teacher-dashboard-pending"; // Default to pending questions for teacher
    } else if (isAdminDashboard) {
      // Added admin dashboard
      return "admin-dashboard";
    }
    return "home"; // Default if not on any dashboard
  };

  return (
    <nav className="bg-white shadow-md py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          {" "}
          {/* Added flex items-center for vertical alignment */}
          <a
            href="#"
            onClick={() =>
              setCurrentPage(isUserDashboardPage ? getProfilePage() : "home")
            }
            className="flex items-center text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            {/* Logo Image */}
            <img
              src="logo.png" // Replace with your actual logo path
              alt="DoubtDesk Logo"
              className="h-16 w-16 mr-2" // Adjust size as needed
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/32x32/cccccc/000000?text=Logo";
              }} // Fallback image
            />
            DoubtDesk
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {isUserDashboardPage ? (
            <>
              {isTeacherDashboard && (
                <>
                  <a
                    href="#"
                    onClick={() => setCurrentPage("teacher-dashboard-pending")}
                    className={`text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100 ${
                      currentPage === "teacher-dashboard-pending"
                        ? "bg-gray-100 text-indigo-600"
                        : ""
                    }`}
                  >
                    Pending Questions
                  </a>
                  <a
                    href="#"
                    onClick={() => setCurrentPage("teacher-dashboard-solved")}
                    className={`text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100 ${
                      currentPage === "teacher-dashboard-solved"
                        ? "bg-gray-100 text-indigo-600"
                        : ""
                    }`}
                  >
                    Solved Questions
                  </a>
                </>
              )}
              {isAdminDashboard && ( // New Admin Dashboard Link
                <a
                  href="#"
                  onClick={() => setCurrentPage("admin-dashboard")}
                  className={`text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100 ${
                    currentPage === "admin-dashboard" ||
                    currentPage.startsWith("admin-")
                      ? "bg-gray-100 text-indigo-600"
                      : ""
                  }`}
                >
                  Admin Dashboard
                </a>
              )}
              {/* Notification Icon for Dashboards */}
              <button
                onClick={handleNotificationClick}
                className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                title="Notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <a
                href="#"
                onClick={() => setCurrentPage(getProfilePage())}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                Profile
              </a>
              <button
                onClick={() => setCurrentPage("home")}
                className="bg-red-500 text-white px-5 py-2 rounded-md font-medium hover:bg-red-600 transition-colors duration-200 shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="#courses-section"
                onClick={scrollToCourses}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                Courses
              </a>
              {/* Join as a Dropdown */}
              <div className="relative" ref={joinRef}>
                <button
                  onClick={() => setIsJoinOpen(!isJoinOpen)}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100 focus:outline-none flex items-center"
                >
                  Join as
                  <svg
                    className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${
                      isJoinOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isJoinOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        onClick={() =>
                          handleJoinOptionClick("teacher-registration")
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        Teacher
                      </a>
                      <a
                        href="#"
                        onClick={() =>
                          handleJoinOptionClick("student-registration")
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        Student
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                Contact
              </a>
              {/* Notification Icon for Home/Login/Registration */}
              <button
                onClick={handleNotificationClick}
                className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                title="Notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <a
                href="#"
                onClick={() => setCurrentPage("login")}
                className="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md"
              >
                Login
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Close icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isUserDashboardPage ? (
              <>
                {isTeacherDashboard && (
                  <>
                    <a
                      href="#"
                      onClick={() => {
                        setCurrentPage("teacher-dashboard-pending");
                        setIsOpen(false);
                      }}
                      className={`text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 ${
                        currentPage === "teacher-dashboard-pending"
                          ? "bg-gray-100 text-indigo-600"
                          : ""
                      }`}
                    >
                      Pending Questions
                    </a>
                    <a
                      href="#"
                      onClick={() => {
                        setCurrentPage("teacher-dashboard-solved");
                        setIsOpen(false);
                      }}
                      className={`text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 ${
                        currentPage === "teacher-dashboard-solved"
                          ? "bg-gray-100 text-indigo-600"
                          : ""
                      }`}
                    >
                      Solved Questions
                    </a>
                  </>
                )}
                {isAdminDashboard && ( // New Admin Dashboard Link for mobile
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("admin-dashboard");
                      setIsOpen(false);
                    }}
                    className={`text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 ${
                      currentPage === "admin-dashboard" ||
                      currentPage.startsWith("admin-")
                        ? "bg-gray-100 text-indigo-600"
                        : ""
                    }`}
                  >
                    Admin Dashboard
                  </a>
                )}
                {/* Notification Icon for Mobile Dashboards */}
                <button
                  onClick={() => {
                    handleNotificationClick();
                    setIsOpen(false);
                  }}
                  className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                  title="Notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Notifications
                </button>
                <a
                  href="#"
                  onClick={() => {
                    setCurrentPage(getProfilePage());
                    setIsOpen(false);
                  }}
                  className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Profile
                </a>
                <button
                  onClick={() => {
                    setCurrentPage("home");
                    setIsOpen(false);
                  }}
                  className="bg-red-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600 text-center w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="#courses-section"
                  onClick={scrollToCourses}
                  className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Courses
                </a>
                {/* Mobile Join as a Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsJoinOpen(!isJoinOpen)}
                    className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left focus:outline-none flex items-center justify-between"
                  >
                    Join as
                    <svg
                      className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${
                        isJoinOpen ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isJoinOpen && (
                    <div className="pl-4 py-1 space-y-1">
                      <a
                        href="#"
                        onClick={() =>
                          handleJoinOptionClick("teacher-registration")
                        }
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                      >
                        Teacher
                      </a>
                      <a
                        href="#"
                        onClick={() =>
                          handleJoinOptionClick("student-registration")
                        }
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                      >
                        Student
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Contact
                </a>
                {/* Notification Icon for Mobile Home/Login/Registration */}
                <button
                  onClick={() => {
                    handleNotificationClick();
                    setIsOpen(false);
                  }}
                  className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                  title="Notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Notifications
                </button>
                <a
                  href="#"
                  onClick={() => setCurrentPage("login")}
                  className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 text-center mt-2"
                >
                  Login
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default App;
