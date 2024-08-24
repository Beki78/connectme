import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const PersonalInfo = ({ onNext }) => {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [socialMediaFrequency, setSocialMediaFrequency] = useState("");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSubmit = () => {
    // Here, you would typically validate the inputs and call onNext
    const data = {
      fullName,
      location: selectedCountry,
      hearAboutUs,
      socialMediaFrequency,
      selectedSocialMedia,
    };
    console.log(data); // Send this data to the next step or API
    onNext(); // Move to the next step
  };

  return (
    <section data-aos="fade-up" className="flex justify-center items-start bg-gray-900 full p-6">
      <div className="flex flex-col md:flex-row items-start bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Image Section */}
        <img
          className="h-full mt-5 md:w-1/3 rounded-lg mb-4 md:mb-0 object-contain"
          src="https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Social Media"
        />

        {/* Form Section */}
        <div className="flex flex-col w-full md:w-2/3 md:pl-6 space-y-4">
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <ReactFlagsSelect
              selected={selectedCountry}
              onSelect={(code) => setSelectedCountry(code)}
              searchable
              placeholder="Select Country"
              searchPlaceholder="Search Country"
              className="bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="hear_about_us"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How Did You Hear About Us?
            </label>
            <select
              id="hear_about_us"
              value={hearAboutUs}
              onChange={(e) => setHearAboutUs(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="friend">Friend</option>
              <option value="socialMedia">Social Media</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="social_media_frequency"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How Often Do You Use Social Media?
            </label>
            <select
              id="social_media_frequency"
              value={socialMediaFrequency}
              onChange={(e) => setSocialMediaFrequency(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="rarely">Rarely</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="social_media_platform"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Which Social Media Platform Do You Use the Most?
            </label>
            <select
              id="social_media_platform"
              value={selectedSocialMedia}
              onChange={(e) => setSelectedSocialMedia(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="tiktok">TikTok</option>
              <option value="snapchat">Snapchat</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 w-full"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
