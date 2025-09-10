import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 bg-white py-4 font-mono text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div>
          <span className="font-bold text-gray-800">Sahayak</span> &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/aboutus" className="hover:underline">About Us</a>
          <a href="/contactus" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer