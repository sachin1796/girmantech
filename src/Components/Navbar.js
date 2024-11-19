import React, { useState } from "react";
import glogo from '../Assets/glogo.png'
import girmantext from '../Assets/girmantext.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    const subject = 'Inquiry about Girmantech Services';
    const body = 'Hello, I have a question regarding your services.';
    const mailtoLink = `mailto:contact@girmantech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <nav className="bg-[#FFFFFF] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex">
        <div className="h-[62.26px] w-[62.26px] border-[5.15px]">
          <a href="/"><img src={glogo} /></a>
        </div>

        <div className="h-[60px] w-[146px]">
          <a href="/"><img src={girmantext} /></a>
        </div>
        </div>
        

        
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-black hover:text-gray-300">SEARCH</a>
          <a href="https://girmantech.com/" className="text-black hover:text-gray-300">WEBSITE</a>
          <a href="https://www.linkedin.com/company/girmantech/" className="text-black hover:text-gray-300">LINKEDIN</a>
          <a href="" className="text-black hover:text-gray-300" onClick={handleContactClick}>CONTACT</a>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white space-y-4 py-4 px-2 z-10 absolute right-0`}>
        <a href="/" className="block text-black text-center hover:text-gray-300">SEARCH</a>
        <a href="/website" className="block text-black text-center hover:text-gray-300">WEBSITE</a>
        <a href="/linkedin" className="block text-black text-center hover:text-gray-300">LINKEDIN</a>
        <a href="/contact" className="block text-black text-center hover:text-gray-300">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
