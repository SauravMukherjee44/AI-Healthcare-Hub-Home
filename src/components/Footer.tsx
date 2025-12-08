import { Heart, Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">AI Healthcare Hub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              An AI-powered healthcare platform leveraging machine learning for disease prediction, mental wellness support, and personalized healthcare insights.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#portals" className="hover:text-blue-400 transition-colors">Portals</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Portals</h3>
            <ul className="space-y-2">
              <li><a href="https://ai-healthcare-hub.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Disease Diagnosis</a></li>
              <li><a href="https://ai-healthcare-hub-saurav.netlify.app/mental%20wellness/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Mental Wellness</a></li>
              <li><a href="https://ai-healthcare-hub-saurav.netlify.app/main.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Healthcare Donation</a></li>
              <li><a href="#monitoring" className="hover:text-blue-400 transition-colors">Health Monitoring</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} AI Healthcare Hub. A personal healthcare project.
            </p>
            <div className="flex items-center space-x-4">
              <a href="mailto:sauravmukherjee928@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>
              <a href="https://www.linkedin.com/in/sauravmukherjee44/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/SauravMukherjee44/AI-HealthCare-Hub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
