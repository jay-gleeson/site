import React from "react";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: "Created with Next.js and Tailwind CSS",
};

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

function Header() {
  return (
    <header>
      <div>
        <button className="menu-button">
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_moon.svg"
              alt="Menu"
            />
          </Link>
        </button>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>© 2025 Jay G</div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jay-glee" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/jay-gleeson" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
