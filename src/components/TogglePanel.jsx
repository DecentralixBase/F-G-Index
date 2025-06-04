import React from 'react';
import { motion } from 'framer-motion';

const TogglePanel = ({ activeToggle, setActiveToggle }) => {
  return (
    <motion.div 
      className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
      whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
    >
      <h3 className="text-sm font-bold mb-3 text-[#00BFFF]">DATA SOURCE</h3>
      <div className="bg-[#0D1B2A] rounded-lg p-1 flex">
        <button
          onClick={() => setActiveToggle('crypto')}
          className={`flex-1 py-2 rounded-md text-center text-sm transition-all duration-300 ${
            activeToggle === 'crypto'
              ? 'bg-[#00BFFF] text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <span>CRYPTO</span>
          </div>
        </button>
        <button
          onClick={() => setActiveToggle('stock')}
          className={`flex-1 py-2 rounded-md text-center text-sm transition-all duration-300 ${
            activeToggle === 'stock'
              ? 'bg-[#00BFFF] text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>STOCK</span>
          </div>
        </button>
      </div>
      
      {/* Status indicator */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
          <span className="text-xs text-gray-400">LIVE DATA</span>
        </div>
        <span className="text-xs text-gray-400">
          {activeToggle === 'crypto' ? 'BTC $42,567' : 'S&P 500 4,783'}
        </span>
      </div>
      
      {/* Quick actions */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="bg-[#1E3A5F] hover:bg-[#1E3A5F]/80 text-xs py-2 rounded-md transition-colors duration-200">
          Refresh Data
        </button>
        <button className="bg-[#1E3A5F] hover:bg-[#1E3A5F]/80 text-xs py-2 rounded-md transition-colors duration-200">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default TogglePanel; 