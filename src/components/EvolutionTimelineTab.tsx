import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Calendar, TrendingUp } from 'lucide-react';

const EvolutionTimelineTab: React.FC = () => {
  const [timelineExpanded, setTimelineExpanded] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['foundation', 'prototype', 'medical', 'testing', 'production']));

  const toggleTimelineDemo = () => {
    setTimelineExpanded(!timelineExpanded);
  };

  const toggleItemExpansion = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const timelineEvents = [
    {
      id: 'foundation',
      year: '2023',
      title: 'Foundation Phase',
      description: 'Core AI architecture development and dual-cortex design',
      details: 'Initial research into synthetic intelligence frameworks, cognitive redundancy systems, and human-AI interaction patterns.',
      status: 'completed'
    },
    {
      id: 'prototype',
      year: '2024',
      title: 'Prototype Development',
      description: 'First working prototypes and service architecture',
      details: 'Development of the 39-service architecture, real-time processing capabilities, and initial medical IoT integration.',
      status: 'completed'
    },
    {
      id: 'medical',
      year: '2024',
      title: 'Medical Specialization',
      description: 'HIPAA compliance and medical IoT focus',
      details: 'Implementation of medical standards including HL7 FHIR R4, DICOM, and complete HIPAA compliance framework.',
      status: 'completed'
    },
    {
      id: 'testing',
      year: '2024',
      title: 'Testing & Validation',
      description: 'Comprehensive testing and real-world validation',
      details: 'Extensive testing protocols, case studies, and real-world deployment scenarios with medical institutions.',
      status: 'completed'
    },
    {
      id: 'production',
      year: '2024',
      title: 'Production Release',
      description: 'Grade A production system deployment',
      details: 'Final optimizations, security audits, and deployment of the complete EVE-OS platform for production use.',
      status: 'current'
    },
    {
      id: 'future',
      year: '2025',
      title: 'Future Evolution',
      description: 'Next-generation AI capabilities',
      details: 'Planned enhancements including advanced cognitive abilities, expanded service ecosystem, and global deployment.',
      status: 'planned'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Timeline Header */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          EVE-OS Evolution Timeline
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Journey through the development and evolution of EVE-OS from concept to production-ready AI operating system
        </p>
      </section>

      {/* Timeline Demo Toggle */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Clock className="mr-3 text-purple-600" size={32} />
            Interactive Timeline Demo
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Explore the detailed development timeline with interactive elements and real-time metrics
          </p>
          <button
            onClick={toggleTimelineDemo}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              timelineExpanded
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg'
                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg'
            }`}
          >
            {timelineExpanded ? (
              <>
                <ChevronUp className="inline mr-2" size={20} />
                Close Timeline Demo
              </>
            ) : (
              <>
                <Calendar className="inline mr-2" size={20} />
                View Interactive Timeline
              </>
            )}
          </button>
        </div>

        {/* Timeline Demo Content */}
        {timelineExpanded && (
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 text-center">
              <div className="text-lg font-semibold">Timeline Progress</div>
              <div className="text-sm opacity-90">
                Development Status: 95% Complete | Active Milestones: 6
              </div>
            </div>
            <div className="relative">
              <iframe
                id="timeline-demo-frame"
                src="./demos/timeline-demo.html"
                className="w-full h-96 md:h-[500px]"
                style={{ border: 'none' }}
                title="EVE-OS Timeline Demo"
              />
            </div>
          </div>
        )}
      </section>

      {/* Evolution Stages */}
      <section className="space-y-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
          <TrendingUp className="mr-3 text-blue-600" size={32} />
          Development Milestones
        </h3>
        
        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-3 ${
                        event.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        event.status === 'current' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {event.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleItemExpansion(event.id)}
                    className="ml-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    {expandedItems.has(event.id) ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
                
                {expandedItems.has(event.id) && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                    <p className="text-gray-700 dark:text-gray-300">
                      {event.details}
                    </p>
                    <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        event.status === 'completed' ? 'bg-green-500' :
                        event.status === 'current' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}></div>
                      Status: {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Overview */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Overall Progress</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-full h-4 mb-4">
              <div className="bg-white h-4 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <p className="text-xl font-semibold">95% Complete</p>
            <p className="opacity-90">Production-ready system with comprehensive features</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvolutionTimelineTab;
