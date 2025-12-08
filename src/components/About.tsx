import { Code, Database, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About This Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI Healthcare Hub is a personal project exploring the intersection of artificial intelligence
            and healthcare through practical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              This platform demonstrates how machine learning and AI can be applied to healthcare challenges.
              From disease prediction to mental wellness support, each feature showcases different aspects
              of AI implementation in healthcare.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The project integrates various technologies including TensorFlow for disease prediction models,
              edge computing for real-time health monitoring, and personalized algorithms for wellness tracking.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Machine Learning</h4>
                  <p className="text-sm text-gray-600">
                    TensorFlow and Keras models for disease prediction and health analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Data Processing</h4>
                  <p className="text-sm text-gray-600">
                    Advanced data analytics and pattern recognition for health insights
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Edge Computing</h4>
                  <p className="text-sm text-gray-600">
                    Real-time health monitoring with efficient edge computing architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Open Source Project
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            This project is open source and available on GitHub. Feel free to explore the code,
            contribute improvements, or use it as a learning resource for your own AI healthcare projects.
          </p>
          <a
            href="https://github.com/SauravMukherjee44/AI-HealthCare-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
