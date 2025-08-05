import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import CourseCard from "./components/common/CourseCard";
import TeacherRegistrationForm from "./components/auth/TeacherRegistrationForm";
import StudentRegistrationForm from "./components/auth/StudentRegistrationForm";
import AdminRegistrationForm from "./components/auth/AdminRegistrationForm";
import StudentLoginPage from "./components/auth/StudentLoginPage";
import TeacherLoginPage from "./components/auth/TeacherLoginPage";
import AdminLoginPage from "./components/auth/AdminLoginPage";
import StudentDashboard from "./components/student/StudentDashboard";
import PendingQuestionsDashboard from "./components/teacher/PendingQuestionsDashboard";
import SolvedQuestionsDashboard from "./components/teacher/SolvedQuestionsDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import StudentsManagement from "./components/admin/StudentsManagement";
import TeachersManagement from "./components/admin/TeachersManagement";
import CoursesManagement from "./components/admin/CoursesManagement";
import AddCourseForm from "./components/admin/AddCourseForm";
import QuestionsAnswersManagement from "./components/admin/QuestionsAnswersManagement";
import MoneyFlowManagement from "./components/admin/MoneyFlowManagement";
import AskDoubtForm from "./components/student/AskDoubtForm";
import QuestionHistoryPage from "./components/student/QuestionHistoryPage";
import CourseDetailsPage from "./components/student/CourseDetailsPage";
import EnrollmentForm from "./components/student/EnrollmentForm";
import StudentProfilePage from "./components/student/StudentProfilePage";
import TeacherProfilePage from "./components/teacher/TeacherProfilePage";
import AdminProfilePage from "./components/admin/AdminProfilePage";

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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [courseToEnroll, setCourseToEnroll] = useState(null);
  const [selectedCourseForSubjects, setSelectedCourseForSubjects] =
    useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const coursesSectionRef = useRef(null);
  const [isCoursesOnlyView, setIsCoursesOnlyView] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [highlightQuestionId, setHighlightQuestionId] = useState(null);
  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem("doubtDeskCourses");
    return storedCourses ? JSON.parse(storedCourses) : initialCoursesData;
  });

  useEffect(() => {
    localStorage.setItem("doubtDeskCourses", JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    if (loggedInUser && loggedInUser.email) {
      const storedNotifications =
        JSON.parse(localStorage.getItem("doubtDeskNotifications")) || [];
      const userNotifications = storedNotifications.filter(
        (notif) => notif.recipientEmail === loggedInUser.email
      );
      setNotifications(userNotifications);
    } else {
      setNotifications([]);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser && loggedInUser.email) {
      const storedNotifications =
        JSON.parse(localStorage.getItem("doubtDeskNotifications")) || [];
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
      type,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const markNotificationAsRead = (notificationId) => {
    // filter() ব্যবহার করে যে নোটিফিকেশনে ক্লিক করা হয়েছে, সেটিকে বাদ দিয়ে বাকিগুলো রাখা হচ্ছে
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== notificationId)
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const handleEnrollClick = (courseName) => {
    setCourseToEnroll(courseName);
    if (!loggedInUser || loggedInUser.role !== "student") {
      setCurrentPage("student-login-for-enroll");
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
        const activeCourses = courses.filter((course) => course.isActive);
        return (
          <main className="p-8 text-center flex-grow">
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
              className={`mt-16 ${isCoursesOnlyView ? "mt-0" : ""}`}
              ref={coursesSectionRef}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-10">
                Our Popular Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {activeCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    {...course}
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
      case "admin-registration":
        return <AdminRegistrationForm setCurrentPage={setCurrentPage} />;
      case "student-login":
        return (
          <StudentLoginPage
            setCurrentPage={setCurrentPage}
            setLoggedInUser={setLoggedInUser}
          />
        );
      case "student-login-for-enroll":
        return (
          <StudentLoginPage
            setCurrentPage={(page) => {
              if (page === "student-dashboard") {
                setCurrentPage("enrollment-form");
              } else {
                setCurrentPage(page);
              }
            }}
            setLoggedInUser={setLoggedInUser}
            isEnrollmentFlow={true}
          />
        );
      case "teacher-login":
        return (
          <TeacherLoginPage
            setCurrentPage={setCurrentPage}
            setLoggedInUser={setLoggedInUser}
          />
        );
      case "admin-login":
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
            setIsCoursesOnlyView={setIsCoursesOnlyView}
          />
        );
      case "teacher-dashboard-pending":
        return (
          <PendingQuestionsDashboard
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            addNotification={addNotification}
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
      case "add-course-form":
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
      case "ask-doubt-for-course":
        return (
          <AskDoubtForm
            setCurrentPage={setCurrentPage}
            preselectedCourseName={selectedCourseForSubjects}
            loggedInUser={loggedInUser}
            addNotification={addNotification}
          />
        );
      case "question-history-for-course":
        return (
          <QuestionHistoryPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            highlightQuestionId={highlightQuestionId}
            setHighlightQuestionId={setHighlightQuestionId}
            addNotification={addNotification}
            filterByCourseName={selectedCourseForSubjects}
          />
        );
      case "question-history":
        return (
          <QuestionHistoryPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            highlightQuestionId={highlightQuestionId}
            setHighlightQuestionId={setHighlightQuestionId}
            addNotification={addNotification}
          />
        );
      case "enrollment-form":
        return (
          <EnrollmentForm
            courseName={courseToEnroll}
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            availableCourses={courses}
          />
        );
      case "course-details":
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
        setIsCoursesOnlyView={setIsCoursesOnlyView}
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

export default App;
