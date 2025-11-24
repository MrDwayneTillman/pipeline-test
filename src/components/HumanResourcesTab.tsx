import React, { useState } from 'react';
import { 
  Users, 
  Globe, 
  Shield, 
  FileText, 
  TrendingUp, 
  Eye, 
  Scale, 
  MapPin,
  Upload,
  Download,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronRight,
  Zap,
  Target,
  BookOpen,
  DollarSign,
  Building,
  Brain,
  Search,
  MessageSquare,
  UserCheck,
  UserX,
  Calendar,
  CreditCard,
  BarChart3,
  Award,
  Filter,
  Clock,
  Map
} from 'lucide-react';

const HumanResourcesTab: React.FC = () => {
  const [activeHRTab, setActiveHRTab] = useState('overview');
  const [selectedCountry, setSelectedCountry] = useState('Germany');

  const hrSubtabs = [
    { id: 'overview', label: 'HR Overview', icon: Building },
    { id: 'hrbp', label: 'HR Business Partner', icon: Users },
    { id: 'screening', label: 'Applicant Screening', icon: Search },
    { id: 'onboarding', label: 'Onboarding & Training', icon: UserCheck },
    { id: 'operations', label: 'Operations & Compliance', icon: FileText },
    { id: 'transparency', label: 'Transparency & Audit', icon: Eye },
    { id: 'competitive', label: 'Competitive Advantage', icon: Target }
  ];

  const globalHiringData = [
    { country: 'Germany', status: 'allowed', compliance: 'EU AI Act Compliant', color: 'green' },
    { country: 'France', status: 'allowed', compliance: 'EU AI Act Compliant', color: 'green' },
    { country: 'Italy', status: 'allowed', compliance: 'EU AI Act Compliant', color: 'green' },
    { country: 'Spain', status: 'allowed', compliance: 'EU AI Act Compliant', color: 'green' },
    { country: 'United Kingdom', status: 'allowed', compliance: 'UK AI Safety Standards', color: 'green' },
    { country: 'United States', status: 'allowed', compliance: 'Transparent AI Laws', color: 'green' },
    { country: 'Canada', status: 'allowed', compliance: 'AIDA Compliant', color: 'green' },
    { country: 'Australia', status: 'allowed', compliance: 'AI Ethics Standards', color: 'green' },
    { country: 'China', status: 'banned', compliance: 'AI Screening Banned', color: 'red' },
    { country: 'Russia', status: 'banned', compliance: 'AI Screening Banned', color: 'red' },
    { country: 'India', status: 'limited', compliance: 'Guidelines Pending', color: 'yellow' }
  ];

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-200 mb-6">
            <Shield className="mr-2 text-purple-600" size={20} />
            <span className="text-purple-800 font-semibold">The EU-Compliant AI Hiring System</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-gray-800 dark:text-white">
            The Only AI Screening System <br />
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Allowed in Europe
            </span>
          </h2>
          
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Unlock the <strong>11-billion-dollar European market gap</strong> with our transparent, 
            explainable AI hiring system that complies with the EU AI Act where competitors fail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Independent AI Models</div>
              <div className="text-xs text-gray-500 mt-1">Bias Reduction Architecture</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Explainable Decisions</div>
              <div className="text-xs text-gray-500 mt-1">Full Transparency Guarantee</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 mb-2">$11B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">European Market Gap</div>
              <div className="text-xs text-gray-500 mt-1">Untapped Opportunity</div>
            </div>
          </div>
        </div>
      </section>

      {/* EU Compliance Advantage */}
      <section className="bg-gradient-to-r from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Why Workday, ADP, and Competitors Fail in Europe
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">The Problem</h4>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Black Box AI Violates EU AI Act</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Competitors use opaque AI models that cannot explain their hiring decisions, 
                    making them illegal under EU regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Cloud Dependency Creates Privacy Risks</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Cloud-based systems violate strict European data sovereignty requirements 
                    and GDPR compliance standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">No Bias Detection Mechanisms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Unbiased claims with no evidence or audit trails, exposing companies to 
                    discrimination lawsuits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">EVE's Solution</h4>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-200">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Three Independent AI Models</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    GGG Committee architecture ensures bias reduction and provides 
                    multiple perspectives on every hiring decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-200">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">100% Explainable Decisions</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Every decision includes complete reasoning chains, citations, and 
                    audit trails that satisfy EU AI Act requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-200">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Local Execution = Maximum Privacy</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    No cloud dependency, full data sovereignty, and GDPR compliance 
                    built into the core architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR System Architecture */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Complete HR System Architecture
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <Users className="text-purple-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">HR Business Partner</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Always-available HR advisor for compliance, policies, and workforce strategy.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Policy Generator</li>
              <li>• Compliance Advisor</li>
              <li>• Legal Citations</li>
              <li>• Risk Assessment</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <Search className="text-cyan-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Applicant Screening</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The killer feature - EU-compliant AI screening with three independent models.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Resume Screening</li>
              <li>• Bias Detection</li>
              <li>• Global Compliance</li>
              <li>• Explainable Results</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <UserCheck className="text-green-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Onboarding & Training</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Automated onboarding packets and training evaluation systems.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Onboarding Packets</li>
              <li>• Training Evaluations</li>
              <li>• Progress Tracking</li>
              <li>• Compliance Forms</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <FileText className="text-blue-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Operations & Compliance</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Payroll generation, compliance monitoring, and risk management.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Payroll Generation</li>
              <li>• Compliance Monitoring</li>
              <li>• Risk Dashboard</li>
              <li>• Multi-jurisdiction Rules</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <Eye className="text-yellow-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Transparency & Audit</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete decision audit trails and transparent AI reasoning.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Decision Viewer</li>
              <li>• Audit Trails</li>
              <li>• Model Reasoning</li>
              <li>• Export Capabilities</li>
            </ul>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-red-100 dark:border-gray-700 hover:shadow-lg transition-all">
            <Target className="text-red-600 mb-4" size={32} />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Competitive Advantage</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Market differentiation through EU compliance and transparency.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Market Analysis</li>
              <li>• Competitor Comparison</li>
              <li>• Compliance Mapping</li>
              <li>• ROI Projections</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const renderResumeScreeningDemo = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Demo 3: Resume Screening Visualization</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          See how three independent AI models evaluate candidates transparently, 
          providing bias-free screening that complies with EU regulations.
        </p>
      </div>

      {/* Mock Upload Interface */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-100 dark:border-gray-700">
        <div className="border-2 border-dashed border-purple-300 rounded-lg p-12 text-center">
          <Upload className="mx-auto text-purple-500 mb-4" size={48} />
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Upload Candidate Resume
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Drag and drop PDF, DOC, or TXT files (Max 10MB)
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Choose File
          </button>
        </div>
      </div>

      {/* Job Description */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 dark:border-gray-700">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Job Description</h4>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Senior Software Engineer</strong><br />
            Required: 5+ years React/TypeScript experience, team leadership, system architecture<br />
            Preferred: Healthcare industry experience, compliance background<br />
            Location: Remote-first, EU time zones preferred
          </p>
        </div>
      </div>

      {/* Three AI Model Evaluations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Model 1 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Brain className="text-green-600 mr-2" size={24} />
            <h4 className="font-semibold text-gray-800 dark:text-white">Model G - Skills Analyzer</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Technical Skills Match</span>
              <span className="text-green-600 font-semibold">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              <strong>Relevant Skills:</strong> React, TypeScript, Team Leadership<br />
              <strong>Missing:</strong> Healthcare domain knowledge
            </div>
          </div>
        </div>

        {/* Model 2 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Brain className="text-blue-600 mr-2" size={24} />
            <h4 className="font-semibold text-gray-800 dark:text-white">Model G - Experience Matcher</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Experience Alignment</span>
              <span className="text-blue-600 font-semibold">87%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              <strong>Strong Points:</strong> 7 years experience, Led teams<br />
              <strong>Note:</strong> Career progression shows growth potential
            </div>
          </div>
        </div>

        {/* Model 3 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Brain className="text-purple-600 mr-2" size={24} />
            <h4 className="font-semibold text-gray-800 dark:text-white">Model G - Culture Fit</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Cultural Alignment</span>
              <span className="text-purple-600 font-semibold">94%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '94%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              <strong>Highlights:</strong> Remote work experience, EU timezone<br />
              <strong>Soft Skills:</strong> Communication, problem-solving
            </div>
          </div>
        </div>
      </div>

      {/* Legal Compliance Panel */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start space-x-3">
          <Scale className="text-yellow-600 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Legal Compliance Verification</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>✓ Age not considered (candidate age: 32 - excluded from analysis)</p>
              <p>✓ Name diversity analyzed but not discriminated (9 different cultural backgrounds identified)</p>
              <p>✓ Location considered only for timezone requirements (EU timezone preferred, not mandatory)</p>
              <p>✓ Gender-neutral language used throughout evaluation</p>
              <p>✓ All decisions based on job-relevant criteria only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Combined Verdict */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
        <div className="text-center">
          <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Combined Verdict: RECOMMEND FOR INTERVIEW</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">91%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">3/3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Models Agree</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Explainable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate-Facing Feedback */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Candidate Feedback (Dignity-Preserving)</h4>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Thank you for your application for the Senior Software Engineer position. Your qualifications 
            show strong technical skills and leadership experience. We were impressed by your React/TypeScript 
            expertise and team management background. While your healthcare domain experience would be a plus, 
            your overall profile suggests strong potential for success in this role. We'd like to discuss your 
            experience further in an interview.
          </p>
        </div>
      </div>
    </div>
  );

  const renderGlobalHiringMap = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Demo 4: Global Hiring Map</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Interactive world map showing where AI hiring is allowed vs banned, 
          highlighting EVE's unique compliance advantage.
        </p>
      </div>

      {/* World Map Visualization */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 dark:border-gray-700">
        <div className="relative bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 min-h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <Map className="text-gray-400" size={200} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <Globe className="mx-auto text-blue-600 mb-4" size={48} />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive World Map<br />
                  <span className="text-sm">Click countries to explore compliance rules</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">AI Hiring Legality</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">EVE Allowed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">AI Screening Banned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Limited/Guidelines Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Country Compliance Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Countries Where EVE Works</h4>
          <div className="space-y-3">
            {globalHiringData.filter(country => country.status === 'allowed').map((country) => (
              <div 
                key={country.country}
                className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border cursor-pointer transition-all hover:shadow-md ${
                  selectedCountry === country.country 
                    ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-gray-200 dark:border-gray-600'
                }`}
                onClick={() => setSelectedCountry(country.country)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="font-semibold text-gray-800 dark:text-white">{country.country}</span>
                  </div>
                  <ChevronRight className="text-gray-400" size={16} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{country.compliance}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Selected Country Details</h4>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-600">
            {selectedCountry && (
              <>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{selectedCountry}</h5>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <div>
                      <h6 className="font-semibold text-gray-800 dark:text-white">EVE Compliance Status</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Fully compliant with local AI regulations and data protection laws
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-blue-500 mt-1" size={20} />
                    <div>
                      <h6 className="font-semibold text-gray-800 dark:text-white">Legal Framework</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Meets all transparency requirements for AI decision-making systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-purple-500 mt-1" size={20} />
                    <div>
                      <h6 className="font-semibold text-gray-800 dark:text-white">Data Sovereignty</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Local processing ensures compliance with data residency requirements
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
        <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          The 11-Billion-Dollar European Market Opportunity
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">$11B</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              European ATS Market Gap
            </div>
            <div className="text-xs text-gray-500 mt-1">
              AI screening banned until compliance solutions emerge
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">450M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              EU Population
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Massive underserved market for compliant AI hiring
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">27</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              EU Countries
            </div>
            <div className="text-xs text-gray-500 mt-1">
              First-mover advantage in compliant AI recruitment
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Comparison */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 dark:border-gray-700">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Why Competitors Cannot Enter the European Market
        </h4>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">Workday ❌</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">Other ATS ❌</th>
                <th className="text-center py-3 px-4 font-semibold text-green-600">EVE ✅</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">EU AI Act Compliance</td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Explainable AI Decisions</td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Local Data Processing</td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Bias Detection & Prevention</td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">GDPR Compliance</td>
                <td className="text-center py-3 px-4"><AlertTriangle className="mx-auto text-yellow-500" size={20} /></td>
                <td className="text-center py-3 px-4"><AlertTriangle className="mx-auto text-yellow-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Audit Trail & Transparency</td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><XCircle className="mx-auto text-red-500" size={20} /></td>
                <td className="text-center py-3 px-4"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHRBP = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">HR Business Partner Module</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Always-available HR advisor providing compliance guidance, policy generation, 
          and workforce strategy consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demo 1: HRBP Advisor */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <MessageSquare className="mr-2 text-blue-600" size={24} />
            Demo 1: The HRBP Advisor
          </h4>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Business Query:
            </label>
            <textarea 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              rows={3}
              placeholder="We want to open a satellite office in California."
            ></textarea>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">Compliance Checklist</h5>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                <li>✓ Business registration requirements</li>
                <li>✓ California employment law compliance</li>
                <li>✓ Workers' compensation insurance</li>
                <li>✓ State tax obligations</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Required Forms</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Form DE-1 (Business Registration)</li>
                <li>• Form DE-9 (Quarterly Payroll)</li>
                <li>• Workers' Compensation Application</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Risk Warnings</h5>
              <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                <li>⚠️ California has strict meal break laws</li>
                <li>⚠️ Minimum wage higher than federal ($16/hr)</li>
                <li>⚠️ Family Medical Leave Act applies at 50+ employees</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Legal Citations:</strong> CA Labor Code §226.7, §512, §1400-1402 | 
              Cal. Code Regs. tit. 8, §11040
            </p>
          </div>
        </div>

        {/* Demo 2: Policy Generator */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FileText className="mr-2 text-purple-600" size={24} />
            Demo 2: Real-Time Policy Generator
          </h4>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Policy Request:
            </label>
            <input 
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Generate a compliant PTO policy for GA, NJ, and CA"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Multi-State PTO Policy</h5>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
                <div>
                  <strong>Base Policy (All States):</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 15 days PTO annually for all employees</li>
                    <li>• Accrual rate: 1.25 days per month</li>
                    <li>• Use-it-or-lose-it policy with 5-day carryover</li>
                  </ul>
                </div>
                
                <div>
                  <strong>Georgia Specific:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• No additional state requirements</li>
                    <li>• Federal FMLA coordination required</li>
                  </ul>
                </div>
                
                <div>
                  <strong>New Jersey Specific:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• NJ SAFE Act compliance (sick leave integration)</li>
                    <li>• Minimum 1 hour sick leave per 30 hours worked</li>
                  </ul>
                </div>
                
                <div>
                  <strong>California Specific:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 40 hours sick leave annually required</li>
                    <li>• Kin care provisions apply</li>
                    <li>• California Family Rights Act coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Download className="mr-2" size={16} />
                Download PDF
              </button>
              <span className="text-sm text-gray-500">Policy Version 2.1 | Last Updated: Nov 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreening = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Applicant Screening Engine</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          The killer feature - EU-compliant AI screening with three independent models 
          that provide bias-free, explainable hiring decisions.
        </p>
      </div>

      {/* Resume Screening Demo */}
      {renderResumeScreeningDemo()}

      {/* Global Hiring Map Demo */}
      {renderGlobalHiringMap()}

      {/* Additional Demos Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 dark:border-gray-700 opacity-60">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Demo 5: Bias Detection System</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Real-time bias monitoring across all three AI models with automated alerts.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200">
            <p className="text-xs text-yellow-700 dark:text-yellow-400">Demo Coming Soon</p>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 dark:border-gray-700 opacity-60">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Demo 6: Multi-Candidate Comparison</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Side-by-side analysis of multiple candidates with transparent scoring.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200">
            <p className="text-xs text-yellow-700 dark:text-yellow-400">Demo Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOnboarding = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Onboarding & Training Module</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Automated onboarding packet generation and comprehensive training evaluation systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demo 7: Onboarding Packet Generator */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <UserCheck className="mr-2 text-green-600" size={24} />
            Demo 7: Onboarding Packet Generator
          </h4>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3">New Hire Profile</h5>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><strong>Name:</strong> Sarah Johnson</div>
              <div><strong>Position:</strong> Senior Developer</div>
              <div><strong>Location:</strong> San Francisco, CA</div>
              <div><strong>Start Date:</strong> Dec 1, 2025</div>
              <div><strong>Department:</strong> Engineering</div>
              <div><strong>Manager:</strong> John Smith</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Auto-Generated Checklist</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">I-9 Employment Eligibility Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">W-4 Tax Withholding Form (California)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Direct Deposit Authorization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Emergency Contact Information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Equipment Assignment (MacBook Pro, Monitor)</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">State-Specific Forms</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• California DE-4 (State Tax Withholding)</li>
                <li>• California State Disability Insurance Election</li>
                <li>• San Francisco Healthcare Security Ordinance Notice</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200">
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Training Path</h5>
              <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                <li>• Company Culture & Values (2 hours)</li>
                <li>• Security & Compliance Training (1 hour)</li>
                <li>• Engineering Onboarding (3 days)</li>
                <li>• Code Review Process (1 day)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Completion Progress</span>
              <span className="text-sm font-semibold text-green-600">0% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>

        {/* Demo 8: Training Evaluator */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <BookOpen className="mr-2 text-blue-600" size={24} />
            Demo 8: Role Training Evaluator
          </h4>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">SOP Upload & Training Generation</h5>
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto text-blue-500 mb-2" size={32} />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Upload Standard Operating Procedure<br />
                <span className="text-xs">EVE automatically converts to training module</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Generated Training Module</h5>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div><strong>Title:</strong> Patient Data Security & HIPAA Compliance</div>
                <div><strong>Duration:</strong> 45 minutes</div>
                <div><strong>Format:</strong> Interactive with 12 questions</div>
                <div><strong>Passing Score:</strong> 80%</div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Sample Questions</h5>
              <div className="text-sm text-yellow-700 dark:text-yellow-400 space-y-2">
                <div className="bg-white/50 rounded p-2">
                  <p><strong>Q1:</strong> What are the three main components of HIPAA security?</p>
                  <p className="text-xs mt-1">A) Physical, Technical, Administrative | B) Confidentiality, Integrity, Availability | C) All of the above</p>
                </div>
                <div className="bg-white/50 rounded p-2">
                  <p><strong>Q2:</strong> When must you obtain patient consent before sharing health information?</p>
                  <p className="text-xs mt-1">A) Only for research | B) Always | C) Never - it's automatic</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Evaluation Results</h5>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">12/12</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Questions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Download className="mr-2" size={16} />
              Export Audit Log
            </button>
            <span className="text-sm text-gray-500">Training ID: TRN-2025-001</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOperations = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Operations & Compliance Module</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Payroll generation, compliance monitoring, and comprehensive workforce risk management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demo 9: Payroll Pack Generator */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <CreditCard className="mr-2 text-green-600" size={24} />
            Demo 9: Payroll Pack Generator
          </h4>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3">Employee List & Hours</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-200">
                    <th className="text-left py-2">Employee</th>
                    <th className="text-center py-2">Hours</th>
                    <th className="text-center py-2">Rate</th>
                    <th className="text-right py-2">Gross</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-100">
                    <td className="py-2">Sarah J.</td>
                    <td className="text-center py-2">160</td>
                    <td className="text-center py-2">$85/hr</td>
                    <td className="text-right py-2">$13,600</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2">Mike R.</td>
                    <td className="text-center py-2">152</td>
                    <td className="text-center py-2">$72/hr</td>
                    <td className="text-right py-2">$10,944</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-2">Lisa K.</td>
                    <td className="text-center py-2">168</td>
                    <td className="text-center py-2">$78/hr</td>
                    <td className="text-right py-2">$13,104</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">EVE-Generated Payroll Summary</h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Total Gross Pay</div>
                  <div className="font-semibold text-gray-800 dark:text-white">$37,648</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Federal Withholding</div>
                  <div className="font-semibold text-gray-800 dark:text-white">$5,647</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400">State Tax (CA)</div>
                  <div className="font-semibold text-gray-800 dark:text-white">$2,827</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400">FICA (Social Security)</div>
                  <div className="font-semibold text-gray-800 dark:text-white">$2,334</div>
                </div>
                <div className="col-span-2 border-t pt-2">
                  <div className="text-gray-600 dark:text-gray-400">Net Pay</div>
                  <div className="font-bold text-lg text-green-600">$26,840</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">State-Specific Rules Applied</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• California State Disability Insurance (0.9%): $339</li>
                <li>• California Personal Income Tax (1%): $376</li>
                <li>• California Family Rights Act compliance verified</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Compliance Alerts</h5>
              <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                <li>⚠️ Lisa K. has 168 hours - check overtime calculations</li>
                <li>✓ All employees below 40 hours/week threshold</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <Download className="mr-2" size={16} />
              Export Payroll File
            </button>
            <span className="text-sm text-gray-500">Pay Period: Nov 16-30, 2025</span>
          </div>
        </div>

        {/* Demo 10: Risk/Compliance Dashboard */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-red-100 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <BarChart3 className="mr-2 text-red-600" size={24} />
            Demo 10: Risk / Compliance Dashboard
          </h4>

          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200">
              <h5 className="font-semibold text-red-800 dark:text-red-300 mb-3">Workforce Risk Indicators</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-700 dark:text-red-400">Misclassification Risk</span>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="text-yellow-500" size={16} />
                    <span className="text-yellow-600 font-semibold">Medium</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-700 dark:text-red-400">Overtime Compliance</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-green-600 font-semibold">Low</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-700 dark:text-red-400">Documentation Compliance</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-green-600 font-semibold">Low</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Employee Classification Flags</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Contractor → Employee Review</span>
                  <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">3 employees</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Exempt vs Non-Exempt</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">All current</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Multi-State Classification</span>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">5 states</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200">
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Multi-State Delta Visualization</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center p-2 bg-white/50 rounded">
                  <div className="font-semibold">CA</div>
                  <div className="text-gray-600">Meal Breaks</div>
                </div>
                <div className="text-center p-2 bg-white/50 rounded">
                  <div className="font-semibold">NY</div>
                  <div className="text-gray-600">Sick Leave</div>
                </div>
                <div className="text-center p-2 bg-white/50 rounded">
                  <div className="font-semibold">TX</div>
                  <div className="text-gray-600">At-Will</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> Nov 21, 2025 3:45 PM | 
                <strong>Next Review:</strong> Dec 1, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransparency = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Transparency & Audit Layer</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Complete decision audit trails and transparent AI reasoning - 
          the key differentiator that enables EU compliance.
        </p>
      </div>

      {/* Demo 11: Why This Decision Viewer */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-yellow-100 dark:border-gray-700">
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <Eye className="mr-3 text-yellow-600" size={32} />
          Demo 11: "Why This Decision" Viewer
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Decision Overview */}
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">Decision Details</h5>
              <div className="space-y-2 text-sm">
                <div><strong>Candidate:</strong> Alex Thompson</div>
                <div><strong>Position:</strong> Senior Software Engineer</div>
                <div><strong>Decision Date:</strong> Nov 21, 2025</div>
                <div><strong>Final Verdict:</strong> 
                  <span className="text-green-600 font-semibold ml-2">RECOMMEND FOR INTERVIEW</span>
                </div>
                <div><strong>Confidence Level:</strong> 91%</div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Models Involved</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700 dark:text-blue-400">Model G - Skills Analyzer</span>
                  <span className="text-green-600 font-semibold">92% match</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700 dark:text-blue-400">Model G - Experience Matcher</span>
                  <span className="text-green-600 font-semibold">87% match</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700 dark:text-blue-400">Model G - Culture Fit</span>
                  <span className="text-green-600 font-semibold">94% match</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Path */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 dark:text-white mb-3">Exact Decision Path</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Skills Analysis</div>
                    <div className="text-gray-600 dark:text-gray-400">React (5 years), TypeScript (4 years), Node.js (3 years)</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Experience Validation</div>
                    <div className="text-gray-600 dark:text-gray-400">Team lead experience confirmed, 7 years total experience</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Cultural Assessment</div>
                    <div className="text-gray-600 dark:text-gray-400">Remote work experience, communication skills verified</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">Consensus Building</div>
                    <div className="text-gray-600 dark:text-gray-400">All three models agree - recommendation generated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2">Legal Citations</h5>
              <ul className="text-xs text-green-700 dark:text-green-400 space-y-1">
                <li>• EU AI Act Article 13 (Transparency Requirements)</li>
                <li>• GDPR Article 22 (Automated Decision-Making)</li>
                <li>• EEOC Guidelines on AI in Hiring (2023)</li>
                <li>• California Fair Employment and Housing Act</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
          <h5 className="font-semibold text-gray-800 dark:text-white mb-2">What EVE Did NOT Consider</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Candidate age (protected characteristic)</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Gender or gender expression</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Ethnicity or national origin</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Religious beliefs or practices</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Disability status (unless accommodation needed)</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={16} />
              <span className="text-gray-600 dark:text-gray-400">Marital status or family structure</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
            <Download className="mr-2" size={16} />
            Export Complete Audit
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
            <FileText className="mr-2" size={16} />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Competitive Advantage</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Market differentiation through EU compliance, transparency, and the 11-billion-dollar opportunity.
        </p>
      </div>

      {/* Demo 12: Against the Competition Chart */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-red-100 dark:border-gray-700">
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <Target className="mr-3 text-red-600" size={32} />
          Demo 12: "Against the Competition" Chart
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                <th className="text-left py-4 px-6 font-bold text-gray-800 dark:text-white">Feature / Benefit</th>
                <th className="text-center py-4 px-4 font-bold text-red-600">Workday ❌</th>
                <th className="text-center py-4 px-4 font-bold text-red-600">Other ATS ❌</th>
                <th className="text-center py-4 px-4 font-bold text-green-600">EVE ✅</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">EU AI Act Compliance</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Black Box AI</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Opaque Models</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <CheckCircle className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">Full Compliance</span>
                  </div>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">Decision Transparency</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">No Explainability</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Black Box Only</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Eye className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">100% Explainable</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">Bias Detection</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">No Detection</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Unbiased Claims</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Shield className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">3-Model System</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">European Market Access</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Banned</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Illegal</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Globe className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">Open Market</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">Data Privacy (GDPR)</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="text-yellow-500 mb-1" size={24} />
                    <span className="text-xs text-yellow-600">Cloud Risk</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="text-yellow-500 mb-1" size={24} />
                    <span className="text-xs text-yellow-600">Vendor Risk</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Shield className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">Local Execution</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">Audit Capabilities</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Limited</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <XCircle className="text-red-500 mb-1" size={24} />
                    <span className="text-xs text-red-600">Basic Only</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <FileText className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">Comprehensive</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-medium">License Requirements</td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Users className="text-blue-500 mb-1" size={24} />
                    <span className="text-xs text-blue-600">Per-Seat Pricing</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Users className="text-blue-500 mb-1" size={24} />
                    <span className="text-xs text-blue-600">User Limits</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex flex-col items-center">
                    <Zap className="text-green-500 mb-1" size={24} />
                    <span className="text-xs text-green-600">No Seat Limits</span>
                  </div>
                </td>
              </tr>

              <tr className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <td className="py-4 px-6 text-gray-800 dark:text-white font-bold">Market Opportunity</td>
                <td className="text-center py-4 px-4">
                  <div className="text-xs text-red-600 font-bold">Excluded from EU</div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="text-xs text-red-600 font-bold">Cannot Enter EU</div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="text-lg font-bold text-green-600">$11B OPEN</div>
                  <div className="text-xs text-green-700">European Market Gap</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI Projections */}
      <div className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
        <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          ROI Projections for EU Market Entry
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6">
            <DollarSign className="mx-auto text-green-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-green-600 mb-2">$2.4B</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Year 1 Revenue Potential</div>
            <div className="text-xs text-gray-500 mt-1">First-mover advantage</div>
          </div>
          
          <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6">
            <TrendingUp className="mx-auto text-blue-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">ROI Within 18 Months</div>
            <div className="text-xs text-gray-500 mt-1">Market penetration rate</div>
          </div>
          
          <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6">
            <Users className="mx-auto text-purple-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-purple-600 mb-2">450M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">EU Population</div>
            <div className="text-xs text-gray-500 mt-1">Total addressable market</div>
          </div>
          
          <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6">
            <Award className="mx-auto text-yellow-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-yellow-600 mb-2">85%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Expected Market Share</div>
            <div className="text-xs text-gray-500 mt-1">Early compliance advantage</div>
          </div>
        </div>
      </div>

      {/* Competitive Messaging */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 dark:border-gray-700">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Why Companies Choose EVE Over Competitors
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-semibold text-red-700 dark:text-red-400">Competitor Weaknesses</h5>
            
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200">
              <h6 className="font-semibold text-red-800 dark:text-red-300 mb-2">Workday</h6>
              <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                <li>• Black box AI violates EU AI Act</li>
                <li>• $65/user/month pricing model</li>
                <li>• No bias detection capabilities</li>
                <li>• Cannot guarantee GDPR compliance</li>
                <li>• Excluded from European market</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200">
              <h6 className="font-semibold text-red-800 dark:text-red-300 mb-2">Other ATS Systems</h6>
              <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                <li>• "Unbiased" claims with no evidence</li>
                <li>• Opaque decision-making processes</li>
                <li>• Cloud dependency creates privacy risks</li>
                <li>• Limited audit trail capabilities</li>
                <li>• All banned from EU hiring markets</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-semibold text-green-700 dark:text-green-400">EVE's Advantages</h5>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200">
              <h6 className="font-semibold text-green-800 dark:text-green-300 mb-2">Legal Compliance</h6>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                <li>• First EU AI Act compliant hiring system</li>
                <li>• 100% explainable decisions</li>
                <li>• Three-model bias reduction architecture</li>
                <li>• Full GDPR and data sovereignty compliance</li>
                <li>• Legal audit trails for all decisions</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200">
              <h6 className="font-semibold text-green-800 dark:text-green-300 mb-2">Business Value</h6>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                <li>• Access to $11B European market</li>
                <li>• No per-seat pricing (unlimited users)</li>
                <li>• Reduced discrimination lawsuit risk</li>
                <li>• Local execution = maximum privacy</li>
                <li>• Future-proof compliance architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeHRTab) {
      case 'overview':
        return renderOverview();
      case 'hrbp':
        return renderHRBP();
      case 'screening':
        return renderScreening();
      case 'onboarding':
        return renderOnboarding();
      case 'operations':
        return renderOperations();
      case 'transparency':
        return renderTransparency();
      case 'competitive':
        return renderCompetitive();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-8">
      {/* HR Sub-navigation */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 border border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-1 overflow-x-auto">
          {hrSubtabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveHRTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeHRTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* HR Tab Content */}
      <div className="transition-opacity duration-300">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default HumanResourcesTab;