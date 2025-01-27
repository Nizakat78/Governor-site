"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Gov Logo" className="h-24" />
          <h1 className="font-bold text-xl text-white">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:text-blue-300">Home</Link>
          <Link href="/apply" className="hover:text-blue-300">Apply</Link>
          <Link href="/jobs" className="hover:text-blue-300">Jobs</Link>
          <Link href="/result" className="hover:text-blue-300">Result</Link>
          <div className="relative group">
            <button className="hover:text-blue-300">Courses</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-md">
              <Link href="/course1" className="block px-4 py-2 hover:bg-gray-200">Course 1</Link>
              <Link href="/course2" className="block px-4 py-2 hover:bg-gray-200">Course 2</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMdMenu className="h-6" />
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-900 text-white shadow-md">
            <nav className="flex flex-col space-y-3 px-6 py-4">
              <Link href="/home" className="hover:text-blue-300">Home</Link>
              <Link href="/apply" className="hover:text-blue-300">Apply</Link>
              <Link href="/jobs" className="hover:text-blue-300">Jobs</Link>
              <Link href="/result" className="hover:text-blue-300">Result</Link>
              <Link href="/course1" className="hover:text-blue-300">Course 1</Link>
              <Link href="/course2" className="hover:text-blue-300">Course 2</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
