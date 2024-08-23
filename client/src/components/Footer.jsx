import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-3 justify-center m-3">
      <nav className="flex justify-center flex-wrap gap-9 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">
          Home
        </a>
        <a className="hover:text-gray-900" href="#">
          Feature
        </a>
        <a className="hover:text-gray-900" href="#">
          Pricing
        </a>
        <a className="hover:text-gray-900" href="#">
          Contact
        </a>
      </nav>

      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 ConnectMe. All rights reserved.
      </p>
    </footer>
  );
}
