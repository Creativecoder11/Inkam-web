import React from 'react';

const AgentCTA: React.FC = () => {
  return (
    <div className=" flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left corner decoration */}
        <div className="absolute -top-32 -left-32 w-96 h-96 border border-blue-900/30 rounded-3xl transform rotate-45"></div>
        
        {/* Top right corner decoration */}
        <div className="absolute -top-32 -right-32 w-96 h-96 border border-yellow-900/30 rounded-3xl transform rotate-45"></div>
        
        {/* Bottom left corner decoration */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-blue-900/30 rounded-3xl transform rotate-45"></div>
        
        {/* Bottom right corner decoration */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-yellow-900/30 rounded-3xl transform rotate-45"></div>
      </div>

      {/* Main content card */}
      <div className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm p-12 md:p-20">
        {/* Join US header with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-orange-500"></div>
          <h3 className="text-gray-300 text-sm md:text-base tracking-wider">Join US</h3>
          <div className="h-px w-24 bg-gradient-to-l from-transparent via-orange-500 to-orange-500"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Ready to Be an Entrepreneur?
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-center text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
          The digital economy is growing. Claim your share of this market today.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
            Download Inkam Agent App
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCTA;