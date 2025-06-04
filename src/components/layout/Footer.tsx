import React from 'react';
import { Github, Twitter, FileText, Book, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-storm-900 text-storm-300">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-2">Tempestra</h3>
            <p className="text-sm text-storm-400 max-w-md">
              A deep learning climate model surrogate for predicting hurricane paths 
              and precipitation patterns using AI.
            </p>
            <p className='text-sm text-storm-400 max-w-md'>by - Indraneel Bose.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/documentation" 
                    className="hover:text-primary-300 transition-colors flex items-center gap-2"
                  >
                    <Book size={16} />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/api-reference" 
                    className="hover:text-primary-300 transition-colors flex items-center gap-2"
                  >
                    <FileCode size={16} />
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/research-paper" 
                    className="hover:text-primary-300 transition-colors flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Research Paper
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/kaun-neel" className="text-storm-400 hover:text-primary-300 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://x.com/bose_009" className="text-storm-400 hover:text-primary-300 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-storm-800 text-center sm:text-left text-sm text-storm-500">
          <p>© {new Date().getFullYear()} Tempestra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;