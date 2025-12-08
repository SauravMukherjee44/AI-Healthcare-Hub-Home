import { Zap, Shield, Globe, Clock, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Get instant health insights powered by edge computing and advanced AI algorithms.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your health data is encrypted and protected with blockchain technology.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Access healthcare solutions from anywhere in the world, anytime you need.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our AI-powered platform is always available to assist you with health concerns.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict health risks before they become serious.',
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Connect with healthcare professionals and counselors for personalized support.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key capabilities of this AI-powered healthcare platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
