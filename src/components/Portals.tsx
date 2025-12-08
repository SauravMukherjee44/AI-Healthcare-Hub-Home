import { Brain, Heart, DollarSign, Activity, ArrowRight } from 'lucide-react';

const portals = [
  {
    id: 1,
    title: 'Disease Diagnosis',
    description: 'AI-powered disease prediction using TensorFlow and Keras. Input symptoms and get instant predictions with machine learning models.',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://ai-healthcare-hub.onrender.com/',
  },
  {
    id: 2,
    title: 'Mental Wellness',
    description: 'Mental health support and counseling resources. Connect with resources and track your wellness journey.',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://ai-healthcare-hub-saurav.netlify.app/mental%20wellness/index.html',
  },
  {
    id: 3,
    title: 'Healthcare Donation',
    description: 'Support healthcare initiatives and help others. A platform connecting donors with those in need of medical assistance.',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://ai-healthcare-hub-saurav.netlify.app/main.html',
  },
  {
    id: 4,
    title: 'Health Monitoring',
    description: 'Real-time health tracking using edge computing. Monitor vitals and health metrics with personalized insights.',
    icon: Activity,
    gradient: 'from-orange-500 to-amber-500',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#monitoring',
  },
];

export default function Portals() {
  return (
    <section id="portals" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare Portals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access AI-powered healthcare solutions through these dedicated portals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <a
                key={portal.id}
                href={portal.link}
                target={portal.link.startsWith('http') ? '_blank' : '_self'}
                rel={portal.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-90`}></div>
                  <img
                    src={portal.image}
                    alt={portal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{portal.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{portal.description}</p>
                  <div className="inline-flex items-center space-x-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                    <span>Explore Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${portal.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
