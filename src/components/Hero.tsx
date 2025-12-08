import { Brain, Cpu, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-9 h-9 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-900">AI Healthcare Hub</h2>
              <p className="text-sm text-gray-600">Intelligent Healthcare Solutions</p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Based Healthcare Platform
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Leveraging machine learning and artificial intelligence to provide disease prediction,
          mental wellness support, health monitoring, and personalized healthcare insights.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#portals"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium"
          >
            Try Diagnosis
          </a>
          <a
            href="#features"
            className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium"
          >
            Explore Features
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Diagnosis</h3>
            <p className="text-sm text-gray-600">Machine learning powered disease prediction</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Analytics</h3>
            <p className="text-sm text-gray-600">Real-time health data processing</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Health Monitoring</h3>
            <p className="text-sm text-gray-600">Track your health metrics continuously</p>
          </div>
        </div>
      </div>
    </section>
  );
}
