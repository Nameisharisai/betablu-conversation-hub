
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
              Building the future of AI technology with a focus on accessibility and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Plans</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Basic
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Developer
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/chat" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link to="/agent-builder" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Agent Builder
                </Link>
              </li>
              <li>
                <Link to="/coding-space" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Coding Space
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="mailto:contact@betablu.ai" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 text-center text-zinc-600 dark:text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} BetaBlu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
