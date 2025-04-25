import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Welcome to my site! Please be patient, it will arrive soon enough.",
};

export default function Page() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Home Page</h1>
        <div className="description">
          Welcome to my site! Please be patient, it will arrive soon enough.
        </div>
      </div>
    </div>
  );
}
