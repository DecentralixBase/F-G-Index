import React from 'react';
import { motion } from 'framer-motion';

const MiniChart = ({ title, value, change, chartData, color = '#00BFFF' }) => {
  // Determine if the change is positive or negative
  const isPositive = change && change.startsWith('+');
  
  return (
    <motion.div 
      className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-3 border border-[#1E3A5F] shadow-lg"
      whileHover={{ boxShadow: `0 0 15px ${color}33` }}
    >
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xs font-bold" style={{ color }}>{title}</h3>
        {change && (
          <span className={`text-[10px] font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-lg font-bold mb-2">{value}</p>
      
      {/* Mini sparkline chart */}
      <div className="h-8 w-full">
        <svg width="100%" height="100%" viewBox="0 0 100 30">
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
                fill={color}
                opacity="0.1"
              />
              
              {/* The line itself */}
              <path
                d={`
                  M 0,${30 - chartData[0] * 0.9}
                  ${chartData.map((point, i) => `L ${(i / (chartData.length - 1)) * 100},${30 - point * 0.9}`).join(' ')}
                `}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
              />
              
              {/* Highlight the last point */}
              <circle
                cx={100}
                cy={30 - chartData[chartData.length - 1] * 0.9}
                r="2"
                fill={color}
              />
            </>
          )}
        </svg>
      </div>
      
      {/* Tiny metrics at the bottom */}
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-gray-500">24h Vol: 3.2B</span>
        <span className="text-[10px] text-gray-500">High: ${parseFloat(value.replace(/[^0-9.]/g, '')) * 1.05}</span>
      </div>
    </motion.div>
  );
};

export default MiniChart; 