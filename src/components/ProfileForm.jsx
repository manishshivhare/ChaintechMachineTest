import React, { useState } from "react";

// ProfileForm component accepts user data, onSubmit and onCancel as props
const ProfileForm = ({ user, onSubmit, onCancel }) => {
  // Initializing formData state with user details
  const [formData, setFormData] = useState({ ...user });

  // handleChange updates the formData state when user types in the input fields
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // handleSubmit is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    onSubmit(formData); // Calls the onSubmit function passed in props with the updated formData
  };

  return (
    // Form element for user profile update, styled using utility classes
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
    >
      {/* Name input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          value={formData.name || ""} // Input value is bound to formData.name
          onChange={(e) => handleChange("name", e.target.value)} // Updates formData.name when changed
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email || ""} // Input value is bound to formData.email
          onChange={(e) => handleChange("email", e.target.value)} // Updates formData.email when changed
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone number input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          value={formData.phone || ""} // Input value is bound to formData.phone
          onChange={(e) => handleChange("phone", e.target.value)} // Updates formData.phone when changed
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          pattern="\d*" // Restricting input to digits only
        />
      </div>

      {/* Buttons for saving or canceling changes */}
      <div className="flex space-x-4 mt-6">
        <button
          type="submit" // Submit button to save the form data
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
        <button
          type="button" // Cancel button to discard changes
          onClick={onCancel} // Calls the onCancel function passed in props
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
