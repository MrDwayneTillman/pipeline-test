import React, { useState } from 'react';
import { Wrench, Brain, Heart, Users, Database, Shield, Zap, Monitor } from 'lucide-react';

const ComponentsServicesTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Components', icon: Wrench },
    { id: 'cortex', label: 'Cortex Services', icon: Brain },
    { id: 'medical', label: 'Medical IoT', icon: Heart },
    { id: 'social', label: 'Social Layer', icon: Users },
    { id: 'data', label: 'Data Services', icon: Database },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const services = [
    // Cortex Services
    {
      id: 'chat-service',
      name: 'Chat Service',
      category: 'cortex',
      description: 'Real-time conversation processing with AI models',
      status: 'Production',
      version: '2.1.0',
      endpoints: ['POST /api/chat', 'POST /api/chat/stream'],
      icon: Brain,
      features: ['Streaming responses', 'Context preservation', 'Multi-modal input', 'Temperature control']
    },
    {
      id: 'model-management',
      name: 'Model Management',
      category: 'cortex',
      description: 'AI model lifecycle and deployment management',
      status: 'Production',
      version: '1.8.0',
      endpoints: ['GET /api/model/list', 'GET /api/model/status', 'POST /api/model/deploy'],
      icon: Monitor,
      features: ['Auto-scaling', 'Model versioning', 'Load balancing', 'Performance monitoring']
    },
    {
      id: 'session-management',
      name: 'Session Management',
      category: 'cortex',
      description: 'Conversation context and user session handling',
      status: 'Production',
      version: '1.5.0',
      endpoints: ['POST /api/session/create', 'GET /api/session/:id', 'DELETE /api/session/:id'],
      icon: Users,
      features: ['Context persistence', 'Session clustering', 'Auto-cleanup', 'Metrics tracking']
    },

    // Medical IoT Services
    {
      id: 'fhir-integration',
      name: 'FHIR Integration',
      category: 'medical',
      description: 'HL7 FHIR R4 healthcare data exchange',
      status: 'Production',
      version: '3.0.0',
      endpoints: ['POST /api/medical/fhir/patient', 'GET /api/medical/fhir/observation'],
      icon: Heart,
      features: ['FHIR R4 compliant', 'Real-time data sync', 'Error handling', 'Audit trails']
    },
    {
      id: 'dicom-processing',
      name: 'DICOM Processing',
      category: 'medical',
      description: 'Medical imaging data processing and analysis',
      status: 'Production',
      version: '2.2.0',
      endpoints: ['POST /api/medical/dicom/upload', 'GET /api/medical/dicom/:id'],
      icon: Monitor,
      features: ['DICOM compliance', 'Image analysis', 'ML integration', 'Secure storage']
    },
    {
      id: 'hipaa-compliance',
      name: 'HIPAA Compliance',
      category: 'medical',
      description: 'Healthcare privacy and security compliance',
      status: 'Production',
      version: '4.1.0',
      endpoints: ['GET /api/medical/compliance/status'],
      icon: Shield,
      features: ['Data encryption', 'Access controls', 'Audit logging', 'Risk assessment']
    },

    // Social Layer Services
    {
      id: 'user-management',
      name: 'User Management',
      category: 'social',
      description: 'User authentication, profiles, and permissions',
      status: 'Production',
      version: '2.0.0',
      endpoints: ['POST /api/social/auth/login', 'GET /api/social/user/profile'],
      icon: Users,
      features: ['OAuth integration', 'Role-based access', 'Profile management', 'Activity tracking']
    },
    {
      id: 'social-graph',
      name: 'Social Graph',
      category: 'social',
      description: 'User relationship and interaction mapping',
      status: 'Beta',
      version: '1.0.0',
      endpoints: ['POST /api/social/graph/connect', 'GET /api/social/graph/:userId'],
      icon: Users,
      features: ['Relationship mapping', 'Influence metrics', 'Privacy controls', 'Graph analytics']
    },

    // Data Services
    {
      id: 'real-time-processor',
      name: 'Real-time Processor',
      category: 'data',
      description: 'Stream processing for real-time data handling',
      status: 'Production',
      version: '1.7.0',
      endpoints: ['POST /api/data/stream/process', 'GET /api/data/stream/status'],
      icon: Zap,
      features: ['Low latency', 'High throughput', 'Fault tolerance', 'Auto-scaling']
    },
    {
      id: 'analytics-service',
      name: 'Analytics Service',
      category: 'data',
      description: 'Data analytics and reporting engine',
      status: 'Production',
      version: '2.3.0',
      endpoints: ['POST /api/data/analytics/query', 'GET /api/data/analytics/reports'],
      icon: Database,
      features: ['Real-time dashboards', 'Custom metrics', 'Data visualization', 'Export capabilities']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Beta': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
          <Wrench className="mr-3 text-green-600" size={40} />
          Components & Services
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive catalog of all EVE-OS components, services, and APIs
        </p>
      </section>

      {/* Category Filter */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid lg:grid-cols-2 gap-8">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Version: <span className="font-mono">{service.version}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Endpoints: {service.endpoints.length}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Endpoints</h4>
                    <div className="space-y-1">
                      {service.endpoints.map((endpoint, index) => (
                        <div key={index} className="text-sm font-mono bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                          {endpoint}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Service Architecture Overview */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Service Architecture Overview</h3>
          <p className="text-xl opacity-90">39-component ecosystem powering the EVE-OS platform</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-sm opacity-90">Cortex Services</div>
            <div className="text-xs opacity-75">AI & Conversation</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold mb-2">12</div>
            <div className="text-sm opacity-90">Medical IoT Services</div>
            <div className="text-xs opacity-75">Healthcare Specialized</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold mb-2">8</div>
            <div className="text-sm opacity-90">Social Layer Services</div>
            <div className="text-xs opacity-75">User & Community</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold mb-2">4</div>
            <div className="text-sm opacity-90">Data Services</div>
            <div className="text-xs opacity-75">Analytics & Storage</div>
          </div>
        </div>
      </section>

      {/* Integration Guide */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Integration Guide</h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Start</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-300 text-sm">
{`// Initialize EVE-OS client
import { EveClient } from '@eve-os/sdk';

const eve = new EveClient({
  apiKey: 'your-api-key',
  instanceId: 'your-instance-id'
});

// Use a service
const response = await eve.chat.send({
  message: 'Hello, EVE-OS!',
  temperature: 0.7
});`}
              </pre>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Service Discovery</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="font-semibold text-blue-700 dark:text-blue-300">Auto-discovery</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Services automatically discover and connect</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="font-semibold text-green-700 dark:text-green-300">Load Balancing</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Intelligent request routing and failover</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="font-semibold text-purple-700 dark:text-purple-300">Health Monitoring</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Real-time service health and performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsServicesTab;
