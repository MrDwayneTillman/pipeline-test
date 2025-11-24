import React from 'react';
import { Shield, CheckCircle, TestTube, Target, BarChart3, Clock, Bug, Zap, Users, Award } from 'lucide-react';

const TestingValidationTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Testing & Validation</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive testing protocols ensuring system reliability, security, and performance standards
        </p>
      </div>

      {/* Testing Framework Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 rounded-xl hover-lift">
          <TestTube className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Automated Testing Suite</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive automated testing covering unit, integration, and end-to-end validation workflows.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Shield className="h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Security Validation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Rigorous security testing including penetration testing, vulnerability scanning, and compliance validation.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <CheckCircle className="h-12 w-12 text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Performance Testing</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Load testing, stress testing, and scalability validation to ensure optimal system performance.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Target className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Clinical Validation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Healthcare-specific validation testing in simulated and real clinical environments.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Metrics</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time quality monitoring with detailed metrics and reporting for continuous improvement.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Award className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Compliance Testing</h3>
          <p className="text-gray-600 dark:text-gray-400">
            FDA, HIPAA, and ISO 13485 compliance testing ensuring regulatory requirements are met.
          </p>
        </div>
      </div>

      {/* Testing Methodologies */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <TestTube className="h-6 w-6 mr-3" />
          Testing Methodologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Development Testing</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Unit Testing with Jest and Cypress</li>
              <li>• Integration Testing for API endpoints</li>
              <li>• Component Testing with React Testing Library</li>
              <li>• Code Coverage Analysis and Reporting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">System Testing</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• End-to-End Testing with Playwright</li>
              <li>• Regression Testing Automation</li>
              <li>• Cross-browser Compatibility Testing</li>
              <li>• Accessibility Testing (WCAG 2.1 AA)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Performance Testing</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Load Testing with Artillery and K6</li>
              <li>• Stress Testing and Bottleneck Analysis</li>
              <li>• Memory Leak Detection and Prevention</li>
              <li>• Database Performance Optimization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Security Testing</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• OWASP Top 10 Vulnerability Assessment</li>
              <li>• Penetration Testing with Metasploit</li>
              <li>• Static Code Analysis with SonarQube</li>
              <li>• Dependency Scanning and CVE Detection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Validation Process */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 mr-3" />
          Validation Process
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bug className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Detection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Automated bug detection and issue identification</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold mb-2">Resolution</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Rapid bug resolution and patch deployment</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold mb-2">Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Continuous monitoring and performance tracking</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="font-semibold mb-2">Validation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">User acceptance testing and feedback integration</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BarChart3 className="h-6 w-6 mr-3" />
          Performance Metrics & Quality Standards
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Code Coverage</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt; 100ms</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Zero</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Critical Bugs</div>
          </div>
        </div>
      </div>

      {/* Compliance & Standards */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-3" />
          Compliance & Regulatory Standards
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">FDA Compliance</h3>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              21 CFR Part 11 electronic records and FDA 510(k) premarket notification compliance for medical devices.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">HIPAA Security</h3>
            <p className="text-sm text-green-700 dark:text-green-400">
              Full HIPAA compliance with encrypted data transmission, access controls, and audit logging.
            </p>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">ISO 13485</h3>
            <p className="text-sm text-purple-700 dark:text-purple-400">
              Medical device quality management system certification for healthcare technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Improvement */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Continuous Improvement Process</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Automated Regression Testing</h3>
              <p className="text-gray-600 dark:text-gray-400">Continuous integration pipeline with automated regression testing to catch issues early.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">User Feedback Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">Systematic collection and integration of user feedback into testing and validation processes.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-semibold">Performance Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-400">Real-time performance monitoring with proactive alerts and automated scaling responses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingValidationTab;