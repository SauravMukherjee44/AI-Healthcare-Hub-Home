import { Mail, Linkedin, Github, Code, Briefcase, GraduationCap } from 'lucide-react';

export default function Creator() {
  return (
    <section id="creator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Creator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The mind behind AI Healthcare Hub
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-12 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
                <img
                  src="/saurav_pic.jpeg"
                  alt="Saurav Mukherjee"
                  className="relative w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl"
                />
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Saurav Mukherjee
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-6">
                AI & Healthcare Technology Enthusiast
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                A passionate developer and innovator dedicated to leveraging artificial intelligence
                and machine learning to transform healthcare accessibility. With a vision to democratize
                healthcare through technology, Saurav has created this comprehensive platform that combines
                disease prediction, mental wellness support, and healthcare donation systems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technical Expertise</h4>
                    <p className="text-gray-600 text-sm">Machine Learning, AI, Full-Stack Development</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mission</h4>
                    <p className="text-gray-600 text-sm">Making healthcare accessible through AI innovation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Focus Areas</h4>
                    <p className="text-gray-600 text-sm">Healthcare AI, Disease Prediction, Mental Wellness</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:sauravmukherjee928@gmail.com"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sauravmukherjee44/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/SauravMukherjee44/AI-HealthCare-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
