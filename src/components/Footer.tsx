import {
  companyLinks,
  legalLinks,
  subscribeLinks,
  supportLinks,
} from "@/constants";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 bg-black py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 lg:grid-cols-4">
        <div>
          <h3 className="text-md text-slate-400 font-semibold mb-4">
            {" "}
            COMPANY{" "}
          </h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a className="text-slate-400 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-slate-400 font-semibold mb-4">
            {" "}
            SUPPORT{" "}
          </h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a className="text-slate-400 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-slate-400 font-semibold mb-4"> LEGAL </h3>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a className="text-slate-400 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-slate-400 font-semibold mb-4">
            {" "}
            SUBSCRIBE{" "}
          </h3>
          <ul className="space-y-2">
            {subscribeLinks.map((link, index) => (
              <li key={index}>
                <a className="text-slate-400 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <button className=" w-full rounded-md bg-white px-3 py-2 text-sm text-black hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500">
                Subscribe
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl mt-8 flex  px-4 justify-between">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex gap-2">
          <FaFacebookSquare size={20} className="text-slate-500" />
          <FaInstagram size={20} className="text-slate-500" />
          <FaTwitterSquare size={20} className="text-slate-500" />
          <FaLinkedinIn size={20} className="text-slate-500" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
