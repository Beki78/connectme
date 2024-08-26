import React from "react";

const ViewsCount = () => {
  // Dummy data for views
  const views = {
    daily: 150,
    weekly: 1050,
    monthly: 4500,
    yearly: 54000,
  };

  return (
      
      <div className="grid grid-cols-2 gap-6 p-20 my-auto ">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
            Daily
          </h3>
          <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">
            {views.daily}
          </p>
        </div>
        <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
            Weekly
          </h3>
          <p className="text-3xl font-bold text-green-800 dark:text-green-200">
            {views.weekly}
          </p>
        </div>
        <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">
            Monthly
          </h3>
          <p className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">
            {views.monthly}
          </p>
        </div>
        <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
            Yearly
          </h3>
          <p className="text-3xl font-bold text-red-800 dark:text-red-200">
            {views.yearly}
          </p>
        </div>
      </div>
  );
};

export default ViewsCount;
