"use client";

import React from 'react';

const Page = () => {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <section className="mt-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          <p className="mb-6">
            Here you can manage your account, view statistics, and access other features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Account Overview</h3>
              <p className="text-gray-700">View and manage your account details and settings.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Statistics</h3>
              <p className="text-gray-700">Check your recent activities and performance metrics.</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Messages</h3>
              <p className="text-gray-700">Read and send messages to other users.</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Settings</h3>
              <p className="text-gray-700">Update your preferences and configure your account.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
