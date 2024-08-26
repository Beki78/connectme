import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import DonutChart from "../components/DonutChart";
import ViewsCount from "../components/ViewsCount";
import Profile from "../components/Profile";
import MySociaMedia from "../components/MySociaMedia";

export function SidebarDemo() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const links = [
    {
      label: "Dashboard",
      onClick: () => setActiveComponent("Dashboard"),
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      onClick: () => setActiveComponent("UserProfile"),
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      onClick: () => setActiveComponent("Settings"),
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      onClick: () => setActiveComponent("Logout"),
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-screen border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      )}
    >
      <Sidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {true ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  onClick ={link.onClick}
                  link={{
                    label: link.label,
                    icon: link.icon,
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2">
        {activeComponent === "Dashboard" && <Dashboard />}
        {activeComponent === "UserProfile" && <UserProfile />}
        {activeComponent === "Settings" && <Settings />}
        {activeComponent === "Logout" && <Logout />}
      </div>
    </div>
  );
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex-1 p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className={`h-20 w-full rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          <h1 className="text-white text-2xl font-bold flex justify-center h-full items-center">
            Platform Analysis
          </h1>
        </div>
        <div
          className={`h-20 w-full rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          <h1 className="text-white text-2xl font-bold flex justify-center h-full items-center">
            View Statistics
          </h1>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div
          className={`h-full w-full flex justify-center items-center rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          {!isLoading && <DonutChart />}
        </div>
        <div
          className={`h-full w-full rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          {!isLoading && <ViewsCount />}
        </div>
      </div>
    </div>
  );
};

const UserProfile = () => {
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
       setTimeout(() => {
         setIsLoading(false);
       }, 2000);
     }, []);
  return (
    <div className="flex-1 p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className={`h-20 w-full rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          <h1 className="text-white text-2xl font-bold flex justify-center h-full items-center">
            My Profile
          </h1>
        </div>
        <div
          className={`h-20 w-full rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          <h1 className="text-white text-2xl font-bold flex justify-center h-full items-center">
            My Social Media
          </h1>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div
          className={`h-full w-full flex justify-center items-center rounded-lg ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          {!isLoading && <Profile />}
        </div>
        <div
          className={`h-full w-full rounded-lg  ${
            isLoading
              ? "bg-gray-100 dark:bg-neutral-800 animate-pulse"
              : "bg-gray-100 dark:bg-neutral-800"
          }`}
        >
          {!isLoading && <MySociaMedia />}
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Here you can update your settings.</p>
      {/* Add your settings form here */}
    </div>
  );
};

const Logout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Logout</h1>
      <p>You have been logged out.</p>
      {/* Handle logout functionality here */}
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Connect Me
      </motion.span>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </div>
  );
};

export default SidebarDemo;
