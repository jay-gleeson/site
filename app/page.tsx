"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Defines type for tab keys based on the tabConfig object
type TabKey = keyof typeof tabConfig;

// Main page profile tab component
const ProfileTab = () => (
  <div>
    <h2>Welcome to My Portfolio!</h2>
    <p>Hi! I'm Jay, a Computer Science student and aspiring software developer based in Southern California. I'm passionate about creating innovative solutions and making technology more accessible to everyone.</p>
    <br />
    <h3>Quick Facts</h3>
    <ul>
      <li>🎓 Computer Science Student at GWC</li>
      <li>💻 Ambitious to be a Full-stack Dev</li>
      <li>🤖 Machine Learning Enthusiast</li>
      <li>🌱 Always Learning & Growing</li>
    </ul>
    </div>
);

// Background tab component
const BackgroundTab = () => (
  <div>
    <h2>Educational Background</h2>
    <p>Currently pursuing my Associates degree in Computer Science at Golden West College, where I'm building skills and techniques to transfer to a four-year university.</p>
    <br />
    <h3>Areas of Interest</h3>
    <ul>
      <li>Web Development & UI/UX Design</li>
      <li>Machine Learning & AI</li>
      <li>Data Science & Analytics</li>
      <li>Software Architecture</li>
    </ul>
  </div>
);

// Projects tab component
const ProjectsTab = () => (
  <div>
    <h3>Some of My Recent Projects</h3>
    <br />
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
      the final project for C++ Programming.
    </p>
    <br />
  </div>
);

// Socials tab component
const SocialsTab = () => (
  <div>
    <h2>Connect With Me</h2>
    <p>Feel free to reach out through any of these platforms:</p>
    <br />
    <div className="social-link">
      <h3>GitHub</h3>
      <p>
        Check out my projects and contributions:{" "}
        <a
          href="https://github.com/jay-gleeson"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/jay-gleeson
        </a>
      </p>
    </div>
    <br />
    <div className="social-link">
      <h3>LinkedIn</h3>
      <p>
        Connect with me professionally:{" "}
        <a
          href="https://www.linkedin.com/in/jay-glee"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/jay-glee
        </a>
      </p>
      <br />
    </div>
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
  const [activeTab, setActiveTab] = useState<keyof typeof tabConfig>("Profile");
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const handleTabChange = (tab: keyof typeof tabConfig) => {
    if (tab === activeTab) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    }, 250);
  };

  return (
    <div className="container">
      <div className="main-frame">
        {/* Sidebar with profile picture and tab navigation */}
        <div className="sidebar">
          <Link href="/" className="profile-pic">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Font_Awesome_5_solid_user.svg" alt="Profile" />
          </Link>
          {/* Map through tab config to create navigation buttons */}
          {Object.keys(tabConfig).map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => handleTabChange(tab as keyof typeof tabConfig)}
            >
              {tab}
            </div>
          ))}
        </div>
        {/* Main content area showing the active tab's content */}
        <div className="content">
          <h1 className="title" style={{ opacity: isVisible ? 1 : 0 }}>{tabConfig[activeTab].title}</h1>
          <div className="card description" style={{ opacity: isVisible ? 1 : 0 }}>
            {tabConfig[activeTab].component}
          </div>
        </div>
      </div>
    </div>
  );
}
