"use client";

import { useState } from "react";

// Defines type for tab keys based on the tabConfig object
type TabKey = keyof typeof tabConfig;

// Main page profile tab component
const ProfileTab = () => (
  <div>
    <p>Hi! I'm Jay!</p>
    <br />
    <p>I'm a current CS student in Southern California.</p>
    <br />
    <p>I am eager to put my skills towards good use!</p>
  </div>
);

// Background tab component
const BackgroundTab = () => (
  <div>
    <p>Working towards my Associates in CS at GWC.</p>
    <br />
    <p>Experience in Backend and Frontend development.</p>
    <br />
    <p>Particular interests include web design and ML.</p>
  </div>
);

// Projects tab component
const ProjectsTab = () => (
  <div>
    <p>
      ASTRO ASL 📝: ML-powered live American Sign Language transcription tool
      using TensorFlow.
    </p>
    <br />
    <p>
      Graduation Prediction Project 🎓: Data Science project correlating
      graduation rates with income statistics.
    </p>
    <br />
    <p>
      The Big Bad Riding Hood 🐺: Text-based adventure game in C++, submitted as
      the final project for C++1.
    </p>
  </div>
);

// Socials tab component
const SocialsTab = () => (
  <div>
    {/* GitHub */}
    <p>
      See GitHub:{" "}
      <a
        href="https://github.com/jay-gleeson"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/jay-gleeson
      </a>
    </p>
    <br />
    {/* LinkedIn */}
    <p>
      See LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/jay-glee"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.linkedin.com/in/jay-glee
      </a>
    </p>
    <br />
    <p>More coming soon. . .</p>
  </div>
);

// Configuration object for all tabs
const tabConfig = {
  Profile: {
    title: "Profile Information",
    component: <ProfileTab />,
  },
  Background: {
    title: "Background Details",
    component: <BackgroundTab />,
  },
  Projects: {
    title: "Projects Overview",
    component: <ProjectsTab />,
  },
  Socials: {
    title: "Social Media Links",
    component: <SocialsTab />,
  },
};

// Main page component
export default function Home() {

  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState<keyof typeof tabConfig>("Profile");

  return (
    <div className="container">
      <div className="main-frame">
        {/* Sidebar with profile picture and tab navigation */}
        <div className="sidebar">
          <div className="profile-pic">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Font_Awesome_5_solid_user.svg" alt="Profile" />
          </div>
          {/* Map through tab config to create navigation buttons */}
          {Object.keys(tabConfig).map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab as keyof typeof tabConfig)}
            >
              {tab}
            </div>
          ))}
        </div>
        {/* Main content area showing the active tab's content */}
        <div className="content">
          <h1 className="title">{tabConfig[activeTab].title}</h1>
          <div className="card description">{tabConfig[activeTab].component}</div>
        </div>
      </div>
    </div>
  );
}
