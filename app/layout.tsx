import React from "react";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Configures the font
const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

// Defines metadata for browser tab information
export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: "Created with Next.js and Tailwind CSS",
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Header component containing nav and menu
function Header() {
  return (
    <header>
      <div>
        {/* Home button with moon icon */}
        <button className="menu-button">
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_moon.svg"
              alt="Menu"
            />
          </Link>
        </button>
      </div>
      {/* Main nav links */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

// Footer component with copyright and socials
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>© 2025 Jay G</div>
        <div className="social-icons">
          {/* LinkedIn */}  
          <a href="https://www.linkedin.com/in/jay-glee" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/jay-gleeson" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
