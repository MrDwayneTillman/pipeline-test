import React from 'react';
import { Cpu, Brain, Network, Shield, Database, Zap } from 'lucide-react';

const TechnologyArchitectureTab: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Technology Architecture
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Dive deep into the technical foundations that make EVE-OS a revolutionary AI operating system
        </p>
      </section>

      {/* Dual-Cortex Architecture */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-8">
          <Brain className="mr-4 text-purple-600" size={40} />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Dual-Cortex Architecture</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">Revolutionary cognitive processing system</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Primary Cortex</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Real-time conversation processing</li>
                <li>• Context-aware response generation</li>
                <li>• Multi-modal input handling</li>
                <li>• Streaming response capabilities</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Secondary Cortex</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Background processing and analysis</li>
                <li>• Predictive modeling and forecasting</li>
                <li>• Anomaly detection and safety monitoring</li>
                <li>• Long-term memory management</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="/images/reflex_flow_architecture.png" 
                alt="Dual-Cortex Architecture" 
                className="w-full max-w-md rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Architecture */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-8">
          <Network className="mr-4 text-blue-600" size={40} />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">39 Service Architecture</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">Comprehensive AI service ecosystem</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300">Cortex Services</h4>
            <div className="space-y-3">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="font-semibold">Chat Service</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Real-time conversation</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="font-semibold">Model Management</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">AI model lifecycle</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="font-semibold">Session Management</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Context preservation</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300">Medical Services</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="font-semibold">FHIR Integration</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">HL7 FHIR R4 support</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="font-semibold">DICOM Processing</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Medical imaging</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="font-semibold">HIPAA Compliance</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Healthcare security</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-green-700 dark:text-green-300">Social Services</h4>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="font-semibold">User Management</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Profile and auth</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="font-semibold">Social Graph</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Relationship mapping</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="font-semibold">Activity Streams</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Social interactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Database className="mr-3 text-cyan-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Architecture</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Distributed Storage</h4>
              <p className="text-gray-600 dark:text-gray-300">Multi-node storage with automatic replication</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Real-time Processing</h4>
              <p className="text-gray-600 dark:text-gray-300">Stream processing for immediate responses</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Security Layer</h4>
              <p className="text-gray-600 dark:text-gray-300">End-to-end encryption and access control</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Zap className="mr-3 text-yellow-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Performance</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">87.6ms</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Average Response Time</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">10,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Concurrent Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-8">
        <div className="flex items-center mb-8">
          <Shield className="mr-4" size={40} />
          <div>
            <h3 className="text-3xl font-bold">Security & Compliance</h3>
            <p className="text-lg opacity-90">Enterprise-grade security with medical compliance</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">HIPAA</h4>
            <p className="text-sm opacity-90">Complete healthcare compliance</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">FHIR R4</h4>
            <p className="text-sm opacity-90">HL7 standards compliance</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">IEC 62304</h4>
            <p className="text-sm opacity-90">Software lifecycle standards</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network className="text-white" size={32} />
            </div>
            <h4 className="font-bold mb-2">DICOM</h4>
            <p className="text-sm opacity-90">Medical imaging standards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyArchitectureTab;
