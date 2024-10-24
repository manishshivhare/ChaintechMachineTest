import React from "react";
import { Link } from "react-router-dom";

/**
 * AuthForm component handles both login and registration forms.
 * @param {string} formType - Determines whether it's a login or register form.
 * @param {object} formData - Contains the form's input values (e.g., name, email, password).
 * @param {string} error - Error message to display if any during submission.
 * @param {function} onSubmit - Handles form submission event.
 * @param {function} onChange - Handles input changes for form fields.
 * @param {boolean} isLoading - Determines if form submission is in progress, disabling inputs and buttons.
 */
const AuthForm = ({
  formType,
  formData,
  error,
  onSubmit,
  onChange,
  isLoading,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
      {/* Form container with conditional error message display */}
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Display error if it exists */}
        {error && (
          <div
            className="bg-red-50 text-red-600 p-4 rounded-md text-sm"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Input fields for the form */}
        <div className="space-y-6">
          {/* Show name and phone fields if it's the registration form */}
          {formType === "register" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name || ""}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isLoading}
              />
            </div>
          )}

          {/* Email input field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email || ""}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password input field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password || ""}
              onChange={onChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={isLoading}
            />
          </div>

          {/* Phone number field (only for registration) */}
          {formType === "register" && (
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 1234567890"
                value={formData.phone || ""}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isLoading}
              />
            </div>
          )}
        </div>

        {/* Submit button with loading state */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center">
              {/* Spinner animation during loading */}
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Please wait...
            </div>
          ) : formType === "login" ? (
            "Sign in"
          ) : (
            "Create account"
          )}
        </button>

        {/* Link for navigating between login and registration */}
        <div className="text-center text-sm text-gray-600">
          {formType === "login" ? (
            <>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
