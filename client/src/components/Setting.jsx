import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () =>
    setNotificationsEnabled(!notificationsEnabled);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Settings
      </h1>

      {/* Account Settings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Account
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Change Password
            </span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Change
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Two-Factor Authentication
            </span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Enable
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Manage Account
            </span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Appearance
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Font Size</span>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Enable Notifications
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={toggleNotifications}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Email Notifications
            </span>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Push Notifications
            </span>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Privacy
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Profile Visibility
            </span>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Data Sharing
            </span>
            <select className="p-2 border border-gray-300 rounded-lg">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
