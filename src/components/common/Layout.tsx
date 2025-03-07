// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom"; // For rendering nested routes
import { Sidebar } from "../ui/sidebar"; // Import the Sidebar component

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar className="w-64 bg-gray-800 text-white">
        {/* Sidebar Links */}
        <div className="space-y-4 p-4">
          <a href="/home" className="block p-2 hover:bg-gray-700 rounded">Home</a>
          <a href="/profile" className="block p-2 hover:bg-gray-700 rounded">Profile</a>
          <a href="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
        </div>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
