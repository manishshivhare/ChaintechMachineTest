import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/ProfileForm"; // Import ProfileForm component for editing user details
import ProfileView from "../components/ProfileView"; // Import ProfileView component for displaying user details

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  // State to hold the current user details
  const [user, setUser] = useState(() => {
    // Retrieve the user from localStorage; if not found, set to null
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isEditing, setIsEditing] = useState(false); // State to track whether the user is in editing mode

  // Effect to handle navigation when the user is not logged in
  useEffect(() => {
    // If no user is found, redirect to the login page
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Dependencies: user state and navigate function

  // Callback to handle user data update
  const handleUpdate = useCallback((updatedUser) => {
    setUser(updatedUser); // Update user state with new details
    localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Save updated user details to localStorage
    setIsEditing(false); // Exit editing mode
  }, []); // Empty dependency array indicates this callback does not rely on any external values

  // Callback to handle user logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem("currentUser"); // Remove user from localStorage
    setUser(null); // Set user state to null
    navigate("/login"); // Redirect to login page
  }, [navigate]); // Dependency on navigate function

  // Prevent rendering while redirecting if no user is found
  if (!user) {
    return null; // Return null to avoid rendering the component during redirect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {isEditing ? (
        // If in editing mode, render ProfileForm for user updates
        <ProfileForm
          user={user} // Pass current user data to the form
          onSubmit={handleUpdate} // Pass the update handler
          onCancel={() => setIsEditing(false)} // Pass the cancel handler to exit editing mode
        />
      ) : (
        // If not in editing mode, render ProfileView to display user information
        <ProfileView
          user={user} // Pass current user data to the view
          onEdit={() => setIsEditing(true)} // Pass the edit handler to switch to editing mode
          onLogout={handleLogout} // Pass the logout handler
        />
      )}
    </div>
  );
};

export default Profile; // Export the Profile component for use in other parts of the application
