import React, { useState, useRef, useEffect } from "react";

// Initial sample courses with isActive property
// This data will be used to initialize localStorage if it's empty
const initialCoursesData = [
  {
    topTitle: "Engineering",
    programTitle: "Admission Program 2025",
    courseName: "Engineering + Biology Admission Program 2025",
    features: [
      "All subjects covered",
      "Ask unlimited questions",
      "Subject-wise expert teachers",
      "Chapter-specific doubt posting",
      "Fast and quality answers",
      "Answers visible only to you",
      "24/7 doubt posting facility",
    ],
    priceText: "2000 BDT",
    enrollButtonText: "Enroll Now",
    isActive: true, // New property: course is active by default
  },
  {
    topTitle: "SSC",
    programTitle: "Full Preparation Batch 2025",
    courseName: "SSC Full Course (Science Group)",
    features: [
      "All subjects covered",
      "Ask unlimited questions",
      "Subject-wise expert teachers",
      "Chapter-specific doubt posting",
      "Fast and quality answers",
      "Answers visible only to you",
      "24/7 doubt posting facility",
    ],
    priceText: "1000 BDT",
    enrollButtonText: "Enroll Now",
    isActive: true, // New property: course is active by default
  },
  {
    topTitle: "HSC",
    programTitle: "Academic Program Prime Batch 2027",
    courseName: "HSC 1st Year (Prime Batch)",
    features: [
      "All subjects covered",
      "Ask unlimited questions",
      "Subject-wise expert teachers",
      "Chapter-specific doubt posting",
      "Fast and quality answers",
      "Answers visible only to you",
      "24/7 doubt posting facility",
    ],
    priceText: "1500 BDT",
    enrollButtonText: "Enroll Now",
    isActive: true, // New property: course is active by default
  },
];

