import React, { useState } from "react";

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
      setCurrentPage("teacher-dashboard-pending");
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
        {/* {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Logging in. Redirecting to dashboard...
            </span>
          </div>
        )} */}
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

export default TeacherLoginPage;
