import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-black p-4 mt-8 border-t-2">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-bold">About</h3>
          <p>Learn more about our company and mission.</p>
          <a href="#" className="text-blue-400 hover:underline">
            Read More
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Get in touch with us for more information.</p>
          <a href="#" className="text-blue-400 hover:underline">
            Contact Us
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold">Social</h3>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                href="https://facebook.com"
                className="text-blue-400 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com"
                className="text-blue-400 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com"
                className="text-blue-400 hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Pokemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
