import React from 'react';
import { FaArrowUp, FaComment } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Our company</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Core Team</button></li>
              <li>
                <button type="button" className="hover:text-white transition flex items-center w-full text-left">
                  Career <span className="ml-2 bg-green-500 text-xs text-white px-2 py-0.5 rounded">CLICK HERE</span>
                </button>
              </li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">CSR</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">How We Work</button></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">iOS App Development</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Android App Development</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Software Development</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Ideation & Design</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Mobile App Dev</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Research & Innovation</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Digital Transformation</button></li>
              <li><button type="button" className="text-green-400 hover:text-green-300 transition text-left w-full">more...</button></li>
            </ul>
          </div>

          {/* Technologies Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Blockchain</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Artificial Intelligence</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">AR and VR</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Cloud Computing</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Internet of Things</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Metaverse Development</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">NFT Development</button></li>
              <li><button type="button" className="text-green-400 hover:text-green-300 transition text-left w-full">more...</button></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Healthcare</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Education</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">SaaS</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Finance</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">On-Demand</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">eCommerce</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Logistics</button></li>
              <li><button type="button" className="text-green-400 hover:text-green-300 transition text-left w-full">more...</button></li>
            </ul>
          </div>

          {/* Portfolio Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">KFC</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Adidas</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">IKEA</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Hukoomi</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Domino's</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Pizza Hut</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">YouCOMM</button></li>
              <li><button type="button" className="text-green-400 hover:text-green-300 transition text-left w-full">more...</button></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Blog</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Press Release</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Guides</button></li>
              <li><button type="button" className="hover:text-white transition text-left w-full text-current">Ebooks</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 pb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 mr-3">
              DMCA PROTECTED
            </div>
            <p className="text-gray-400 text-sm">
              Full stack mobile (iOS, Android) and web app design and development agency
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition"
              aria-label="Chat with us"
            >
              <FaComment />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;