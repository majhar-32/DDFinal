import React, { useState } from "react";

const AdminLoginPage = ({ setCurrentPage, setLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (
      email === HARDCODED_ADMIN_EMAIL &&
      password === HARDCODED_ADMIN_PASSWORD
    ) {
      setIsSubmitted(true);
      setLoggedInUser({ email: HARDCODED_ADMIN_EMAIL, role: "admin" });
      setTimeout(() => {
        setCurrentPage("admin-dashboard");
      }, 1500);
      return;
    }

    const existingAdmins =
      JSON.parse(localStorage.getItem("doubtDeskAdmins")) || [];
    const foundAdmin = existingAdmins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (foundAdmin) {
      setIsSubmitted(true);
      setLoggedInUser({ email: foundAdmin.email, role: "admin" });
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

export default AdminLoginPage;
