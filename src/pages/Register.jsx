import React, { useState } from "react"; // Import React and useState hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import AuthForm from "../components/AuthForm"; // Import the AuthForm component for the registration form

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  
  const [error, setError] = useState(""); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading state during submission

  // Function to validate form input fields
  const validateForm = () => {
    // Check if all fields are filled
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.phone
    ) {
      setError("Please fill in all fields"); // Set error message if fields are empty
      return false;
    }

    // Validate email format
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address"); // Set error message for invalid email
      return false;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long"); // Set error message for short password
      return false;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[\d\s-()]+$/; // Regular expression for valid phone numbers
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number"); // Set error message for invalid phone number
      return false;
    }

    return true; // Return true if all validations pass
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prev) => ({ ...prev, [name]: value })); // Update the formData state with the new value
    if (error) setError(""); // Clear error message if the user starts typing
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate form before proceeding
    if (!validateForm()) return;

    setLoading(true); // Set loading state to true

    try {
      // Simulate API call (replace with actual API call in production)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message after successful registration
      const successMessage = document.createElement("div");
      successMessage.className =
        "fixed top-4 right-4 bg-green-50 text-green-800 p-4 rounded-md shadow-lg"; // Style for the success message
      successMessage.textContent = "Account created successfully!";
      document.body.appendChild(successMessage); // Append the message to the document body

      // Remove the success message after 2 seconds and navigate to the login page
      setTimeout(() => {
        successMessage.remove(); // Remove the success message from the DOM
        navigate("/login"); // Redirect to the login page
      }, 2000);
    } catch (err) {
      // Handle any errors that occur during registration
      setError("An error occurred during registration. Please try again."); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Create your account
        </h1>
        {/* Render the AuthForm component, passing necessary props */}
        <AuthForm
          formType="register" // Specify the form type as "register"
          formData={formData} // Pass the current form data
          error={error} // Pass any error messages
          onSubmit={handleSubmit} // Pass the submit handler
          onChange={handleChange} // Pass the change handler
          isLoading={loading} // Pass the loading state
        />
      </div>
    </div>
  );
};

export default Register; // Export the Register component for use in other parts of the application