// CourseCard Component - Displays individual course details and enrollment options
const CourseCard = ({
  topTitle,
  programTitle,
  courseName,
  features,
  priceText,
  enrollButtonText,
  isEnrolled, // New prop to check if the user is already enrolled
  onEnrollClick, // Passed down from App
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 border border-gray-200 overflow-hidden">
      <div className="w-full bg-indigo-700 text-white py-4 px-4 -mx-4 -mt-4 mb-4 rounded-t-xl">
        <h3 className="text-3xl font-extrabold mb-1 leading-tight">
          {topTitle}
        </h3>
        <p className="text-xl font-semibold text-yellow-400">{programTitle}</p>
      </div>

      <h4 className="text-2xl font-bold text-gray-800 mb-4 px-2 leading-tight">
        {courseName}
      </h4>

      <ul className="list-disc list-inside p-0 mb-6 text-gray-700 flex-grow w-full px-4 text-left space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-indigo-600">•</span>
            <span className="flex-grow">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-auto px-2">
        {priceText && (
          <a
            href="#"
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md"
          >
            {priceText}
          </a>
        )}
        {enrollButtonText && (
          <button
            onClick={() => onEnrollClick(courseName)}
            className={`flex-1 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200 shadow-md ${
              isEnrolled
                ? "bg-gray-500 cursor-not-allowed" // Grey out if already enrolled
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={isEnrolled} // Disable button if already enrolled
          >
            {isEnrolled ? "Already Enrolled" : enrollButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

// Footer Component - Displays copyright and navigation links
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} DoubtDesk. All rights reserved.
          </p>
        </div>

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

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
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
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777-7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

// TeacherRegistrationForm Component - Handles teacher registration
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
      // Check if email already exists in local storage
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
        password: formData.password, // In a real app, hash this password!
        isActive: true, // Teacher is active by default
      };

      localStorage.setItem(
        "doubtDeskTeachers",
        JSON.stringify([...existingTeachers, newTeacher])
      );
      console.log("Teacher Registration Data:", newTeacher);

      setTimeout(() => {
        setCurrentPage("teacher-login");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Teacher Registration
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your registration has been submitted. Redirecting to login...
            </span>
          </div>
        )}
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

// StudentRegistrationForm Component - Handles student registration
const StudentRegistrationForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    gradeLevel: "",
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
    if (!formData.gradeLevel)
      newErrors.gradeLevel = "Grade or level is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
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
      // Check if email already exists in local storage
      const existingStudents =
        JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
      const emailExists = existingStudents.some(
        (student) => student.email === formData.email
      );

      if (emailExists) {
        setErrors({ email: "This email is already registered." });
        setIsSubmitted(false);
        return;
      }

      setErrors({});
      setIsSubmitted(true);

      const newStudent = {
        gradeLevel: formData.gradeLevel,
        email: formData.email,
        password: formData.password, // In a real app, hash this password!
      };

      localStorage.setItem(
        "doubtDeskStudents",
        JSON.stringify([...existingStudents, newStudent])
      );
      console.log("Student Registration Data:", newStudent);

      setTimeout(() => {
        setCurrentPage("student-login");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Student Registration
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your registration has been submitted. Redirecting to login...
            </span>
          </div>
        )}
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
            <select
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.gradeLevel ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Study Level</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Admission">Admission</option>
            </select>
            {errors.gradeLevel && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.gradeLevel}
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

// StudentLoginPage Component - Handles student login
const StudentLoginPage = ({
  setCurrentPage,
  setLoggedInUser,
  isEnrollmentFlow,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid.");
      return;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    const existingStudents =
      JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
    const foundStudent = existingStudents.find(
      (student) => student.email === email && student.password === password
    );

    if (foundStudent) {
      setIsSubmitted(true);
      setLoggedInUser({ email: foundStudent.email, role: "student" });
      console.log("Student Login Successful:", foundStudent);
      setTimeout(() => {
        if (isEnrollmentFlow) {
          setCurrentPage("enrollment-form");
        } else {
          setCurrentPage("student-dashboard");
        }
      }, 1500);
    } else {
      setError(
        "Invalid email or password. Please register if you don't have an account."
      );
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Student Login</h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Logging in. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !email.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !password.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && (
              <p className="text-red-500 text-xs italic mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => {
              console.log("Navigating to student-registration");
              setCurrentPage("student-registration");
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register now.
          </a>
        </p>
      </div>
    </div>
  );
};

// TeacherLoginPage Component - Handles teacher login
const TeacherLoginPage = ({ setCurrentPage, setLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid.");
      return;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    const existingTeachers =
      JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
    const foundTeacher = existingTeachers.find(
      (teacher) => teacher.email === email && teacher.password === password
    );

    if (foundTeacher) {
      if (!foundTeacher.isActive) {
        setError("Your account has been deactivated.");
        setIsSubmitted(false);
        return;
      }

      setIsSubmitted(true);
      setLoggedInUser({ email: foundTeacher.email, role: "teacher" });
      console.log("Teacher Login Successful:", foundTeacher);
      setTimeout(() => {
        setCurrentPage("teacher-dashboard-pending");
      }, 1500);
    } else {
      setError(
        "Invalid email or password. Please register if you don't have an account."
      );
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Teacher Login</h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Logging in. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !email.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !password.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && (
              <p className="text-red-500 text-xs italic mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => setCurrentPage("teacher-registration")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register now.
          </a>
        </p>
      </div>
    </div>
  );
};

// AdminRegistrationForm Component - Handles admin registration
const AdminRegistrationForm = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
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
      // Check if email already exists in local storage for admins
      const existingAdmins =
        JSON.parse(localStorage.getItem("doubtDeskAdmins")) || [];
      const emailExists = existingAdmins.some(
        (admin) => admin.email === formData.email
      );

      if (emailExists) {
        setErrors({ email: "This email is already registered." });
        setIsSubmitted(false);
        return;
      }

      setErrors({});
      setIsSubmitted(true);

      const newAdmin = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password, // In a real app, hash this password!
      };

      localStorage.setItem(
        "doubtDeskAdmins",
        JSON.stringify([...existingAdmins, newAdmin])
      );
      console.log("Admin Registration Data:", newAdmin);

      setTimeout(() => {
        setCurrentPage("admin-login");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Admin Registration
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your registration has been submitted. Redirecting to login...
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
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
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.phoneNumber}
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
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
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
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
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
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ${
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
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// AdminLoginPage Component - Handles admin login
const AdminLoginPage = ({ setCurrentPage, setLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hardcoded admin credentials for demonstration
  const HARDCODED_ADMIN_EMAIL = "admin@doubtdesk.com";
  const HARDCODED_ADMIN_PASSWORD = "adminpassword";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S/.test(email)) {
      setError("Email is invalid.");
      return;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    // Check hardcoded admin first
    if (
      email === HARDCODED_ADMIN_EMAIL &&
      password === HARDCODED_ADMIN_PASSWORD
    ) {
      setIsSubmitted(true);
      setLoggedInUser({ email: HARDCODED_ADMIN_EMAIL, role: "admin" });
      console.log("Hardcoded Admin Login Successful");
      setTimeout(() => {
        setCurrentPage("admin-dashboard");
      }, 1500);
      return;
    }

    // Check registered admins from local storage
    const existingAdmins =
      JSON.parse(localStorage.getItem("doubtDeskAdmins")) || [];
    const foundAdmin = existingAdmins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (foundAdmin) {
      setIsSubmitted(true);
      setLoggedInUser({ email: foundAdmin.email, role: "admin" });
      console.log("Registered Admin Login Successful:", foundAdmin);
      setTimeout(() => {
        setCurrentPage("admin-dashboard");
      }, 1500);
    } else {
      setError(
        "Invalid email or password. Please register if you don't have an account."
      );
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-red-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Admin Login</h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Logging in. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ${
                error && !email.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200 ${
                error && !password.trim() ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error && (
              <p className="text-red-500 text-xs italic mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-gray-700">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={() => setCurrentPage("admin-registration")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register now.
          </a>
        </p>
      </div>
    </div>
  );
};

// StudentsManagement Component - Admin view for students
const StudentsManagement = ({ setCurrentPage }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents =
      JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          Students({students.length} Total)
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

// TeachersManagement Component - Admin view for teachers
const TeachersManagement = ({ setCurrentPage }) => {
  const [teachers, setTeachers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedTeachers =
      JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
    // Ensure all teachers have an isActive property, default to true
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

// AddCourseForm Component - Allows admin to add new courses
const AddCourseForm = ({ setCurrentPage, addCourse }) => {
  const [formData, setFormData] = useState({
    topTitle: "",
    programTitle: "",
    courseName: "",
    features: "", // Comma-separated or newline-separated string
    priceText: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.topTitle.trim()) newErrors.topTitle = "Top Title is required";
    if (!formData.programTitle.trim())
      newErrors.programTitle = "Program Title is required";
    if (!formData.courseName.trim())
      newErrors.courseName = "Course Name is required";
    if (!formData.features.trim()) newErrors.features = "Features are required";
    if (!formData.priceText.trim()) newErrors.priceText = "Price is required";
    else if (!/^\d+\s*BDT$/i.test(formData.priceText))
      newErrors.priceText =
        "Price must be in 'X BDT' format (e.g., '1500 BDT')";
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

      const newCourse = {
        topTitle: formData.topTitle,
        programTitle: formData.programTitle,
        courseName: formData.courseName,
        features: formData.features
          .split(/,?\s*\r?\n|\s*,\s*/)
          .filter((f) => f.trim() !== ""), // Split by comma or newline
        priceText: formData.priceText,
        enrollButtonText: "Enroll Now", // Default
        isActive: true, // New courses are active by default
      };

      addCourse(newCourse); // Use the function passed from App

      setTimeout(() => {
        setCurrentPage("admin-courses");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Add New Course
        </h2>
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              New course added successfully. Redirecting...
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="topTitle"
              placeholder="e.g., Engineering, SSC, HSC"
              value={formData.topTitle}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.topTitle ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.topTitle && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.topTitle}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="programTitle"
              placeholder="e.g., Admission Program 2025"
              value={formData.programTitle}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.programTitle ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.programTitle && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.programTitle}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="courseName"
              placeholder="e.g., Engineering + Biology Admission Program 2025"
              value={formData.courseName}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.courseName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.courseName && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.courseName}
              </p>
            )}
          </div>
          <div>
            <textarea
              name="features"
              placeholder="Enter features, one per line or comma-separated"
              value={formData.features}
              onChange={handleChange}
              rows="5"
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-y ${
                errors.features ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.features && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.features}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="priceText"
              placeholder="e.g., 2000 BDT"
              value={formData.priceText}
              onChange={handleChange}
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.priceText ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.priceText && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {errors.priceText}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
          >
            Add Course
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage("admin-courses")}
            className="w-full bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg mt-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

// CoursesManagement Component - Admin view for courses
const CoursesManagement = ({ setCurrentPage, courses, setCourses }) => {
  const [localCourses, setLocalCourses] = useState([]);

  useEffect(() => {
    // Sync with the global courses state passed from App
    setLocalCourses(courses);
  }, [courses]);

  const handleToggleCourseStatus = (courseName) => {
    const updatedCourses = localCourses.map((course) =>
      course.courseName === courseName
        ? { ...course, isActive: !course.isActive }
        : course
    );
    setCourses(updatedCourses); // Update global state in App
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
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-green-500 hover:bg-green-600 text-white"
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// QuestionsAnswersManagement Component - Admin view for Q&A
const QuestionsAnswersManagement = ({ setCurrentPage }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    setQuestions(storedQuestions);
  }, []);

  const pendingCount = questions.filter((q) => q.status === "pending").length;
  const solvedCount = questions.filter((q) => q.status === "solved").length;
  const followUpPendingCount = questions.filter(
    (q) => q.status === "follow-up-pending"
  ).length;
  const followUpSolvedCount = questions.filter(
    (q) => q.status === "follow-up-solved"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full text-center border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">
          Question & Answer Management ({questions.length} Total)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-yellow-700">Pending</p>
            <p className="text-2xl font-bold text-yellow-800">{pendingCount}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-green-700">Solved</p>
            <p className="text-2xl font-bold text-green-800">{solvedCount}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-orange-700">
              Follow-up Pending
            </p>
            <p className="text-2xl font-bold text-orange-800">
              {followUpPendingCount}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-blue-700">
              Follow-up Solved
            </p>
            <p className="text-2xl font-bold text-blue-800">
              {followUpSolvedCount}
            </p>
          </div>
        </div>
        {questions.length === 0 ? (
          <p className="text-lg text-gray-700">No questions asked yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-purple-100 border-b border-purple-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Question
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Student Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Teacher Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {questions.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.description.substring(0, 50)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.studentEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.solvedByTeacher || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === "solved" ||
                          item.status === "follow-up-solved"
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

// MoneyFlowManagement Component - Admin view for money flow
const MoneyFlowManagement = ({ setCurrentPage, availableCourses }) => {
  const [enrollments, setEnrollments] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const storedEnrollments =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrollments(storedEnrollments);

    const revenue = storedEnrollments.reduce((sum, enrollment) => {
      // Find the price from the availableCourses prop
      const coursePrice =
        availableCourses.find((c) => c.courseName === enrollment.courseName)
          ?.priceText || "0 BDT";
      const priceValue = parseInt(coursePrice.replace(" BDT", "")) || 0;
      return sum + priceValue;
    }, 0);
    setTotalRevenue(revenue);
  }, [availableCourses]); // Depend on availableCourses to re-calculate if courses change

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
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// AdminDashboard Component - Main dashboard for admin
const AdminDashboard = ({ setCurrentPage, availableCourses }) => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [pendingQuestionsCount, setPendingQuestionsCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch student count
    const students =
      JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
    setStudentCount(students.length);

    // Fetch teacher count (only active teachers)
    const teachers =
      JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
    const activeTeachers = teachers.filter(
      (teacher) => teacher.isActive !== false
    ); // Default to active if property is missing
    setTeacherCount(activeTeachers.length);

    // Fetch course count (unique enrolled courses)
    // Now using availableCourses from props, which is the main course list
    setCourseCount(availableCourses.length);

    // Fetch pending questions count
    const questions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const pending = questions.filter(
      (q) => q.status === "pending" || q.status === "follow-up-pending"
    );
    setPendingQuestionsCount(pending.length);

    // Calculate total revenue
    const enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const revenue = enrolledCourses.reduce((sum, enrollment) => {
      const coursePrice =
        availableCourses.find((c) => c.courseName === enrollment.courseName)
          ?.priceText || "0 BDT";
      const priceValue = parseInt(coursePrice.replace(" BDT", "")) || 0;
      return sum + priceValue;
    }, 0);
    setTotalRevenue(revenue);
  }, [availableCourses]); // Depend on availableCourses to re-calculate if courses change

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-6xl w-full text-center border border-red-200">
        <h2 className="text-4xl font-bold text-red-600 mb-8">
          Admin Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Students ({studentCount})
            </h3>
            <p className="text-gray-600">Manage student accounts and data.</p>
            <button
              onClick={() => setCurrentPage("admin-students")}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              View Students
            </button>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Teachers ({teacherCount})
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

          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
              Courses ({courseCount})
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

          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">
              Questions & Answers ({pendingQuestionsCount} Pending)
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

          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-red-700 mb-3">
              Money Flow ({totalRevenue} BDT)
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

// AskDoubtForm Component - Allows students to ask questions
const AskDoubtForm = ({
  setCurrentPage,
  selectedCourse,
  selectedSubject,
  loggedInUser,
  isFollowUp = false, // New prop to indicate if it's a follow-up
  originalQuestion = null, // Original question object for follow-ups
  addNotification, // Passed from App
  preselectedCourseName = null, // New prop for pre-selecting course
  preselectedSubjectName = null, // New prop for pre-selecting subject
}) => {
  const [doubtDescription, setDoubtDescription] = useState("");
  const [localSelectedCourse, setLocalSelectedCourse] = useState(
    preselectedCourseName || selectedCourse || ""
  );
  const [localSelectedSubject, setLocalSelectedSubject] = useState(
    preselectedSubjectName || selectedSubject || ""
  );
  const [subjectsForCourse, setSubjectsForCourse] = useState([]);

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

  useEffect(() => {
    if (localSelectedCourse) {
      setSubjectsForCourse(courseSubjectsData[localSelectedCourse] || []);
    } else {
      setSubjectsForCourse([]);
    }
  }, [localSelectedCourse]);

  const handleDescriptionChange = (e) => {
    setDoubtDescription(e.target.value);
    if (e.target.value.trim()) {
      setError("");
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
      setError("Please write your doubt description.");
      setIsPosted(false);
      return;
    }
    if (!localSelectedCourse) {
      setError("Please select a course.");
      setIsPosted(false);
      return;
    }
    if (!localSelectedSubject) {
      setError("Please select a subject.");
      setIsPosted(false);
      return;
    }

    const existingQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const newQuestion = {
      id: Date.now(),
      studentEmail: loggedInUser.email, // Tag question with student's email
      course: localSelectedCourse,
      subject: localSelectedSubject,
      description: doubtDescription,
      timestamp: new Date().toLocaleString(),
      status: isFollowUp ? "follow-up-pending" : "pending", // Set status based on isFollowUp
      solution: "",
      solvedByTeacher: isFollowUp ? originalQuestion.solvedByTeacher : null, // Assign to original solver
      attachments: {
        image: selectedImage ? selectedImage.name : null,
        voice: selectedVoice ? selectedVoice.name : null,
        video: selectedVideo ? selectedVideo.name : null,
        file: selectedFile ? selectedFile.name : null,
      },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
      originalQuestionId: isFollowUp ? originalQuestion.id : null, // Link to original question
    };
    const updatedQuestions = [newQuestion, ...existingQuestions];

    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );

    console.log("Doubt Posted:", newQuestion);
    setIsPosted(true);
    setError("");
    setDoubtDescription("");
    setSelectedImage(null);
    setSelectedVoice(null);
    setSelectedVideo(null);
    setSelectedFile(null);

    // Send notification to the teacher if it's a follow-up
    if (isFollowUp && originalQuestion.solvedByTeacher) {
      addNotification(
        originalQuestion.solvedByTeacher, // Recipient is the teacher
        newQuestion.id, // Notification links to the new follow-up question
        `Student "${
          loggedInUser.email
        }" asked a follow-up question on your solved question: "${newQuestion.description.substring(
          0,
          30
        )}..."`
      );
    }

    setTimeout(() => {
      // If it's a follow-up, go back to question history. Otherwise, student dashboard.
      if (isFollowUp) {
        setCurrentPage("question-history");
      } else {
        setCurrentPage("student-dashboard");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-yellow-200">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">
          {isFollowUp ? "Ask a Follow-up Question" : "Ask a Doubt"}
        </h2>
        {isFollowUp && originalQuestion && (
          <div className="mb-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-left">
            <p className="text-gray-800 font-semibold mb-1">
              Original Question:
            </p>
            <p className="text-gray-700 text-base">
              {originalQuestion.description}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Solved by: {originalQuestion.solvedByTeacher}
            </p>
          </div>
        )}

        <p className="text-lg text-gray-700 mb-8">
          Type your question below and our expert teachers will help you!
        </p>
        {isPosted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your doubt has been posted. Redirecting to dashboard...
            </span>
          </div>
        )}
        <form onSubmit={handlePostDoubt} className="space-y-6">
          <div>
            <label
              htmlFor="selectCourse"
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
            >
              Select Course:
            </label>
            <select
              id="selectCourse"
              value={localSelectedCourse}
              onChange={(e) => {
                setLocalSelectedCourse(e.target.value);
                setError("");
              }}
              disabled={!!preselectedCourseName || !!selectedCourse} // Disable if preselected or already selected
              className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                error && !localSelectedCourse
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="">-- Select a Course --</option>
              {loggedInUser &&
                JSON.parse(localStorage.getItem("enrolledCourses"))
                  ?.filter(
                    (enrollment) =>
                      enrollment.studentEmail === loggedInUser.email
                  )
                  .map((enrollment, index) => (
                    <option key={index} value={enrollment.courseName}>
                      {enrollment.courseName}
                    </option>
                  ))}
            </select>
            {error && !localSelectedCourse && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          {localSelectedCourse && (
            <div>
              <label
                htmlFor="selectSubject"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Select Subject:
              </label>
              <select
                id="selectSubject"
                value={localSelectedSubject}
                onChange={(e) => {
                  setLocalSelectedSubject(e.target.value);
                  setError("");
                }}
                disabled={!!preselectedSubjectName} // Disable if preselected
                className={`shadow-sm appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 ${
                  error && !localSelectedSubject
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">-- Select a Subject --</option>
                {subjectsForCourse.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {error && !localSelectedSubject && (
                <p className="text-red-500 text-xs italic mt-1 text-left">
                  {error}
                </p>
              )}
            </div>
          )}

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
                error && !doubtDescription.trim()
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            ></textarea>
            {error && doubtDescription.trim() === "" && (
              <p className="text-red-500 text-xs italic mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center space-x-4 mt-6">
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
              {isFollowUp ? "Post Follow-up Question" : "Post Question"}
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

// FollowUpQuestionForm Modal
const FollowUpQuestionForm = ({
  originalQuestion,
  loggedInUser,
  onClose,
  addNotification,
  setCurrentPage,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <AskDoubtForm
        setCurrentPage={setCurrentPage}
        preselectedCourseName={originalQuestion.course} // Pre-select course for follow-up
        preselectedSubjectName={originalQuestion.subject} // Pre-select subject for follow-up
        loggedInUser={loggedInUser}
        isFollowUp={true}
        originalQuestion={originalQuestion}
        addNotification={addNotification}
      />
      {/* A simple close button for the modal, as AskDoubtForm handles its own submission/cancellation */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

// QuestionHistoryPage Component - Displays a student's question history
const QuestionHistoryPage = ({
  setCurrentPage,
  loggedInUser,
  highlightQuestionId,
  setHighlightQuestionId,
  addNotification, // Pass addNotification
  filterByCourseName = null, // New prop to filter questions by course
}) => {
  const [questions, setQuestions] = useState([]);
  const [showFollowUpForm, setShowFollowUpForm] = useState(false);
  const [selectedOriginalQuestion, setSelectedOriginalQuestion] =
    useState(null);
  const questionRefs = useRef({});

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    // Filter questions by the logged-in student's email
    let studentQuestions = storedQuestions.filter(
      (q) => q.studentEmail === loggedInUser.email
    );

    // Apply course filter if provided
    if (filterByCourseName) {
      studentQuestions = studentQuestions.filter(
        (q) => q.course === filterByCourseName
      );
    }

    // Separate root questions and their follow-ups for display
    const rootQuestions = studentQuestions.filter((q) => !q.originalQuestionId);
    const followUpQuestions = studentQuestions.filter(
      (q) => q.originalQuestionId
    );

    const questionsWithFollowUps = rootQuestions.map((q) => ({
      ...q,
      followUps: followUpQuestions
        .filter((fu) => fu.originalQuestionId === q.id)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)), // Sort follow-ups by time
    }));

    setQuestions(questionsWithFollowUps);
  }, [loggedInUser, showFollowUpForm, filterByCourseName]); // Re-fetch when follow-up form is closed or course filter changes

  useEffect(() => {
    if (highlightQuestionId && questionRefs.current[highlightQuestionId]) {
      questionRefs.current[highlightQuestionId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // Optionally, remove highlight after a few seconds
      const timer = setTimeout(() => {
        setHighlightQuestionId(null);
      }, 3000); // Remove highlight after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [highlightQuestionId]);

  const handleMarkSatisfied = (questionId) => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    const updatedQuestions = storedQuestions.map((q) =>
      q.id === questionId ? { ...q, status: "satisfied" } : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, status: "satisfied" } : q))
    );
  };

  const handleAskFollowUp = (question) => {
    setSelectedOriginalQuestion(question);
    setShowFollowUpForm(true);
  };

  const handleCloseFollowUpForm = () => {
    setShowFollowUpForm(false);
    setSelectedOriginalQuestion(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full border border-purple-200">
        <h2 className="text-4xl font-bold text-purple-600 mb-6 text-center">
          {filterByCourseName
            ? `${filterByCourseName} Questions`
            : "Your Question History"}
        </h2>
        {questions.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">
            {filterByCourseName
              ? `You haven't asked any questions for ${filterByCourseName} yet.`
              : "You haven't asked any questions yet."}
          </p>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                ref={(el) => (questionRefs.current[question.id] = el)}
                className={`bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100 text-left transition-all duration-500 ${
                  highlightQuestionId === question.id
                    ? "ring-4 ring-yellow-500 ring-opacity-75"
                    : ""
                }`}
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
                    {question.solvedByTeacher && (
                      <p className="text-xs text-gray-500 mt-1">
                        Solved by: {question.solvedByTeacher}
                      </p>
                    )}
                    <div className="flex space-x-2 mt-3 justify-end">
                      {question.status !== "satisfied" && (
                        <button
                          onClick={() => handleMarkSatisfied(question.id)}
                          className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
                        >
                          Mark as Satisfied
                        </button>
                      )}
                      <button
                        onClick={() => handleAskFollowUp(question)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
                      >
                        Ask Follow-up
                      </button>
                    </div>
                  </div>
                )}
                {question.followUps && question.followUps.length > 0 && (
                  <div className="mt-4 border-t border-gray-200 pt-4 space-y-3">
                    <h4 className="text-md font-bold text-gray-800">
                      Follow-up Questions:
                    </h4>
                    {question.followUps.map((fu) => (
                      <div
                        key={fu.id}
                        className={`bg-gray-100 p-3 rounded-md border border-gray-200 text-left ${
                          highlightQuestionId === fu.id
                            ? "ring-4 ring-blue-500 ring-opacity-75"
                            : ""
                        }`}
                        ref={(el) => (questionRefs.current[fu.id] = el)}
                      >
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">Follow-up:</span>{" "}
                          {fu.description}
                        </p>
                        {fu.attachments && (
                          <div className="text-xs text-gray-600 mt-1">
                            {fu.attachments.image && (
                              <p>Image: {fu.attachments.image}</p>
                            )}
                            {fu.attachments.voice && (
                              <p>Voice: {fu.attachments.voice}</p>
                            )}
                            {fu.attachments.video && (
                              <p>Video: {fu.attachments.video}</p>
                            )}
                            {fu.attachments.file && (
                              <p>File: {fu.attachments.file}</p>
                            )}
                          </div>
                        )}
                        {fu.status === "follow-up-solved" && fu.solution && (
                          <div className="mt-2 p-2 bg-gray-200 rounded-md">
                            <p className="text-gray-800 text-sm font-semibold">
                              Follow-up Solution:
                            </p>
                            <p className="text-gray-700 text-xs">
                              {fu.solution}
                            </p>
                            {fu.solutionAttachments && (
                              <div className="text-xs text-gray-600 mt-1">
                                {fu.solutionAttachments.image && (
                                  <p>
                                    Solution Image:{" "}
                                    {fu.solutionAttachments.image}
                                  </p>
                                )}
                                {fu.solutionAttachments.voice && (
                                  <p>
                                    Solution Voice:{" "}
                                    {fu.solutionAttachments.voice}
                                  </p>
                                )}
                                {fu.solutionAttachments.video && (
                                  <p>
                                    Solution Video:{" "}
                                    {fu.solutionAttachments.video}
                                  </p>
                                )}
                                {fu.solutionAttachments.file && (
                                  <p>
                                    Solution File: {fu.solutionAttachments.file}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          Status:{" "}
                          <span
                            className={`font-semibold ${
                              fu.status === "follow-up-pending"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {fu.status
                              .replace("follow-up-", "")
                              .charAt(0)
                              .toUpperCase() +
                              fu.status.replace("follow-up-", "").slice(1)}
                          </span>{" "}
                          | Asked: {fu.timestamp}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Asked: {question.timestamp} | Status:{" "}
                  <span
                    className={`font-semibold ${
                      question.status === "pending"
                        ? "text-yellow-600"
                        : question.status === "solved"
                        ? "text-blue-600"
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
      {showFollowUpForm && (
        <FollowUpQuestionForm
          originalQuestion={selectedOriginalQuestion}
          loggedInUser={loggedInUser}
          onClose={handleCloseFollowUpForm}
          addNotification={addNotification}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

// Data for course subjects
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
    "Mathematics 1st Paper",
    "Bangla 1st Paper",
    "English 1st Paper",
    "ICT",
  ],
};

// CourseDetailsPage Component - Displays course subjects and options to ask doubt/view history
const CourseDetailsPage = ({
  courseName,
  setCurrentPage,
  loggedInUser,
  addNotification,
  setHighlightQuestionId,
}) => {
  const subjects = courseSubjectsData[courseName] || [];

  const handleAskDoubtClick = () => {
    // Navigate to AskDoubtForm, pre-filling the course name
    setCurrentPage("ask-doubt-for-course");
  };

  const handleViewQuestionsClick = () => {
    // Navigate to QuestionHistoryPage, filtering by this course
    setCurrentPage("question-history-for-course");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center border border-blue-200">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          {courseName} Details
        </h2>
        {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Subjects:</h3>
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
        )} */}

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleAskDoubtClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Ask a Doubt for this Course
          </button>
          <button
            onClick={handleViewQuestionsClick}
            className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View Questions for this Course
          </button>
        </div>

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

// StudentDashboard Component - Main dashboard for students
const StudentDashboard = ({
  setCurrentPage,
  setSelectedCourseForSubjects,
  loggedInUser,
  setIsCoursesOnlyView, // Receive the setter
}) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Filter enrolled courses by the logged-in student's email
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const studentEnrolledCourses = storedEnrolledCourses
      .filter((enrollment) => enrollment.studentEmail === loggedInUser.email)
      .map((enrollment) => enrollment.courseName);
    setEnrolledCourses(studentEnrolledCourses);
  }, [loggedInUser]);

  const handleGoToCourse = (courseName) => {
    setSelectedCourseForSubjects(courseName); // This will now be used by CourseDetailsPage
    setCurrentPage("course-details"); // Navigate to the new CourseDetailsPage
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
                    setIsCoursesOnlyView(true); // Set to true to hide hero section
                    setCurrentPage("home-and-scroll"); // Navigate to home and scroll
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
                    setIsCoursesOnlyView(true); // Set to true to hide hero section
                    setCurrentPage("home-and-scroll"); // Navigate to home and scroll
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

// EnrollmentForm Component - Handles course enrollment
const EnrollmentForm = ({
  courseName,
  setCurrentPage,
  loggedInUser,
  availableCourses,
}) => {
  const [formData, setFormData] = useState({
    email: loggedInUser ? loggedInUser.email : "", // Pre-fill email if logged in
    paymentMethod: "",
    transactionId: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  useEffect(() => {
    // Check if the user is already enrolled in this course
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
      console.log("Enrollment Data:", { courseName, ...formData });

      const existingEnrolledCourses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];
      const updatedEnrolledCourses = [
        ...existingEnrolledCourses,
        {
          studentEmail: loggedInUser.email,
          courseName: courseName,
          ...formData,
          date: new Date().toISOString().split("T")[0], // Add current date
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
              readOnly={!!loggedInUser} // Make email read-only if user is logged in
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
              disabled={isAlreadyEnrolled} // Disable purchase if already enrolled
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

// SolutionForm Component - Allows teachers to provide solutions
const SolutionForm = ({
  question,
  onSolve,
  onCancel,
  loggedInUser,
  addNotification,
}) => {
  const [solutionText, setSolutionText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
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
    onSolve(question.id, solutionText, solutionAttachments, loggedInUser.email); // Pass teacher's email

    // Add notification for the student
    const notificationMessage =
      question.status === "follow-up-pending"
        ? `Your follow-up question has been solved: "${question.description.substring(
            0,
            30
          )}..."`
        : `Your question "${question.description.substring(
            0,
            30
          )}..." has been solved!`;

    addNotification(
      question.studentEmail,
      question.originalQuestionId || question.id, // Link to original question if it's a follow-up
      notificationMessage,
      question.status === "follow-up-pending" ? "follow-up-student" : "solution" // Type of notification
    );

    setSelectedImage(null);
    setSelectedVoice(null);
    setSelectedVideo(null);
    setSelectedFile(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-green-200">
        <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">
          {question.status === "follow-up-pending"
            ? "Solve Follow-up Question"
            : "Solve Question"}
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
            Asked by: {question.studentEmail} on: {question.timestamp}
          </p>
          {question.originalQuestionId && (
            <p className="text-gray-500 text-xs mt-1 font-semibold">
              (This is a follow-up to original question ID:{" "}
              {question.originalQuestionId})
            </p>
          )}
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

          <div className="flex items-center justify-center space-x-4 mt-6">
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

// PendingQuestionsDashboard Component - Displays pending questions for teachers
const PendingQuestionsDashboard = ({
  setCurrentPage,
  loggedInUser,
  addNotification,
  highlightQuestionId, // New prop for highlighting specific question
  setHighlightQuestionId, // New prop for clearing highlight
}) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [solvingQuestion, setSolvingQuestion] = useState(null);
  const questionRefs = useRef({}); // For scrolling to highlighted question

  // Sample questions to populate if local storage is empty
  const sampleQuestions = [
    {
      id: 1,
      studentEmail: "student1@example.com",
      course: "Engineering + Biology Admission Program 2025",
      subject: "Physics 1st Paper",
      description: "What is the principle of superposition of waves?",
      timestamp: "2025-07-22, 10:00:00 AM",
      status: "pending",
      solution: "",
      solvedByTeacher: null,
      attachments: { image: null, voice: null, video: null, file: null },
      solutionAttachments: {
        image: null,
        voice: null,
        video: null,
        file: null,
      },
      originalQuestionId: null,
    },
    {
      id: 2,
      studentEmail: "student2@example.com",
      course: "SSC Full Course (Science Group)",
      subject: "Chemistry",
      description: "Explain the process of electrolysis of water.",
      timestamp: "2025-07-22, 11:30:00 AM",
      status: "pending",
      solution: "",
      solvedByTeacher: null,
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
      originalQuestionId: null,
    },
    {
      id: 3,
      studentEmail: "student1@example.com",
      course: "HSC 1st Year (Prime Batch)",
      subject: "Biology 1st Paper",
      description: "Describe the structure and function of mitochondria.",
      timestamp: "2025-07-22, 01:00:00 PM",
      status: "pending",
      solution: "",
      solvedByTeacher: null,
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
      originalQuestionId: null,
    },
  ];

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    if (storedQuestions.length === 0) {
      localStorage.setItem(
        "doubtDeskQuestions",
        JSON.stringify(sampleQuestions)
      );
      setAllQuestions(sampleQuestions);
    } else {
      setAllQuestions(storedQuestions);
    }
  }, []);

  useEffect(() => {
    if (highlightQuestionId && questionRefs.current[highlightQuestionId]) {
      questionRefs.current[highlightQuestionId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // Clear highlight after a few seconds
      const timer = setTimeout(() => {
        setHighlightQuestionId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightQuestionId]);

  const handleSolveClick = (question) => {
    setSolvingQuestion(question);
  };

  const handleSolutionSubmit = (
    questionId,
    solutionText,
    solutionAttachments,
    solvedByTeacherEmail
  ) => {
    const updatedQuestions = allQuestions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            status:
              q.status === "follow-up-pending" ? "follow-up-solved" : "solved", // Update status correctly
            solution: solutionText,
            solutionAttachments: solutionAttachments,
            solvedByTeacher: solvedByTeacherEmail,
          }
        : q
    );
    localStorage.setItem(
      "doubtDeskQuestions",
      JSON.stringify(updatedQuestions)
    );
    setAllQuestions(updatedQuestions);
    setSolvingQuestion(null);
  };

  const handleCancelSolve = () => {
    setSolvingQuestion(null);
  };

  const pendingQuestions = allQuestions.filter(
    (q) =>
      q.status === "pending" ||
      (q.status === "follow-up-pending" &&
        q.solvedByTeacher === loggedInUser.email) // Only show follow-ups assigned to this teacher
  );

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
                ref={(el) => (questionRefs.current[question.id] = el)}
                className={`bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 flex flex-col md:flex-row justify-between items-start md:items-center ${
                  highlightQuestionId === question.id
                    ? "ring-4 ring-orange-500 ring-opacity-75"
                    : ""
                }`}
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
                    Asked by: {question.studentEmail} on: {question.timestamp}
                  </p>
                  {question.originalQuestionId && (
                    <p className="text-orange-600 text-sm font-semibold mt-1">
                      (Follow-up to original question ID:{" "}
                      {question.originalQuestionId})
                    </p>
                  )}
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
          loggedInUser={loggedInUser}
          addNotification={addNotification} // Pass addNotification here
        />
      )}
    </div>
  );
};

// SolvedQuestionsDashboard Component - Displays solved questions for teachers
const SolvedQuestionsDashboard = ({ setCurrentPage, loggedInUser }) => {
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [viewingSolution, setViewingSolution] = useState(null);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
    // Filter solved questions by the logged-in teacher's email
    const filteredSolvedQuestions = storedQuestions.filter(
      (q) =>
        (q.status === "solved" || q.status === "follow-up-solved") &&
        q.solvedByTeacher === loggedInUser.email
    );
    setSolvedQuestions(filteredSolvedQuestions);
  }, [loggedInUser]);

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
            No questions solved by you yet.
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
                    Asked by: {question.studentEmail} on: {question.timestamp}
                  </p>
                  {question.originalQuestionId && (
                    <p className="text-blue-600 text-sm font-semibold mt-1">
                      (Follow-up to original question ID:{" "}
                      {question.originalQuestionId})
                    </p>
                  )}
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
              Question Solution
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
                Asked by: {viewingSolution.studentEmail} on:{" "}
                {viewingSolution.timestamp}
              </p>
              {viewingSolution.originalQuestionId && (
                <p className="text-gray-500 text-xs mt-1 font-semibold">
                  (Follow-up to original question ID:{" "}
                  {viewingSolution.originalQuestionId})
                </p>
              )}
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
              {viewingSolution.solvedByTeacher && (
                <p className="text-xs text-gray-500 mt-1">
                  Solved by: {viewingSolution.solvedByTeacher}
                </p>
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

// StudentProfilePage Component
const StudentProfilePage = ({ setCurrentPage, loggedInUser }) => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    if (loggedInUser && loggedInUser.role === "student") {
      const students =
        JSON.parse(localStorage.getItem("doubtDeskStudents")) || [];
      const currentStudent = students.find(
        (s) => s.email === loggedInUser.email
      );
      setStudentInfo(currentStudent);

      const storedEnrolledCourses =
        JSON.parse(localStorage.getItem("enrolledCourses")) || [];
      const studentCourses = storedEnrolledCourses
        .filter((enrollment) => enrollment.studentEmail === loggedInUser.email)
        .map((enrollment) => enrollment.courseName);
      setEnrolledCourses(studentCourses);
    }
  }, [loggedInUser]);

  if (!studentInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <p className="text-lg text-gray-700">Loading student profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full text-center border border-indigo-200">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">
          Student Profile
        </h2>
        <div className="space-y-4 text-left">
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Email:</span> {studentInfo.email}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Grade/Level:</span>{" "}
            {studentInfo.gradeLevel}
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Enrolled Courses:
            </h3>
            {enrolledCourses.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {enrolledCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Not enrolled in any courses.</p>
            )}
          </div>
        </div>
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

// TeacherProfilePage Component
const TeacherProfilePage = ({ setCurrentPage, loggedInUser }) => {
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [solvedQuestionsCount, setSolvedQuestionsCount] = useState(0);

  useEffect(() => {
    if (loggedInUser && loggedInUser.role === "teacher") {
      const teachers =
        JSON.parse(localStorage.getItem("doubtDeskTeachers")) || [];
      const currentTeacher = teachers.find(
        (t) => t.email === loggedInUser.email
      );
      setTeacherInfo(currentTeacher);

      const allQuestions =
        JSON.parse(localStorage.getItem("doubtDeskQuestions")) || [];
      const solvedByThisTeacher = allQuestions.filter(
        (q) =>
          (q.status === "solved" || q.status === "follow-up-solved") &&
          q.solvedByTeacher === loggedInUser.email
      );
      setSolvedQuestionsCount(solvedByThisTeacher.length);
    }
  }, [loggedInUser]);

  if (!teacherInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <p className="text-lg text-gray-700">Loading teacher profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full text-center border border-green-200">
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          Teacher Profile
        </h2>
        <div className="space-y-4 text-left">
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Email:</span> {teacherInfo.email}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Institute:</span>{" "}
            {teacherInfo.institute}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Questions Solved:</span>{" "}
            {solvedQuestionsCount}
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage("teacher-dashboard-pending")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

// AdminProfilePage Component
const AdminProfilePage = ({ setCurrentPage, loggedInUser }) => {
  const [adminInfo, setAdminInfo] = useState(null);

  useEffect(() => {
    if (loggedInUser && loggedInUser.role === "admin") {
      const admins = JSON.parse(localStorage.getItem("doubtDeskAdmins")) || [];
      const currentAdmin = admins.find((a) => a.email === loggedInUser.email);

      // Fallback to hardcoded admin if not found in local storage
      if (!currentAdmin && loggedInUser.email === "admin@doubtdesk.com") {
        setAdminInfo({
          name: "DoubtDesk Admin",
          phoneNumber: "01XXXXXXXXX",
          email: "admin@doubtdesk.com",
        });
      } else {
        setAdminInfo(currentAdmin);
      }
    }
  }, [loggedInUser]);

  if (!adminInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <p className="text-lg text-gray-700">Loading admin profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full text-center border border-red-200">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Admin Profile</h2>
        <div className="space-y-4 text-left">
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Name:</span>{" "}
            {adminInfo.name || "N/A"}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Email:</span> {adminInfo.email}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-semibold">Phone Number:</span>{" "}
            {adminInfo.phoneNumber || "N/A"}
          </p>
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

// Main App Component - Manages routing and global state
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [courseToEnroll, setCourseToEnroll] = useState(null);
  const [selectedCourseForSubjects, setSelectedCourseForSubjects] =
    useState(null);
  const [doubtDetails, setDoubtDetails] = useState({
    course: null,
    subject: null,
  });
  const [loggedInUser, setLoggedInUser] = useState(null); // { email: 'user@example.com', role: 'student' }
  const coursesSectionRef = useRef(null);
  const [isCoursesOnlyView, setIsCoursesOnlyView] = useState(false); // New state for hero section visibility
  const [notifications, setNotifications] = useState([]);
  const [highlightQuestionId, setHighlightQuestionId] = useState(null);
  // State for managing courses, initialized from localStorage or sample data
  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem("doubtDeskCourses");
    return storedCourses ? JSON.parse(storedCourses) : initialCoursesData;
  });

  // Effect to persist courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("doubtDeskCourses", JSON.stringify(courses));
  }, [courses]);

  // Clear local storage on initial load/refresh
  // Removed this to allow persistence of courses, teachers, students, questions
  // and enrollments across sessions.
  /*
  useEffect(() => {
    localStorage.clear();
    console.log("Local storage cleared on app load.");
  }, []);
  */

  // Load notifications from local storage on login
  useEffect(() => {
    if (loggedInUser && loggedInUser.email) {
      const storedNotifications =
        JSON.parse(localStorage.getItem("doubtDeskNotifications")) || [];
      const userNotifications = storedNotifications.filter(
        (notif) => notif.recipientEmail === loggedInUser.email
      );
      setNotifications(userNotifications);
    } else {
      setNotifications([]); // Clear notifications if no user is logged in
    }
  }, [loggedInUser]);

  // Save notifications to local storage whenever they change
  useEffect(() => {
    if (loggedInUser && loggedInUser.email) {
      const storedNotifications =
        JSON.parse(localStorage.getItem("doubtDeskNotifications")) || [];
      // Remove current user's old notifications and add updated ones
      const otherUserNotifications = storedNotifications.filter(
        (notif) => notif.recipientEmail !== loggedInUser.email
      );
      localStorage.setItem(
        "doubtDeskNotifications",
        JSON.stringify([...otherUserNotifications, ...notifications])
      );
    }
  }, [notifications, loggedInUser]);

  useEffect(() => {
    if (currentPage === "home-and-scroll" && coursesSectionRef.current) {
      coursesSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setCurrentPage("home");
    }
  }, [currentPage]);

  const addNotification = (
    recipientEmail,
    questionId,
    message,
    type = "solution"
  ) => {
    const newNotification = {
      id: Date.now(),
      recipientEmail,
      questionId,
      message,
      read: false,
      timestamp: new Date().toLocaleString(),
      type, // 'solution' or 'follow-up-teacher' or 'follow-up-student'
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const handleEnrollClick = (courseName) => {
    setCourseToEnroll(courseName);
    // If not logged in, redirect to student login first
    if (!loggedInUser || loggedInUser.role !== "student") {
      setCurrentPage("student-login-for-enroll"); // A new state to indicate login for enrollment
    } else {
      setCurrentPage("enrollment-form");
    }
  };

  const getEnrolledCoursesForCurrentUser = () => {
    if (!loggedInUser || loggedInUser.role !== "student") return [];
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    return storedEnrolledCourses
      .filter((enrollment) => enrollment.studentEmail === loggedInUser.email)
      .map((enrollment) => enrollment.courseName);
  };

  const addCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
      case "home-and-scroll":
        const currentUserEnrolledCourses = getEnrolledCoursesForCurrentUser();
        // Filter courses to show only active ones on the home page
        const activeCourses = courses.filter((course) => course.isActive);
        return (
          <main className="p-8 text-center flex-grow">
            {/* Conditionally render the hero section based on isCoursesOnlyView */}

            {!isCoursesOnlyView && (
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  From Confusion to Clarity — DoubtDesk
                </h1>
                <div className="flex flex-col md:flex-row mt-12 bg-white rounded-lg shadow-md max-w-6xl mx-auto overflow-hidden">
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h1 className="text-lg text-gray-700 font-bold mb-2">
                      DoubtDesk – Your Personal Doubt-Solving Companion
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      Struggling with a question? DoubtDesk helps students get
                      clear, subject-specific answers from expert teachers.
                      Simply post your doubt, and let our dedicated educators
                      guide you – quickly and precisely.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Explore our courses, connect with teachers, and don't let
                      any doubt stand in the way of achieving your academic
                      goals.
                    </p>
                  </div>

                  <div className="md:w-1/2 h-full">
                    <img
                      src="stress.png"
                      alt="Student thinking"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/600x400/cccccc/000000?text=Image";
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <section
              id="courses-section"
              className={`mt-16 ${isCoursesOnlyView ? "mt-0" : ""}`} // Adjust margin if hero is hidden
              ref={coursesSectionRef}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-10">
                Our Popular Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {activeCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    topTitle={course.topTitle}
                    programTitle={course.programTitle}
                    courseName={course.courseName}
                    features={course.features}
                    priceText={course.priceText}
                    enrollButtonText={course.enrollButtonText}
                    onEnrollClick={handleEnrollClick}
                    isEnrolled={currentUserEnrolledCourses.includes(
                      course.courseName
                    )}
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
      case "admin-registration": // New case for admin registration
        return <AdminRegistrationForm setCurrentPage={setCurrentPage} />;
      case "student-login":
        return (
          <StudentLoginPage
            setCurrentPage={setCurrentPage}
            setLoggedInUser={setLoggedInUser}
          />
        );
      case "student-login-for-enroll": // New case for login before enrollment
        return (
          <StudentLoginPage
            setCurrentPage={(page) => {
              if (page === "student-dashboard") {
                setCurrentPage("enrollment-form"); // Redirect to enrollment form after successful login
              } else {
                setCurrentPage(page);
              }
            }}
            setLoggedInUser={setLoggedInUser}
            isEnrollmentFlow={true} // Indicate that this login is for enrollment
          />
        );
      case "teacher-login":
        return (
          <TeacherLoginPage
            setCurrentPage={setCurrentPage}
            setLoggedInUser={setLoggedInUser}
          />
        );
      case "admin-login": // New case for admin login
        return (
          <AdminLoginPage
            setCurrentPage={setCurrentPage}
            setLoggedInUser={setLoggedInUser}
          />
        );
      case "student-dashboard":
        return (
          <StudentDashboard
            setCurrentPage={setCurrentPage}
            setSelectedCourseForSubjects={setSelectedCourseForSubjects}
            loggedInUser={loggedInUser}
            setIsCoursesOnlyView={setIsCoursesOnlyView} // Pass the setter
          />
        );
      case "teacher-dashboard-pending":
        return (
          <PendingQuestionsDashboard
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            addNotification={addNotification} // Pass addNotification here
            highlightQuestionId={highlightQuestionId}
            setHighlightQuestionId={setHighlightQuestionId}
          />
        );
      case "teacher-dashboard-solved":
        return (
          <SolvedQuestionsDashboard
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
          />
        );
      case "admin-dashboard":
        return (
          <AdminDashboard
            setCurrentPage={setCurrentPage}
            availableCourses={courses}
          />
        );
      case "admin-students":
        return <StudentsManagement setCurrentPage={setCurrentPage} />;
      case "admin-teachers":
        return <TeachersManagement setCurrentPage={setCurrentPage} />;
      case "admin-courses":
        return (
          <CoursesManagement
            setCurrentPage={setCurrentPage}
            courses={courses}
            setCourses={setCourses}
          />
        );
      case "add-course-form": // New route for adding courses
        return (
          <AddCourseForm
            setCurrentPage={setCurrentPage}
            addCourse={addCourse}
          />
        );
      case "admin-qa":
        return <QuestionsAnswersManagement setCurrentPage={setCurrentPage} />;
      case "admin-money-flow":
        return (
          <MoneyFlowManagement
            setCurrentPage={setCurrentPage}
            availableCourses={courses}
          />
        );
      case "ask-doubt-for-course": // New route for asking doubt from course details
        return (
          <AskDoubtForm
            setCurrentPage={setCurrentPage}
            preselectedCourseName={selectedCourseForSubjects} // Pre-fill course
            loggedInUser={loggedInUser}
            addNotification={addNotification}
          />
        );
      case "question-history-for-course": // New route for question history from course details
        return (
          <QuestionHistoryPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            highlightQuestionId={highlightQuestionId}
            setHighlightQuestionId={setHighlightQuestionId}
            addNotification={addNotification}
            filterByCourseName={selectedCourseForSubjects} // Filter by selected course
          />
        );
      case "question-history": // Keep original route for general history
        return (
          <QuestionHistoryPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            highlightQuestionId={highlightQuestionId}
            setHighlightQuestionId={setHighlightQuestionId}
            addNotification={addNotification} // Pass addNotification
          />
        );
      case "enrollment-form":
        return (
          <EnrollmentForm
            courseName={courseToEnroll}
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            availableCourses={courses} // Pass all courses to enrollment form for price lookup
          />
        );
      case "course-details": // Updated route to the new CourseDetailsPage
        return (
          <CourseDetailsPage
            courseName={selectedCourseForSubjects}
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            addNotification={addNotification}
            setHighlightQuestionId={setHighlightQuestionId}
          />
        );
      case "student-profile":
        return (
          <StudentProfilePage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
          />
        );
      case "teacher-profile":
        return (
          <TeacherProfilePage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
          />
        );
      case "admin-profile":
        return (
          <AdminProfilePage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
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
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        setIsCoursesOnlyView={setIsCoursesOnlyView} // Pass the setter
        notifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
        clearNotifications={clearNotifications}
        setHighlightQuestionId={setHighlightQuestionId}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

// Navbar Component - Navigation bar
const Navbar = ({
  currentPage,
  setCurrentPage,
  loggedInUser,
  setLoggedInUser,
  setIsCoursesOnlyView, // Receive the setter
  notifications,
  markNotificationAsRead,
  clearNotifications,
  setHighlightQuestionId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const joinRef = useRef(null);
  const notificationsRef = useRef(null);

  const unreadNotificationsCount = notifications.filter(
    (notif) => !notif.read && notif.recipientEmail === loggedInUser?.email
  ).length;

  const scrollToCourses = (e) => {
    e.preventDefault();
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setIsJoinOpen(false);
  };

  const handleJoinOptionClick = (pageName) => {
    setCurrentPage(pageName);
    setIsOpen(false);
    setIsJoinOpen(false);
  };

  const handleNotificationClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const handleNotificationItemClick = (notification) => {
    markNotificationAsRead(notification.id);
    setHighlightQuestionId(notification.questionId); // Set the ID to highlight

    if (loggedInUser.role === "student") {
      setCurrentPage("question-history"); // Student goes to their question history
    } else if (loggedInUser.role === "teacher") {
      setCurrentPage("teacher-dashboard-pending"); // Teacher goes to pending questions
    }
    setIsNotificationsOpen(false); // Close notification dropdown
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentPage("home");
    setIsCoursesOnlyView(false); // Reset to show full home on logout
    clearNotifications(); // Clear notifications on logout
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (joinRef.current && !joinRef.current.contains(event.target)) {
        setIsJoinOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [joinRef, notificationsRef]);

  const isUserDashboardPage =
    loggedInUser &&
    (loggedInUser.role === "student" ||
      loggedInUser.role === "teacher" ||
      loggedInUser.role === "admin");
  const isTeacherDashboard = loggedInUser && loggedInUser.role === "teacher";
  const isAdminDashboard = loggedInUser && loggedInUser.role === "admin";
  const isStudentDashboard = loggedInUser && loggedInUser.role === "student";

  const getProfilePage = () => {
    if (loggedInUser && loggedInUser.role === "student") {
      return "student-profile";
    } else if (loggedInUser && loggedInUser.role === "teacher") {
      return "teacher-profile";
    } else if (loggedInUser && loggedInUser.role === "admin") {
      return "admin-profile";
    }
    return "home";
  };

  return (
    <nav className="bg-white shadow-md py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <a
            href="#"
            onClick={() => {
              setIsCoursesOnlyView(false); // Always show full home when clicking logo
              setCurrentPage(isUserDashboardPage ? getProfilePage() : "home");
            }}
            className="flex items-center text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <img
              src="logo.png"
              alt="DoubtDesk Logo"
              className="h-16 w-16 mr-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/32x32/cccccc/000000?text=Logo";
              }}
            />
            DoubtDesk
          </a>
        </div>

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
              {isAdminDashboard && (
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
              {(isStudentDashboard || isTeacherDashboard) && (
                <div className="relative" ref={notificationsRef}>
                  <button
                    onClick={handleNotificationClick}
                    className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
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
                    {unreadNotificationsCount > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {unreadNotificationsCount}
                      </span>
                    )}
                  </button>
                  {isNotificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {notifications.length === 0 ? (
                          <p className="px-4 py-2 text-sm text-gray-500">
                            No notifications.
                          </p>
                        ) : (
                          notifications
                            .filter(
                              (notif) =>
                                notif.recipientEmail === loggedInUser.email
                            )
                            .map((notif) => (
                              <div
                                key={notif.id}
                                onClick={() =>
                                  handleNotificationItemClick(notif)
                                }
                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                                  notif.read ? "bg-gray-50" : "font-semibold"
                                }`}
                                role="menuitem"
                              >
                                <p>{notif.message}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {notif.timestamp}
                                </p>
                              </div>
                            ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <a
                href="#"
                onClick={() => setCurrentPage(getProfilePage())}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-md font-medium hover:bg-red-600 transition-colors duration-200 shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="#courses-section"
                onClick={(e) => {
                  setIsCoursesOnlyView(false); // Always show full home when clicking Courses link
                  scrollToCourses(e);
                }}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-100"
              >
                Courses
              </a>
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
                        onClick={() => handleJoinOptionClick("teacher-login")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        Teacher
                      </a>
                      <a
                        href="#"
                        onClick={() => handleJoinOptionClick("student-login")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        Student
                      </a>
                      <a
                        href="#"
                        onClick={() => handleJoinOptionClick("admin-login")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                        role="menuitem"
                      >
                        Admin
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
      {/* Mobile menu, show/hide based on menu state. */}
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
                {isAdminDashboard && (
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
                {(isStudentDashboard || isTeacherDashboard) && (
                  <div className="relative">
                    <button
                      onClick={handleNotificationClick}
                      className="p-2 text-gray-700 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-200 w-full text-left relative"
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
                      {unreadNotificationsCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {unreadNotificationsCount}
                        </span>
                      )}
                    </button>
                    {isNotificationsOpen && (
                      <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {notifications.length === 0 ? (
                            <p className="px-4 py-2 text-sm text-gray-500">
                              No notifications.
                            </p>
                          ) : (
                            notifications
                              .filter(
                                (notif) =>
                                  notif.recipientEmail === loggedInUser.email
                              )
                              .map((notif) => (
                                <div
                                  key={notif.id}
                                  onClick={() =>
                                    handleNotificationItemClick(notif)
                                  }
                                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                                    notif.read ? "bg-gray-50" : "font-semibold"
                                  }`}
                                  role="menuitem"
                                >
                                  <p>{notif.message}</p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notif.timestamp}
                                  </p>
                                </div>
                              ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
                  onClick={handleLogout}
                  className="bg-red-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600 text-center w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="#courses-section"
                  onClick={(e) => {
                    setIsCoursesOnlyView(false); // Always show full home when clicking Courses link
                    scrollToCourses(e);
                  }}
                  className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Courses
                </a>
                <div className="relative" ref={joinRef}>
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
                        onClick={() => handleJoinOptionClick("teacher-login")}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                      >
                        Teacher
                      </a>
                      <a
                        href="#"
                        onClick={() => handleJoinOptionClick("student-login")}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                      >
                        Student
                      </a>
                      <a
                        href="#"
                        onClick={() => handleJoinOptionClick("admin-login")}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md"
                      >
                        Admin
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default App;
