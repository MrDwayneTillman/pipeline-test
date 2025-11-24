import React from 'react';
import { Rocket, Play, Activity, Users, Server, Zap, Brain } from 'lucide-react';

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              EVE-OS
            </span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-300">
            The Revolutionary AI Operating System
          </h2>
          <p className="text-xl lg:text-2xl mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            "The only thing that can help people survive the AI wave is to wrap them in AI so they can float to the new baseline level"
          </p>
          <p className="text-lg mb-8 text-gray-500 dark:text-gray-300">
            Complete AI Operating System - 95% Production Ready
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Rocket className="inline mr-2" size={20} />
              Explore Platform
            </button>
            <button className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
              <Play className="inline mr-2" size={20} />
              Watch Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="metric-number">141,802</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Lines Demo Code</div>
            </div>
            <div className="text-center">
              <div className="metric-number">39</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Services</div>
            </div>
            <div className="text-center">
              <div className="metric-number">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Complete</div>
            </div>
            <div className="text-center">
              <div className="metric-number">87.6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Grade A</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center">
              <Brain className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Three-Tier Architecture</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Revolutionary three-tier processing system with Left Brain (Cloud), Right Brain (Local), and Subconscious (0.2s heartbeat) for maximum AI performance and autonomous operation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 flex items-center justify-center">
              <Activity className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Personality Threads</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Frank, Ben, Susan personality threads with specialized thinking capabilities and social cognition for human-like interactions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6 flex items-center justify-center">
              <Users className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Medical IoT Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized medical IoT capabilities with HIPAA compliance and 100% medical standards coverage.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 flex items-center justify-center">
              <Server className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">39 Service Architecture</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive service ecosystem covering all aspects of AI operations, from conversation to real-time processing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <Zap className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Processing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lightning-fast AI processing with real-time streaming and immediate response capabilities for all interactions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 flex items-center justify-center">
              <Activity className="text-white text-2xl" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Production Ready</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Grade A production system with comprehensive testing, validation, and real-world deployment capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About EVE-OS</h2>
          <p className="text-xl leading-relaxed mb-8">
            EVE-OS represents the next evolution in AI operating systems, designed to integrate artificial intelligence 
            seamlessly into human workflows while maintaining safety, compliance, and performance standards.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg opacity-90">
                To democratize AI technology by creating an operating system that makes advanced artificial intelligence 
                accessible, safe, and beneficial for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-lg opacity-90">
                A world where AI technology enhances human capabilities without replacing human judgment, creating 
                a new baseline of human-AI collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;
