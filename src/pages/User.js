import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-28 min-h-screen bg-gray-100 relative">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col md:flex-row">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4 bg-indigo-700 text-white"
            onClick={toggleMenu}
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>

          <aside
            className={`${
              isOpen ? "absolute z-10 inset-0 h-full md:relative" : "hidden"
            } md:block w-64 bg-indigo-700 text-white p-5`}
          >
            <h2 className="text-2xl font-bold mb-8">Profile</h2>
            <nav className="space-y-6">
              <a href="#" className="block py-2 px-4 bg-indigo-600 rounded-md">
                Personal Info
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-indigo-500 rounded-md"
              >
                Course History
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-indigo-500 rounded-md"
              >
                Academic Details
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-indigo-500 rounded-md"
              >
                Favorites
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-indigo-500 rounded-md"
              >
                Settings
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-indigo-500 rounded-md"
                onClick={handleLogOut}
              >
                Log out
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* User Info Section */}
            <section className="flex justify-between items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Student Avatar"
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-600">john.doe@university.com</p>
                </div>
              </div>
            </section>

            {/* Browsing History / Academic Info */}
            <section className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Course History</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">Mathematics 101</h3>
                  <p className="text-gray-500">Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">Physics 201</h3>
                  <p className="text-gray-500">Ongoing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">Computer Science 301</h3>
                  <p className="text-gray-500">Ongoing</p>
                </div>
              </div>
            </section>

            {/* Performance Section */}
            <section className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Performance Overview</h2>
              <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">GPA</p>
                  <p className="text-2xl font-bold">3.8</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rank</p>
                  <p className="text-2xl font-bold">Top 10%</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
