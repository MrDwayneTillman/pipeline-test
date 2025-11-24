import React, { useState } from 'react';
import { Book, Code, Terminal, Database, Lock, Cloud } from 'lucide-react';

const DocumentationTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'API Overview', icon: Database },
    { id: 'authentication', label: 'Authentication', icon: Lock },
    { id: 'endpoints', label: 'Endpoints', icon: Code },
    { id: 'examples', label: 'Examples', icon: Terminal },
    { id: 'deployment', label: 'Deployment', icon: Cloud }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center">
          <Book className="mr-3 text-blue-600" size={40} />
          Documentation
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Complete API documentation, guides, and deployment instructions for EVE-OS
        </p>
      </section>

      {/* Documentation Navigation */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 py-4 px-6 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                    activeSection === section.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-8">
          {/* API Overview */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">EVE-OS API Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The EVE-OS API Gateway provides a comprehensive REST interface for all platform functionality, 
                  including conversation services, medical IoT integration, and social layer management.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">API Gateway Flow</h4>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow">
                    <div className="text-cyan-400 font-bold mb-1">External Client</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">React/Node/Web App</div>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow">
                    <div className="text-green-400 font-bold mb-1">EVE API Gateway</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">FastAPI + CORS</div>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow">
                    <div className="text-purple-400 font-bold mb-1">Service Router</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Cortex/Social/Medical</div>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow">
                    <div className="text-orange-400 font-bold mb-1">Services</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">39 Service Architecture</div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-cyan-400 font-mono font-bold">Base URL</div>
                    <div className="text-lg font-mono text-gray-900 dark:text-white">https://your-eve-host/api</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold">Authentication</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Local dev:</strong> EVE_LOCAL_MODE=true → no auth<br />
                      <strong>Production:</strong> Authorization: Bearer &lt;token&gt;
                    </div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold">Common Headers</div>
                    <div className="text-sm font-mono text-gray-600 dark:text-gray-300">
                      X-EVE-Instance, X-EVE-Mode (social|medical|mixed)
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-green-400 text-sm font-bold mb-2">Quick Start Example</div>
                  <pre className="text-green-300 text-xs overflow-x-auto">
{`// POST https://your-eve-host/api/chat
await fetch("https://your-eve-host/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN"
  },
  body: JSON.stringify({
    sessionId: "medical-session-123",
    message: "Monitor patient for delirium risk.",
    temperature: 0.7,
    appendHistory: true
  })
});`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Authentication */}
          {activeSection === 'authentication' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Authentication</h3>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Lock className="text-yellow-600 mr-2" size={20} />
                  <span className="font-bold text-yellow-800 dark:text-yellow-200">Security Note</span>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  All API requests require proper authentication except in local development mode.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Development Mode</h4>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <pre className="text-green-700 dark:text-green-300 text-sm">
{`# Set environment variable
EVE_LOCAL_MODE=true

# No authentication required
# All endpoints directly accessible`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Production Mode</h4>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <pre className="text-blue-700 dark:text-blue-300 text-sm">
{`# Include Bearer token
Authorization: Bearer your-token-here

# Required headers
X-EVE-Instance: your-instance-id
X-EVE-Mode: social|medical|mixed`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Endpoints */}
          {activeSection === 'endpoints' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">API Endpoints</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 flex items-center text-purple-700 dark:text-purple-300">
                    <Database className="mr-2" size={20} />
                    Cortex & Conversation
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-bold mr-2">POST</span>
                        <code className="text-sm font-mono text-cyan-400">/api/chat</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Chat with AI models, streaming supported</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold mr-2">POST</span>
                        <code className="text-sm font-mono text-cyan-400">/api/chat/stream</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Real-time streaming responses</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-bold mr-2">POST</span>
                        <code className="text-sm font-mono text-cyan-400">/api/session/reset</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Clear conversation history</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 flex items-center text-blue-700 dark:text-blue-300">
                    <Code className="mr-2" size={20} />
                    Model Management
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-bold mr-2">GET</span>
                        <code className="text-sm font-mono text-cyan-400">/api/model/list</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">List available local models</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-bold mr-2">GET</span>
                        <code className="text-sm font-mono text-cyan-400">/api/model/status</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Current model status</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 flex items-center text-green-700 dark:text-green-300">
                    <Book className="mr-2" size={20} />
                    Medical Services
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-purple-500 text-white rounded text-xs font-bold mr-2">POST</span>
                        <code className="text-sm font-mono text-cyan-400">/api/medical/fhir</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">FHIR R4 data processing</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-1 bg-purple-500 text-white rounded text-xs font-bold mr-2">POST</span>
                        <code className="text-sm font-mono text-cyan-400">/api/medical/dicom</code>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Medical imaging analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Examples */}
          {activeSection === 'examples' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Code Examples</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Basic Chat Request</h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-300 text-sm">
{`// JavaScript/Node.js example
const response = await fetch('https://your-eve-host/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.EVE_API_TOKEN
  },
  body: JSON.stringify({
    sessionId: 'user-123',
    message: 'Hello, EVE-OS!',
    temperature: 0.7,
    appendHistory: true
  })
});

const result = await response.json();
console.log(result.data.choices[0].message.content);`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Streaming Response</h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-300 text-sm">
{`// Real-time streaming example
const stream = await fetch('https://your-eve-host/api/chat/stream', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.EVE_API_TOKEN
  },
  body: JSON.stringify({
    sessionId: 'stream-user-123',
    message: 'Tell me about medical AI',
    stream: true
  })
});

const reader = stream.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  const lines = chunk.split('\\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = JSON.parse(line.slice(6));
      process.stdout.write(data.content);
    }
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deployment */}
          {activeSection === 'deployment' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Deployment Guide</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Local Development</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-300 text-sm">
{`# Clone repository
git clone https://github.com/eve-os/core.git
cd core

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your settings

# Start development server
npm run dev`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Production Deployment</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-blue-300 text-sm">
{`# Build for production
npm run build

# Deploy to cloud
npm run deploy

# Configure SSL/TLS
npm run setup-ssl

# Start production server
npm run start:prod`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-300">Environment Variables</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-mono font-bold text-blue-600">EVE_API_KEY</div>
                    <div className="text-gray-600 dark:text-gray-300">Your API authentication key</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-blue-600">EVE_INSTANCE_ID</div>
                    <div className="text-gray-600 dark:text-gray-300">Unique instance identifier</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-blue-600">EVE_MODE</div>
                    <div className="text-gray-600 dark:text-gray-300">Operation mode: social|medical|mixed</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-blue-600">EVE_LOCAL_MODE</div>
                    <div className="text-gray-600 dark:text-gray-300">Development mode flag</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DocumentationTab;
