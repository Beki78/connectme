import React, { useState } from "react";

const Terms = ({ onNext }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = (e) => {
    setAgreed(e.target.checked);
  };

  const handleNext = () => {
    if (agreed) {
      onNext();
    } else {
      alert("Please agree to the terms and privacy policy to proceed.");
    }
  };

  return (
    <div className="">
      <div
        data-aos="slide-left"
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto text-left"
      >
        {" "}
        {/* Adjusted width and centering */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Terms of Service & Privacy Policy
        </h1>
        <div className="overflow-y-scroll h-64 mb-4 border border-gray-300 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            1. Introduction
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Welcome to our platform. By using our service, you agree to abide by
            the following terms and conditions. These terms apply to all users
            and visitors who access or use the service.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            2. Account Registration
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            When creating an account, you must provide accurate and complete
            information. You are responsible for maintaining the security of
            your account and are fully responsible for all activities that occur
            under your account. Notify us immediately of any unauthorized use of
            your account.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            3. Service Usage
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Our service allows you to create a profile page where you can link
            to your social media accounts and other online platforms. You agree
            not to use the service for any unlawful or prohibited activities,
            including but not limited to spamming, harassment, or sharing
            inappropriate content.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            4. Privacy Policy
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We value your privacy. By using our service, you consent to the
            collection, use, and disclosure of your personal information in
            accordance with our Privacy Policy. We collect personal data to
            provide and improve our services, including your name, email
            address, and linked social media profiles. We do not sell your data
            to third parties.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            5. Data Security
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We implement industry-standard security measures to protect your
            data. However, we cannot guarantee absolute security. You are
            responsible for keeping your account information, including your
            password, confidential.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            6. Intellectual Property
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            The service and its original content, features, and functionality
            are and will remain the exclusive property of our company. You may
            not duplicate, copy, or reuse any portion of the service without our
            express written permission.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            7. Termination
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We reserve the right to terminate or suspend your account and access
            to the service at our sole discretion, without notice, for conduct
            that we believe violates these terms or is harmful to other users of
            the service.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            8. Changes to These Terms
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            We may modify these terms at any time, and you agree to be bound by
            such modifications. Your continued use of the service following any
            changes to these terms constitutes your acceptance of the new terms.
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            For more information, please read our complete Terms of Service and
            Privacy Policy on our website.
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={handleAgreement}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="agree"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the Terms of Service & Privacy Policy
          </label>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleNext}
            className={`px-4 py-2 text-white ${
              agreed ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500"
            } rounded`}
            disabled={!agreed}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
