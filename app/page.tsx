import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to my site! Please be patient, it will arrive soon enough.",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1d1821]">
      <div className="bg-[#1f1f29] rounded-lg shadow-md p-6 text-center max-w-md w-full">
        <h1 className="text-5xl font-bold" style={{ color: '#AB7ADB' }}>
          Home Page
        </h1>
        <div className="mt-4 text-lg" style={{ color: '#FFFFFF', backgroundColor: '#1a161d', padding: '1rem', borderRadius: '0.5rem' }}>
          Welcome to my site! Please be patient, it will arrive soon enough.
        </div>
      </div>
    </div>
  );
}