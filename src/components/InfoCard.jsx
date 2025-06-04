import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ title, value, change, chartData }) => {
  // Determine if the change is positive or negative
  const isPositive = change && change.startsWith('+');
  
  return (
    <motion.div 
      className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
      whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-bold text-[#00BFFF]">{title.toUpperCase()}</h3>
        {change && (
          <span className={`text-xs font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold mb-3">{value}</p>
      
      {/* Mini sparkline chart */}
      <div className="h-10 w-full">
        <svg width="100%" height="100%" viewBox="0 0 100 30">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Generate the sparkline from data points */}
          {chartData && chartData.length > 0 && (
            <>
              {/* Area under the line */}
              <path
                d={`
                  M 0,${30 - chartData[0] * 0.9}
                  ${chartData.map((point, i) => `L ${(i / (chartData.length - 1)) * 100},${30 - point * 0.9}`).join(' ')}
                  L 100,30
                  L 0,30
                  Z
                `}
                fill="url(#gradient)"
                opacity="0.5"
              />
              
              {/* The line itself */}
              <path
                d={`
                  M 0,${30 - chartData[0] * 0.9}
                  ${chartData.map((point, i) => `L ${(i / (chartData.length - 1)) * 100},${30 - point * 0.9}`).join(' ')}
                `}
                fill="none"
                stroke="#00BFFF"
                strokeWidth="1.5"
              />
              
              {/* Highlight the last point */}
              <circle
                cx={100}
                cy={30 - chartData[chartData.length - 1] * 0.9}
                r="2"
                fill="#00BFFF"
              />
            </>
          )}
        </svg>
      </div>
    </motion.div>
  );
};

export default InfoCard; 