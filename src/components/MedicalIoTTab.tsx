import React from 'react';
import { Heart, Activity, Wifi, Shield, Stethoscope, Monitor, Clock, AlertTriangle } from 'lucide-react';

const MedicalIoTTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Medical IoT Integration</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Advanced Internet of Things (IoT) solutions for healthcare monitoring and patient safety
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 rounded-xl hover-lift">
          <Heart className="h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Patient Vital Monitoring</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time monitoring of heart rate, blood pressure, temperature, and oxygen saturation with intelligent alerts.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Activity className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bedside Monitoring</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Continuous patient monitoring with automated documentation and trend analysis for improved care.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Wifi className="h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Data Transmission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            HIPAA-compliant encrypted communication between medical devices and central monitoring systems.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Shield className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Device Security</h3>
          <p className="text-gray-600 dark:text-gray-400">
            End-to-end security protocols ensuring patient data protection and device authenticity verification.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Stethoscope className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Medical Device Integration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Seamless integration with existing hospital equipment and Electronic Health Records (EHR) systems.
          </p>
        </div>

        <div className="glass p-6 rounded-xl hover-lift">
          <Monitor className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Dashboards</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive monitoring dashboards with customizable alerts and nurse station integration.
          </p>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Activity className="h-6 w-6 mr-3" />
          Medical IoT Architecture
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Device Layer</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Patient monitors and vital signs sensors</li>
              <li>• Infusion pumps and medication dispensers</li>
              <li>• Mobile health devices and wearables</li>
              <li>• Environmental monitoring sensors</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Network Layer</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Secure WiFi and cellular connectivity</li>
              <li>• Bluetooth Low Energy for short-range</li>
              <li>• Edge computing for real-time processing</li>
              <li>• Encrypted data transmission protocols</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Application Layer</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Real-time monitoring dashboards</li>
              <li>• Automated alert and notification system</li>
              <li>• Integration with hospital information systems</li>
              <li>• Predictive analytics for early warning</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Security & Compliance</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• HIPAA compliance and data encryption</li>
              <li>• Device authentication and authorization</li>
              <li>• Audit trails and compliance reporting</li>
              <li>• Network segmentation and access control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Benefits */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Clock className="h-6 w-6 mr-3" />
          Implementation Benefits
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Continuous Monitoring</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt; 1sec</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Alert Response Time</div>
          </div>
        </div>
      </div>

      {/* Clinical Impact */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
          <h2 className="text-2xl font-bold">Clinical Impact & Safety</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Patient Safety Improvements</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Early detection of patient deterioration</li>
              <li>• Automated medication delivery monitoring</li>
              <li>• Fall detection and prevention systems</li>
              <li>• Continuous environmental safety monitoring</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Operational Efficiency</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Reduced nurse workload through automation</li>
              <li>• Improved patient throughput and bed utilization</li>
              <li>• Enhanced communication between care teams</li>
              <li>• Streamlined documentation and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalIoTTab;