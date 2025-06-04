import React from 'react';
import { motion } from 'framer-motion';

const CalendarWidget = () => {
  // Get current date information
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.toLocaleString('default', { month: 'short' });
  const currentYear = now.getFullYear();
  const currentWeekday = now.toLocaleString('default', { weekday: 'short' });
  
  // Generate calendar days for current month
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  
  // Create calendar grid (6 weeks x 7 days)
  const calendarDays = [];
  let dayCounter = 1;
  
  // Fill the calendar grid
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
        week.push(null); // Empty cell
      } else {
        week.push(dayCounter++);
      }
    }
    calendarDays.push(week);
    if (dayCounter > daysInMonth) break;
  }
  
  return (
    <motion.div 
      className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
      whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
    >
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-[#00BFFF]">CALENDAR</h3>
        <div className="text-sm">
          <span className="text-white font-bold">{currentMonth}</span>
          <span className="text-gray-400 ml-1">{currentYear}</span>
        </div>
      </div>
      
      {/* Current day highlight */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-[#00BFFF] flex items-center justify-center mr-3">
            <span className="text-lg font-bold">{currentDay}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold">{currentWeekday}</span>
            <span className="text-xs text-gray-400">{currentMonth} {currentYear}</span>
          </div>
        </div>
        <div className="text-xs py-1 px-2 rounded-full bg-[#1E3A5F]">Today</div>
      </div>
      
      {/* Calendar grid */}
      <div className="mt-2">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 text-center mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-[10px] text-gray-400">{day}</div>
          ))}
        </div>
        
        {/* Calendar days */}
        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 text-center">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className="aspect-square flex items-center justify-center">
                {day !== null && (
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                      day === currentDay
                        ? 'bg-[#00BFFF] text-white'
                        : 'text-gray-400 hover:bg-[#1E3A5F] cursor-pointer'
                    }`}
                  >
                    {day}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Event indicator */}
      <div className="mt-3 text-xs flex items-center">
        <div className="w-2 h-2 rounded-full bg-[#FDCB58] mr-2"></div>
        <span className="text-gray-400">Next data update in 2h 15m</span>
      </div>
    </motion.div>
  );
};

export default CalendarWidget;

 