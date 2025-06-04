import React from 'react';

const BarChart = ({ data }) => {
  // Check if data is available
  if (!data || data.length === 0) {
    return <div className="h-40 flex items-center justify-center text-gray-400">No data available</div>;
  }
  
  return (
    <div className="h-32 w-full">
      <div className="flex h-full space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col justify-end">
            {/* Bars */}
            <div className="w-full flex flex-col space-y-1">
              {/* Buy bar (going up) */}
              <div 
                className="w-full bg-[#00BFFF] rounded-t-sm"
                style={{ height: `${item.buy}%` }}
              />
              
              {/* Sell bar (going down) */}
              <div 
                className="w-full bg-[#FF4560] rounded-b-sm"
                style={{ height: `${item.sell}%` }}
              />
            </div>
            
            {/* X-axis label */}
            <div className="text-center text-[10px] text-gray-400 mt-2">
              {item.date}
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-2 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-[#00BFFF] mr-1"></div>
          <span className="text-[10px] text-gray-400">Buy</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-[#FF4560] mr-1"></div>
          <span className="text-[10px] text-gray-400">Sell</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart; 