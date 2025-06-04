import React from 'react';

const LineChart = ({ data }) => {
  // Check if data is available
  if (!data || data.length === 0) {
    return <div className="h-40 flex items-center justify-center text-gray-400">No data available</div>;
  }
  
  // Get min and max values for scaling
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue;
  
  // Calculate the normalized height for each point (0 to 100)
  const normalizePoint = (point) => {
    return 100 - ((point - minValue) / (range || 1)) * 100;
  };
  
  // Generate points for the line path
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = normalizePoint(point);
    return `${x},${y}`;
  }).join(' ');
  
  // Generate the area path (line + bottom border)
  const areaPath = `
    M 0,${normalizePoint(data[0])}
    L ${points}
    L 100,100
    L 0,100
    Z
  `;
  
  // Determine color based on trend (using the last 2 points if available)
  const trend = data.length > 1 ? data[data.length - 1] - data[data.length - 2] : 0;
  const trendColor = trend >= 0 ? '#00BFFF' : '#FF4560';
  
  return (
    <div className="h-40 w-full relative">
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-rows-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border-t border-[#1E3A5F]/50 w-full h-0"></div>
        ))}
      </div>
      
      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-l border-[#1E3A5F]/50 h-full w-0"></div>
        ))}
      </div>
      
      {/* Chart */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Gradient definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={trendColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={trendColor} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Area under the line */}
        <path d={areaPath} fill="url(#lineGradient)" />
        
        {/* The line itself */}
        <polyline
          points={points}
          fill="none"
          stroke={trendColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {data.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = normalizePoint(point);
          const isEnd = index === data.length - 1;
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r={isEnd ? 3 : 2}
                fill={isEnd ? trendColor : '#1E3A5F'}
                stroke={isEnd ? 'white' : trendColor}
                strokeWidth={isEnd ? 1 : 0}
              />
              {isEnd && (
                <text
                  x={x}
                  y={y - 8}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                >
                  {point}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="text-[10px] text-gray-400">{day}</div>
        ))}
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute top-0 right-0 h-full flex flex-col justify-between py-1">
        <div className="text-[10px] text-gray-400">{maxValue}</div>
        <div className="text-[10px] text-gray-400">{minValue}</div>
      </div>
    </div>
  );
};

export default LineChart; 