
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">BetaBlu</h3>
            <p className="text-zinc-400 text-sm">Building the future of AI technology from India.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/chat" className="text-zinc-400 hover:text-white transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link to="/agent-builder" className="text-zinc-400 hover:text-white transition-colors">
                  Agent Builder
                </Link>
              </li>
              <li>
                <Link to="/coding-space" className="text-zinc-400 hover:text-white transition-colors">
                  Coding Space
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-zinc-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="mailto:contact@betablu.ai" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400 text-sm">
          <p>© 2024 BetaBlu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
