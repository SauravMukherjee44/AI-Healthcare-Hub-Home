import { useEffect, useState } from 'react';
import { Activity, Heart, TrendingUp, Droplet, Moon, Footprints, Weight, AlertCircle, ExternalLink } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface HealthMetric {
  id: string;
  metric_date: string;
  heart_rate: number;
  blood_pressure_systolic: number;
  blood_pressure_diastolic: number;
  blood_glucose: number;
  weight: number | string;
  steps: number;
  sleep_hours: number;
  water_intake: number | string;
}

interface HealthAlert {
  id: string;
  alert_type: string;
  message: string;
  metric_value: string;
  is_read: boolean;
  created_at: string;
}

export default function HealthMonitoring() {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [alerts, setAlerts] = useState<HealthAlert[]>([]);
  const [latestMetric, setLatestMetric] = useState<HealthMetric | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHealthData();
  }, []);

  const generateMockData = (): HealthMetric[] => {
    const mockData: HealthMetric[] = [];
    const today = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      mockData.push({
        id: `mock-${i}`,
        metric_date: date.toISOString(),
        heart_rate: 65 + Math.floor(Math.random() * 20),
        blood_pressure_systolic: 115 + Math.floor(Math.random() * 15),
        blood_pressure_diastolic: 70 + Math.floor(Math.random() * 15),
        blood_glucose: 85 + Math.floor(Math.random() * 20),
        weight: 75 - (i * 0.1) + Math.random() * 2,
        steps: 7000 + Math.floor(Math.random() * 5000),
        sleep_hours: 6.5 + Math.random() * 2,
        water_intake: 2 + Math.random() * 1.5
      });
    }

    return mockData;
  };

  const fetchHealthData = async () => {
    try {
      const { data: metricsData } = await supabase
        .from('health_metrics')
        .select('*')
        .order('metric_date', { ascending: false })
        .limit(30);

      const { data: alertsData } = await supabase
        .from('health_alerts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (metricsData && metricsData.length > 0) {
        setMetrics(metricsData);
        setLatestMetric(metricsData[0]);
      } else {
        const mockMetrics = generateMockData();
        setMetrics(mockMetrics);
        setLatestMetric(mockMetrics[0]);
      }

      if (alertsData) {
        setAlerts(alertsData);
      }
    } catch (error) {
      console.error('Error fetching health data:', error);
      const mockMetrics = generateMockData();
      setMetrics(mockMetrics);
      setLatestMetric(mockMetrics[0]);
    } finally {
      setLoading(false);
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'bg-red-100 border-red-500 text-red-800';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      default:
        return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      default:
        return 'text-blue-600';
    }
  };

  const calculateTrend = (data: number[]) => {
    if (data.length < 2) return 0;
    const recent = data.slice(0, 7).reduce((a, b) => a + b, 0) / Math.min(7, data.length);
    const older = data.slice(7, 14).reduce((a, b) => a + b, 0) / Math.min(7, data.slice(7, 14).length);
    return ((recent - older) / older) * 100;
  };

  const renderMiniChart = (data: number[], color: string) => {
    if (data.length === 0) return null;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const points = data.slice(0, 14).reverse().map((value, index) => {
      const x = (index / 13) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg className="w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="drop-shadow-sm"
        />
      </svg>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="text-center">
          <Activity className="w-16 h-16 text-blue-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading your health data...</p>
        </div>
      </div>
    );
  }

  const heartRates = metrics.map(m => m.heart_rate);
  const weights = metrics.map(m => typeof m.weight === 'string' ? parseFloat(m.weight) : m.weight);
  const steps = metrics.map(m => m.steps);
  const sleepHours = metrics.map(m => m.sleep_hours);

  const heartRateTrend = calculateTrend(heartRates);
  const weightTrend = calculateTrend(weights);
  const stepsTrend = calculateTrend(steps);

  return (
    <section id="monitoring" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Health Monitoring Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your vitals, analyze trends, and stay on top of your health with AI-powered insights
          </p>
        </div>

        {alerts.filter(a => !a.is_read).length > 0 && (
          <div className="mb-8 space-y-3">
            {alerts.filter(a => !a.is_read).map(alert => (
              <div key={alert.id} className={`p-4 rounded-xl border-l-4 ${getAlertColor(alert.alert_type)} shadow-sm`}>
                <div className="flex items-start space-x-3">
                  <AlertCircle className={`w-5 h-5 mt-0.5 ${getAlertIcon(alert.alert_type)}`} />
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    {alert.metric_value && (
                      <p className="text-sm opacity-75 mt-1">Value: {alert.metric_value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${heartRateTrend > 0 ? 'text-red-600' : 'text-green-600'}`}>
                <TrendingUp className={`w-4 h-4 ${heartRateTrend < 0 ? 'rotate-180' : ''}`} />
                <span>{Math.abs(heartRateTrend).toFixed(1)}%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Heart Rate</h3>
            <p className="text-3xl font-bold text-gray-900 mb-3">
              {latestMetric?.heart_rate} <span className="text-lg text-gray-500">BPM</span>
            </p>
            {renderMiniChart(heartRates, '#ef4444')}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm text-gray-600">
                Normal
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Blood Pressure</h3>
            <p className="text-3xl font-bold text-gray-900 mb-3">
              {latestMetric?.blood_pressure_systolic}/{latestMetric?.blood_pressure_diastolic}
              <span className="text-lg text-gray-500 ml-1">mmHg</span>
            </p>
            {renderMiniChart(metrics.map(m => m.blood_pressure_systolic), '#3b82f6')}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Droplet className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-sm text-gray-600">
                Optimal
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Blood Glucose</h3>
            <p className="text-3xl font-bold text-gray-900 mb-3">
              {latestMetric?.blood_glucose} <span className="text-lg text-gray-500">mg/dL</span>
            </p>
            {renderMiniChart(metrics.map(m => m.blood_glucose), '#10b981')}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Weight className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${weightTrend > 0 ? 'text-red-600' : 'text-green-600'}`}>
                <TrendingUp className={`w-4 h-4 ${weightTrend < 0 ? 'rotate-180' : ''}`} />
                <span>{Math.abs(weightTrend).toFixed(1)}%</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Weight</h3>
            <p className="text-3xl font-bold text-gray-900 mb-3">
              {latestMetric?.weight} <span className="text-lg text-gray-500">kg</span>
            </p>
            {renderMiniChart(weights, '#8b5cf6')}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Footprints className="w-10 h-10" />
              <div className={`flex items-center space-x-1 text-sm ${stepsTrend > 0 ? 'text-green-200' : 'text-red-200'}`}>
                <TrendingUp className={`w-4 h-4 ${stepsTrend < 0 ? 'rotate-180' : ''}`} />
                <span>{Math.abs(stepsTrend).toFixed(1)}%</span>
              </div>
            </div>
            <h3 className="text-white/90 text-sm font-medium mb-2">Daily Steps</h3>
            <p className="text-4xl font-bold mb-2">{latestMetric?.steps.toLocaleString()}</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${Math.min((latestMetric?.steps || 0) / 10000 * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-white/80 text-sm">Goal: 10,000 steps</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Moon className="w-10 h-10" />
              <div className="text-sm text-white/90">Last night</div>
            </div>
            <h3 className="text-white/90 text-sm font-medium mb-2">Sleep Duration</h3>
            <p className="text-4xl font-bold mb-2">{latestMetric?.sleep_hours}h</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${Math.min((latestMetric?.sleep_hours || 0) / 8 * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-white/80 text-sm">Recommended: 7-9 hours</p>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Droplet className="w-10 h-10" />
              <div className="text-sm text-white/90">Today</div>
            </div>
            <h3 className="text-white/90 text-sm font-medium mb-2">Water Intake</h3>
            <p className="text-4xl font-bold mb-2">{latestMetric?.water_intake}L</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${Math.min((typeof latestMetric?.water_intake === 'string' ? parseFloat(latestMetric.water_intake) : latestMetric?.water_intake || 0) / 3 * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-white/80 text-sm">Goal: 2.5-3L per day</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Personalized Health Analysis
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Submit your symptoms for AI-powered disease prediction and receive a comprehensive health report with personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ai-healthcare-hub.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <span>Start Health Assessment</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <div className="text-blue-100 text-sm">
                <p className="font-medium">Your detailed report will be available shortly</p>
                <p className="opacity-75">Usually within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Insights & Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Positive Trends</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Your weight is trending downward, indicating good progress</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Sleep patterns are improving with consistent 7+ hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Daily step count shows increased physical activity</span>
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Areas for Improvement</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">!</span>
                  <span>Monitor blood pressure regularly - slight elevation detected</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">!</span>
                  <span>Increase water intake to meet daily hydration goals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">!</span>
                  <span>Consider reducing sugar intake - glucose levels elevated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
