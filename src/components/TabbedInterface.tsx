import React, { useState, useEffect } from 'react';
import { Brain, Cpu, PlayCircle, BookOpen, Wrench, Heart, CheckCircle, Users, Building, Sun, Moon } from 'lucide-react';
import OverviewTab from './OverviewTab';
import TechnologyArchitectureTab from './TechnologyArchitectureTab';
import MedicalIoTTab from './MedicalIoTTab';
import TestingValidationTab from './TestingValidationTab';
import InteractiveDemosTab from './InteractiveDemosTab';
import DocumentationTab from './DocumentationTab';
import ComponentsServicesTab from './ComponentsServicesTab';
import HumanResourcesTab from './HumanResourcesTab';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
  component: React.ComponentType;
}

const tabs: Tab[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: Brain,
    component: OverviewTab
  },
  {
    id: 'architecture',
    label: 'Technology Architecture',
    icon: Cpu,
    component: TechnologyArchitectureTab
  },
  {
    id: 'medical',
    label: 'Medical IoT',
    icon: Heart,
    component: MedicalIoTTab
  },
  {
    id: 'testing',
    label: 'Testing & Validation',
    icon: CheckCircle,
    component: TestingValidationTab
  },
  {
    id: 'demos',
    label: 'Interactive Demos',
    icon: PlayCircle,
    component: InteractiveDemosTab
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: BookOpen,
    component: DocumentationTab
  },
  {
    id: 'social',
    label: 'Social API',
    icon: Users,
    component: ComponentsServicesTab
  },
  {
    id: 'components',
    label: 'Components & Services',
    icon: Wrench,
    component: ComponentsServicesTab
  },
  {
    id: 'human-resources',
    label: 'Human Resources',
    icon: Building,
    component: HumanResourcesTab
  }
];

const TabbedInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode immediately

  console.log('Current activeTab:', activeTab);

  // Debug: Log when activeTab changes
  useEffect(() => {
    console.log('activeTab changed to:', activeTab);
  }, [activeTab]);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('eve-os-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    // Default is already set to dark mode in useState
  }, []);

  // Apply dark mode class to document and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('eve-os-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('eve-os-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-10 animate-float" style={{animationDelay: '-4s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500 rounded-full opacity-10 animate-float" style={{animationDelay: '-1s'}}></div>
      </div>
      
      {/* Header */}
      <header className="glass border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">EVE-OS</h1>
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Documentation Portal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Revolutionary AI Operating System
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg glass border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun size={18} className="text-yellow-500" />
                ) : (
                  <Moon size={18} className="text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="glass border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              console.log('Rendering tab:', tab.id, 'Button element:', tab.label);
              return (
                <button
                  key={tab.id}
                  data-tab-id={tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Button clicked:', tab.label, 'Tab ID:', tab.id);
                    console.log('Event target:', e.target);
                    console.log('Setting activeTab to:', tab.id);
                    setActiveTab(tab.id);
                    console.log('activeTab should now be:', tab.id);
                  }}
                  type="button"
                  style={{ pointerEvents: 'all', zIndex: 50 }}
                  className={`relative flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer select-none ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="tab-content">
          {tabs.map((tab) => {
            const Component = tab.component;
            return (
              <div
                key={tab.id}
                className={`transition-opacity duration-300 ${
                  activeTab === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TabbedInterface;
