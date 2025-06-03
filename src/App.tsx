import React from 'react';
import { Activity } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <header className="flex items-center gap-2 mb-8">
          <Activity className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold">Fear & Greed Index Dashboard</h1>
        </header>
        <main>
          {/* Dashboard content will go here */}
          <p className="text-gray-400">Dashboard components loading...</p>
        </main>
      </div>
    </div>
  );
};

export default App;