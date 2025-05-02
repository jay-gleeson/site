import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
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
          <a href="/home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_moon.svg"
              alt="Menu"
            />
          </a>
        </button>
      </div>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 Jay G</p>
      </div>
    </footer>
  );
}