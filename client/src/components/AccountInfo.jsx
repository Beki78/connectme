import React, { useState } from "react";

const AccountSetup = ({ onNext }) => {
  const [plan, setPlan] = useState("free");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);
  const [theme, setTheme] = useState("");

  const handleSocialMediaChange = (e) => {
    const value = e.target.value;
    setSelectedSocialMedia((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    const data = {
      plan,
      username,
      profilePic,
      selectedSocialMedia,
      theme,
    };
    console.log(data);
    onNext();
  };

  return (
    <div data-aos="slide-left" className="flex flex-col md:flex-row items-center justify-center bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {" "}
      {/* Centered horizontally */}
      {/* Image Section */}
      <img
        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
        src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Account Setup"
      />
      {/* Form Section */}
      <div className="flex flex-col w-full md:w-2/3 space-y-4">
        <div>
          <label
            htmlFor="plan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Plan
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="free"
                checked={plan === "free"}
                onChange={(e) => setPlan(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-900 dark:text-white">
                Free
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="premium"
                checked={plan === "premium"}
                onChange={(e) => setPlan(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-900 dark:text-white">
                Premium
              </span>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label
            htmlFor="profilePic"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            accept="image/*"
          />
        </div>

        {plan === "free" && (
          <div>
            <label
              htmlFor="social_media"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select up to 4 Social Media Platforms
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Facebook",
                "Instagram",
                "Twitter",
                "LinkedIn",
                "TikTok",
                "Snapchat",
              ].map((platform) => (
                <label key={platform} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={platform}
                    checked={selectedSocialMedia.includes(platform)}
                    onChange={handleSocialMediaChange}
                    className="form-checkbox text-blue-600"
                    disabled={
                      selectedSocialMedia.length >= 4 &&
                      !selectedSocialMedia.includes(platform)
                    }
                  />
                  <span className="ml-2 text-sm text-gray-900 dark:text-white">
                    {platform}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div>
          <label
            htmlFor="theme"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" disabled>
              Select a theme
            </option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="colorful">Colorful</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AccountSetup;
