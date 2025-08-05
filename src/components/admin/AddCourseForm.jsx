import React, { useState } from "react";

const AddCourseForm = ({ setCurrentPage, addCourse }) => {
  const [formData, setFormData] = useState({
    topTitle: "",
    programTitle: "",
    courseName: "",
    features: "",
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
          .filter((f) => f.trim() !== ""),
        priceText: formData.priceText,
        enrollButtonText: "Enroll Now",
        isActive: true,
      };

      addCourse(newCourse);

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

export default AddCourseForm;
