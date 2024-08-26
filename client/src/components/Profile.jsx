import React, { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [profilePic, setProfilePic] = useState(null); // Placeholder for profile picture
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Twitter", url: "" },
    { platform: "LinkedIn", url: "" },
  ]);

  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSocialLinkChange = (index, newUrl) => {
    const newLinks = [...socialLinks];
    newLinks[index].url = newUrl;
    setSocialLinks(newLinks);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const removeSocialLink = (index) => {
    const newLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(newLinks);
  };

  return (
    <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-md max-w-2xl mx-auto">

      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <label className="cursor-pointer">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
              <span>Upload</span>
            </div>
          )}
          <input
            type="file"
            className="hidden"
            onChange={handleProfilePicChange}
          />
        </label>
      </div>

      {/* Username */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Social Media Links */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Social Media Links
        </label>
        {socialLinks.map((link, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <select
              value={link.platform}
              onChange={(e) => {
                const newLinks = [...socialLinks];
                newLinks[index].platform = e.target.value;
                setSocialLinks(newLinks);
              }}
              className="p-2 border border-gray-300 rounded-lg flex-1"
            >
              <option value="">Select Platform</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
            </select>
            <input
              type="text"
              placeholder="Profile URL"
              value={link.url}
              onChange={(e) => handleSocialLinkChange(index, e.target.value)}
              className="p-2 border border-gray-300 rounded-lg flex-1"
            />
            <button
              onClick={() => removeSocialLink(index)}
              className="bg-red-500 text-white p-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addSocialLink}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Add Another Social Link
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
