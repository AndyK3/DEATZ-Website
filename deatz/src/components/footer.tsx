import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#5B1F1F] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-full md:w-1/3 mb-24 md:mb-0"> {/* Increased margin-bottom for the logo */}
          <div className="h-48 w-full bg-gray-300 rounded-md"></div> {/* Taller placeholder for logo */}
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col items-start ml-32"> {/* Reduced margin-left */}
          <div className="text-white text-6xl font-bold mb-10">DEATZ</div> {/* Decreased margin-bottom for DEATZ */}

          {/* Links Section */}
          <div className="flex justify-between w-full">
            <div className="mb-4">
              <h4 className="font-bold text-lg text-white mb-4">About Us</h4>
              <ul className="text-gray-300">
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Our Story</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Team</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            <div className="mb-4"> {/* Reduced margin-bottom for "Help" section */}
              <h4 className="font-bold text-lg text-white mb-4">Help</h4>
              <ul className="text-gray-300">
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Customer Support</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Shipping Info</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Returns</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div className="mb-4"> {/* Reduced margin-bottom for "Social" section */}
              <h4 className="font-bold text-lg text-white mb-4">Social</h4>
              <ul className="text-gray-300">
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Instagram</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Facebook</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li className="mb-2"><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line Above Copyright */}
      <div className="container mx-auto">
        <hr className="border-t border-white my-4 mx-6" /> {/* Thin white line with margin */}
      </div>

      <div className="mt-2 text-center text-gray-300">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
