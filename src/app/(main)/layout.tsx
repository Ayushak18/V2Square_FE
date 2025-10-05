"use client";
import "../../app/globals.css"
import SideNav from "./components/SideNav";
import TopNavBar from "./components/TopNavBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          {/* Mobile overlay */}
          <div
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed md:static z-50 transition-transform duration-300 md:translate-x-0 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <SideNav closeNav={() => setIsOpen(false)} />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <TopNavBar toggleNav={() => setIsOpen(!isOpen)} />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
