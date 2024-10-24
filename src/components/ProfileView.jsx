import React from "react";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa"; // Importing icons for edit and logout
import imageUser from "../assets/defultUser.jpg"; // Default user image in case profile picture is not provided

// ProfileView component that accepts user data, onEdit, and onLogout as props
const ProfileView = ({ user, onEdit, onLogout }) => {
  return (
    // Container for the profile view, styled using utility classes
    <div className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={user.profilePicture || imageUser} // Displays user's profile picture or default if not provided
          alt="User Profile" // Alt text for accessibility
          className="w-24 h-24 rounded-full shadow-lg object-cover" // Styling for profile image
        />
      </div>

      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
        <div className="text-gray-900">{user.name || 'Not set'}</div> {/* Displays user name or 'Not set' if undefined */}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
        <div className="text-gray-900">{user.email || 'Not set'}</div> {/* Displays user email or 'Not set' */}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
        <div className="text-gray-900">{user.phone || 'Not set'}</div> {/* Displays user phone or 'Not set' */}
      </div>

      {/* Buttons for Edit Profile and Logout */}
      <div className="flex space-x-4 mt-6">
        {/* Edit Profile Button */}
        <button
          onClick={onEdit} // Calls onEdit prop when clicked
          className="flex items-center justify-center flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Edit Profile" // Aria label for accessibility
          title="Edit Profile" // Tooltip for Edit button
        >
          <FaUserEdit className="mr-2" /> Edit Profile {/* Edit icon and text */}
        </button>

        {/* Logout Button */}
        <button
          onClick={onLogout} // Calls onLogout prop when clicked
          className="flex items-center justify-center flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Logout" // Aria label for accessibility
          title="Logout" // Tooltip for Logout button
        >
          <FaSignOutAlt className="mr-2" /> Logout {/* Logout icon and text */}
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
