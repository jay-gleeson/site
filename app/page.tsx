import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1f1f29]">
      <div className="bg-[#1f1f29] rounded-lg shadow-md p-6 text-center max-w-md w-full">
        <h1 className="text-5xl font-bold" style={{ color: '#AB7ADB' }}>
          HomePage
        </h1>
        <div className="mt-4 text-lg" style={{ color: '#FFFFFF' }}>
          Welcome to my site! Please be patient, it will arrive soon enough.
        </div>
      </div>
    </div>
  );
};

export default Page;