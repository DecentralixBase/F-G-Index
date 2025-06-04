import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InfoCard from './components/InfoCard';
import Gauge from './components/Gauge';
import TogglePanel from './components/TogglePanel';
import MiniChart from './components/MiniChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import CalendarWidget from './components/CalendarWidget';

// Dummy data
const dummyData = {
  totalUsers: 14587,
  activeUsers: 8942,
  fearGreedIndex: 72,
  sentimentData: [25, 40, 60, 45, 55, 70, 65, 72],
  marketActivity: [
    { date: 'Mon', buy: 65, sell: 35 },
    { date: 'Tue', buy: 55, sell: 45 },
    { date: 'Wed', buy: 40, sell: 60 },
    { date: 'Thu', buy: 70, sell: 30 },
    { date: 'Fri', buy: 65, sell: 35 },
  ],
  alertLevel: 'moderate',
  sectorPerformance: [
    { name: 'Tech', value: 35 },
    { name: 'Finance', value: 25 },
    { name: 'Energy', value: 20 },
    { name: 'Health', value: 15 },
    { name: 'Other', value: 5 },
  ],
  analytics: [
    { name: 'Social Media', value: 65 },
    { name: 'News', value: 45 },
    { name: 'Forums', value: 30 },
    { name: 'Search', value: 50 },
  ],
  dataBreakdown: [
    { label: 'Market Volatility', value: '45%' },
    { label: 'Trading Volume', value: '1.2M' },
    { label: 'Average Return', value: '3.8%' },
    { label: 'Investor Confidence', value: '62%' },
  ]
};

const Dashboard = () => {
  const [activeToggle, setActiveToggle] = useState('crypto');
  
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white font-['Orbitron',sans-serif] p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#00BFFF] tracking-wider">
            FEAR & GREED INDEX DASHBOARD
          </h1>
          <p className="text-sm text-gray-400">
            Real-time market sentiment analysis for {activeToggle === 'crypto' ? 'cryptocurrency' : 'stock'} markets
          </p>
        </header>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InfoCard 
            title="Total Users" 
            value={dummyData.totalUsers.toLocaleString()} 
            change="+12.4%"
            chartData={[10, 15, 12, 18, 15, 20, 25, 30]}
          />
          <InfoCard 
            title="Active Users" 
            value={dummyData.activeUsers.toLocaleString()} 
            change="+8.7%"
            chartData={[20, 15, 25, 18, 25, 22, 30, 28]}
          />
          <CalendarWidget />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-4">
            <TogglePanel 
              activeToggle={activeToggle} 
              setActiveToggle={setActiveToggle} 
            />
            <motion.div 
              className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
            >
              <h3 className="text-sm font-bold mb-2 text-[#00BFFF]">MARKET ALERTS</h3>
              <div className={`p-3 rounded-lg ${
                dummyData.alertLevel === 'high' ? 'bg-red-500/20 border border-red-500' : 
                dummyData.alertLevel === 'moderate' ? 'bg-yellow-500/20 border border-yellow-500' :
                'bg-green-500/20 border border-green-500'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alert Level:</span>
                  <span className={`font-bold ${
                    dummyData.alertLevel === 'high' ? 'text-red-400' : 
                    dummyData.alertLevel === 'moderate' ? 'text-[#FDCB58]' :
                    'text-green-400'
                  }`}>
                    {dummyData.alertLevel.toUpperCase()}
                  </span>
                </div>
                <div className="mt-2 text-xs">
                  {dummyData.alertLevel === 'high' ? 'High volatility detected' : 
                   dummyData.alertLevel === 'moderate' ? 'Market showing unusual activity' :
                   'Normal market conditions'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Column (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <motion.div 
              className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-[#00BFFF]">FEAR & GREED INDEX</h3>
                <span className="text-xs text-gray-400">Updated 5m ago</span>
              </div>
              <div className="flex justify-center">
                <Gauge value={dummyData.fearGreedIndex} />
              </div>
              <div className="flex justify-between mt-4 text-xs">
                <span className="text-red-400">Extreme Fear</span>
                <span className="text-[#FDCB58]">Neutral</span>
                <span className="text-green-400">Extreme Greed</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-[#00BFFF]">SENTIMENT OVER TIME</h3>
                <div className="flex space-x-2">
                  <button className="px-2 py-1 text-xs bg-[#1E3A5F] rounded">Day</button>
                  <button className="px-2 py-1 text-xs bg-[#00BFFF] rounded">Week</button>
                  <button className="px-2 py-1 text-xs bg-[#1E3A5F] rounded">Month</button>
                </div>
              </div>
              <LineChart data={dummyData.sentimentData} />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1 space-y-4">
            <motion.div 
              className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
              whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
            >
              <h3 className="text-sm font-bold mb-2 text-[#00BFFF]">MARKET ACTIVITY</h3>
              <BarChart data={dummyData.marketActivity} />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <MiniChart 
                title="BTC" 
                value="$42,567"
                change="+2.4%"
                chartData={[20, 15, 25, 30, 22, 28]}
                color="#FDCB58"
              />
              <MiniChart 
                title="ETH" 
                value="$3,256"
                change="+1.8%"
                chartData={[15, 20, 18, 25, 22, 30]}
                color="#00BFFF"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
            whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
          >
            <h3 className="text-sm font-bold mb-4 text-[#00BFFF]">ANALYTICS</h3>
            <div className="space-y-3">
              {dummyData.analytics.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full bg-[#1E3A5F] rounded-full h-2">
                    <div
                      className="bg-[#00BFFF] h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
            whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
          >
            <h3 className="text-sm font-bold mb-4 text-[#00BFFF]">SECTOR PERFORMANCE</h3>
            {/* Placeholder for pie chart - would use a proper chart library here */}
            <div className="h-40 flex items-center justify-center">
              <div className="relative w-32 h-32 rounded-full bg-[#1E3A5F] flex items-center justify-center overflow-hidden">
                {/* Pie chart segments would go here */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#00BFFF]" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#FDCB58]" style={{clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'}}></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FF7E5F]" style={{clipPath: 'polygon(100% 100%, 0 0, 0 100%)'}}></div>
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#4CAF50]" style={{clipPath: 'polygon(0 0, 0 100%, 100% 0)'}}></div>
                <div className="w-16 h-16 rounded-full bg-[#0D1B2A] flex items-center justify-center text-xs">
                  Sectors
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {dummyData.sectorPerformance.map((item, index) => (
                <div key={index} className="flex items-center text-xs">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    index === 0 ? 'bg-[#00BFFF]' : 
                    index === 1 ? 'bg-[#FDCB58]' : 
                    index === 2 ? 'bg-[#FF7E5F]' : 
                    index === 3 ? 'bg-[#4CAF50]' : 'bg-gray-400'
                  }`}></div>
                  <span>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#141E33]/40 backdrop-blur-md rounded-xl p-4 border border-[#1E3A5F] shadow-lg"
            whileHover={{ boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)' }}
          >
            <h3 className="text-sm font-bold mb-4 text-[#00BFFF]">DATA BREAKDOWN</h3>
            <div className="grid grid-cols-2 gap-4">
              {dummyData.dataBreakdown.map((item, index) => (
                <div key={index} className="bg-[#1E3A5F]/50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 