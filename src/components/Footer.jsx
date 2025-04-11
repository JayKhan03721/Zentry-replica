import { AiFillApple } from "react-icons/ai";
import { FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://jaykhan03721.github.io/Iphone/", icon: <AiFillApple />, label: "Apple Site" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.label}`}
              className="text-black hover:text-white transition-colors duration-500 ease-in-out transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
