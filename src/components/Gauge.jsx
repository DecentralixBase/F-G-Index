import React from 'react';
import { motion } from 'framer-motion';

const Gauge = ({ value = 50 }) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.max(0, Math.min(100, value));
  
  // Calculate angle for the gauge needle
  const angle = -90 + (safeValue / 100) * 180;
  
  // Determine color based on value
  const getColor = (val) => {
    if (val < 25) return '#FF4560'; // Red for extreme fear
    if (val < 45) return '#FF8C3D'; // Orange for fear
    if (val < 55) return '#FDCB58'; // Yellow for neutral
    if (val < 75) return '#82D616'; // Light green for greed
    return '#00B37E'; // Dark green for extreme greed
  };
  
  const color = getColor(safeValue);
  
  // Create the gradient stops for the gauge arc
  const gradientStops = [
    { offset: '0%', color: '#FF4560' },   // Red (Extreme Fear)
    { offset: '25%', color: '#FF8C3D' },  // Orange (Fear)
    { offset: '50%', color: '#FDCB58' },  // Yellow (Neutral)
    { offset: '75%', color: '#82D616' },  // Light Green (Greed)
    { offset: '100%', color: '#00B37E' }, // Dark Green (Extreme Greed)
  ];

  return (
    <div className="relative w-56 h-56 mx-auto">
      {/* Background circle */}
      <svg width="100%" height="100%" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientStops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
        </defs>
        
        {/* Dark background circle */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#1E3A5F"
          strokeWidth="12"
          strokeDasharray="339.3"
          strokeDashoffset="0"
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        
        {/* Gradient progress arc */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="12"
          strokeDasharray="339.3"
          strokeDashoffset={339.3 - (339.3 * safeValue) / 100}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        
        {/* Gauge center */}
        <circle cx="60" cy="60" r="46" fill="#0D1B2A" />
        
        {/* Value text */}
        <text
          x="60"
          y="55"
          textAnchor="middle"
          fontSize="28"
          fontWeight="bold"
          fill="white"
        >
          {safeValue}
        </text>
        <text
          x="60"
          y="75"
          textAnchor="middle"
          fontSize="12"
          fill="#00BFFF"
        >
          {safeValue < 25 ? 'EXTREME FEAR' : 
           safeValue < 45 ? 'FEAR' :
           safeValue < 55 ? 'NEUTRAL' :
           safeValue < 75 ? 'GREED' :
           'EXTREME GREED'}
        </text>
        
        {/* Needle */}
        <motion.g
          initial={{ rotate: -90 }}
          animate={{ rotate: angle }}
          transition={{ duration: 1, type: 'spring', stiffness: 60 }}
          style={{ transformOrigin: '60px 60px' }}
        >
          <line
            x1="60"
            y1="60"
            x2="110"
            y2="60"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx="60" cy="60" r="4" fill={color} />
        </motion.g>
        
        {/* Tick marks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const tickAngle = -90 + i * 18;
          const x1 = 60 + 40 * Math.cos((tickAngle * Math.PI) / 180);
          const y1 = 60 + 40 * Math.sin((tickAngle * Math.PI) / 180);
          const x2 = 60 + 46 * Math.cos((tickAngle * Math.PI) / 180);
          const y2 = 60 + 46 * Math.sin((tickAngle * Math.PI) / 180);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth={i % 5 === 0 ? 2 : 1}
              opacity={i % 5 === 0 ? 0.8 : 0.4}
            />
          );
        })}
      </svg>
      
      {/* Glowing effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 15px ${color}33`,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Gauge; 