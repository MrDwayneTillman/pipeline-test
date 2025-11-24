import React, { useState } from 'react';
import { PlayCircle, Brain, Wifi, Projector, Code, Zap, Heart } from 'lucide-react';

const InteractiveDemosTab: React.FC = () => {
  const [activeDemoCategory, setActiveDemoCategory] = useState('all');

  // Demo categories for sub-tabs
  const demoCategories = [
    { id: 'all', label: 'All Demos', icon: PlayCircle },
    { id: 'medical-ai', label: 'Medical AI (1)', icon: Heart },
    { id: 'ai-viz', label: 'AI Visualization (2)', icon: Brain },
    { id: 'dev-tools', label: 'Development Tools (2)', icon: Code }
  ];

  // Filter demos by category
  const filterDemosByCategory = (category: string) => {
    const categoryMap: { [key: string]: string[] } = {
      'all': ['iot', 'cortex', 'action', 'workflow', 'body'],
      'medical-ai': ['iot'],
      'ai-viz': ['cortex', 'body'],
      'dev-tools': ['action', 'workflow']
    };
    return categoryMap[category] || [];
  };

  const demos = [
    {
      id: 'iot',
      title: 'IoT Demo',
      description: 'Medical IoT device integration and monitoring',
      icon: Wifi,
      expanded: false,
      toggle: () => {},
      gradient: 'from-green-500 to-teal-500',
      gradientButton: 'from-green-500 to-teal-500',
      gradientButtonClose: 'from-red-500 to-red-600',
      src: './demos/iot-demo.html',
      lineCount: '18,168 lines',
      techStack: 'IoT Stack'
    },
    {
      id: 'cortex',
      title: 'Cortex Network Demo',
      description: '3D network visualization with coherence metrics',
      icon: Brain,
      expanded: false,
      toggle: () => {},
      gradient: 'from-purple-500 to-pink-500',
      gradientButton: 'from-purple-500 to-pink-500',
      gradientButtonClose: 'from-red-500 to-red-600',
      src: './demos/cortex-v3.html',
      lineCount: '31,678 lines',
      techStack: 'HTML5/WebGL'
    },
    {
      id: 'action',
      title: 'Action Language Demo',
      description: 'Interactive EVE Action Language interface',
      icon: Code,
      expanded: false,
      toggle: () => {},
      gradient: 'from-blue-500 to-cyan-500',
      gradientButton: 'from-blue-500 to-cyan-500',
      gradientButtonClose: 'from-red-500 to-red-600',
      src: './demos/action-language.html',
      lineCount: '18,102 lines',
      techStack: 'React/TypeScript'
    },
    {
      id: 'workflow',
      title: 'Workflow Editor Demo',
      description: 'Visual workflow design with drag-and-drop',
      icon: Projector,
      expanded: false,
      toggle: () => {},
      gradient: 'from-orange-500 to-red-500',
      gradientButton: 'from-orange-500 to-red-500',
      gradientButtonClose: 'from-red-500 to-red-600',
      src: './demos/workflow-editor.html',
      lineCount: '21,774 lines',
      techStack: 'Medical Stack'
    },
    {
      id: 'body',
      title: 'Body Visualization Demo',
      description: 'Human body system visualization with health metrics',
      icon: Zap,
      expanded: false,
      toggle: () => {},
      gradient: 'from-indigo-500 to-purple-500',
      gradientButton: 'from-indigo-500 to-purple-500',
      gradientButtonClose: 'from-red-500 to-red-600',
      src: './demos/body-viz.html',
      lineCount: '15,432 lines',
      techStack: 'Three.js/WebGL'
    }
  ];

  // State for demo expansion
  const [expandedDemos, setExpandedDemos] = useState<{ [key: string]: boolean }>({});

  const toggleDemo = (demoId: string) => {
    setExpandedDemos(prev => ({
      ...prev,
      [demoId]: !prev[demoId]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
          <PlayCircle className="mr-3 text-purple-600" size={40} />
          Interactive Demos
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience EVE-OS functionality with our comprehensive interactive demonstrations
        </p>
      </section>

      {/* Demo Category Sub-tabs */}
      <section className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {demoCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveDemoCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors relative z-10 pointer-events-auto ${
                activeDemoCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <CategoryIcon size={16} />
              <span>{category.label}</span>
            </button>
          );
        })}
      </section>

      {/* Demo Grid */}
      <section className="space-y-8">
        {demos.filter(demo => {
          const allowedDemos = filterDemosByCategory(activeDemoCategory);
          return allowedDemos.includes(demo.id);
        }).map((demo) => {
          const Icon = demo.icon;
          const isExpanded = expandedDemos[demo.id] || false;
          return (
            <div key={demo.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Demo Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${demo.gradient} rounded-2xl flex items-center justify-center mr-6`}>
                      <Icon className="text-white text-2xl" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{demo.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{demo.description}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <span className="font-mono">{demo.lineCount}</span>
                        <span className="mx-2">•</span>
                        <span>{demo.techStack}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleDemo(demo.id)}
                    className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${
                      isExpanded ? demo.gradientButtonClose : demo.gradientButton
                    } hover:shadow-lg`}
                  >
                    <div className="flex items-center">
                      {isExpanded ? (
                        <>
                          <Zap className="mr-2" size={18} />
                          Close Demo
                        </>
                      ) : (
                        <>
                          <PlayCircle className="mr-2" size={18} />
                          Launch Demo
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Demo Content */}
              {isExpanded && (
                <div className="bg-gray-900 animate-fade-in">
                  <div className={`bg-gradient-to-r ${demo.gradient} text-white p-4 text-center`}>
                    <div className="text-lg font-semibold">{demo.title} - Live</div>
                    <div className="text-sm opacity-90">Real-time functionality with interactive controls</div>
                  </div>
                  <div className="relative">
                    <iframe
                      id={`${demo.id}-demo-frame`}
                      src={demo.src}
                      className="w-full h-96 md:h-[600px]"
                      style={{ border: 'none' }}
                      title={`${demo.title} Demo`}
                      onLoad={() => {
                        console.log(`${demo.title} demo loaded successfully`);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Demo Features Overview */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Demo Features</h3>
          <p className="text-xl opacity-90">Experience the full power of EVE-OS through interactive demonstrations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">Real-time Processing</h4>
            <p className="text-sm opacity-90">Live data processing and immediate feedback</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">AI Integration</h4>
            <p className="text-sm opacity-90">Seamless AI model integration and interaction</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlayCircle className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">Interactive Controls</h4>
            <p className="text-sm opacity-90">Full user control with dynamic interfaces</p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Demo Technical Specifications</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Browser Compatibility</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Chrome 90+ (Recommended)</li>
              <li>• Firefox 88+</li>
              <li>• Safari 14+</li>
              <li>• Edge 90+</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Performance Requirements</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 4GB+ RAM recommended</li>
              <li>• WebGL support enabled</li>
              <li>• Modern GPU for 3D demos</li>
              <li>• 1Mbps+ internet connection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveDemosTab;