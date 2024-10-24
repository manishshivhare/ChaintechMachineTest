import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthForm from "../components/AuthForm";

const Login = () => {
  // Mock user data for demonstration purposes
  const mockUsers = [
    {
      email: "test@example.com",
      password: "password123",
      name: "Test User",
      phone: "1234567890",
    },
  ];

  // Used for programmatic navigation after successful login
  const navigate = useNavigate();

  // State to hold form data for email and password
  const [formData, setFormData] = useState({ email: "", password: "" });

  // State to store and display login errors
  const [error, setError] = useState("");

  // Handle form input changes and reset error state when user starts typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(""); // Clear the error when the user starts typing
  };

  // Handle form submission and mock authentication
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Find a user in mockUsers that matches the input email and password
    const user = mockUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      // If credentials are correct, store user info in localStorage and navigate to profile
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/profile");
    } else {
      // If credentials are incorrect, display an error message
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Login form container */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>

        {/* Reusing the AuthForm component with props */}
        <AuthForm
          formType="login"
          formData={formData}
          error={error}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />

        {/* Display mock user credentials for testing purposes */}
        <div className="mt-8 p-4 bg-teal-50 border border-teal-500 rounded-md">
          <h3 className="text-lg font-semibold text-teal-600">
            Mock Credentials
          </h3>
          <p>
            <strong>Email:</strong> {mockUsers[0].email}
          </p>
          <p>
            <strong>Password:</strong> {mockUsers[0].password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
