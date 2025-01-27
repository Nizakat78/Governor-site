// File: components/Footer.tsx

import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Core Courses */}
        <div>
          <h4 className="text-lg font-bold mb-4">Core Courses</h4>
          <ul className="space-y-2">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

        {/* Advanced Courses */}
        <div>
          <h4 className="text-lg font-bold mb-4">Advanced Courses</h4>
          <ul className="space-y-2">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Social Links</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-600" size={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-blue-400" size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-red-600" size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-pink-500" size={24} />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok className="text-black" size={24} />
            </a>
          </div>
          <a href="mailto:education@governorsindh.com" className="text-blue-600">
            education@governorsindh.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
