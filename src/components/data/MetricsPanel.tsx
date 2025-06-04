import React from 'react';
import { useModelContext } from '../../context/ModelContext';

const MetricsPanel: React.FC = () => {
  const { modelConfig, predictionMetrics } = useModelContext();
  
  // These values would come from actual model predictions in a real app
  const metrics = [
    { name: 'Mean Absolute Error', value: '2.34', unit: 'km', change: -0.12 },
    { name: 'R² Score', value: '0.87', unit: '', change: 0.03 },
    { name: 'Computational Speedup', value: '125', unit: 'x', change: 0 },
    { name: 'Confidence Score', value: '91', unit: '%', change: -2.5 },
  ];
  
  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-storm-300">{metric.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">{metric.value}<span className="text-sm">{metric.unit}</span></span>
            {metric.change !== 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                metric.change > 0 ? 'bg-success-900/20 text-success-400' : 'bg-alert-900/20 text-alert-400'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}
              </span>
            )}
          </div>
        </div>
      ))}
      
      <div className="pt-4 mt-4 border-t border-storm-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-storm-300">Prediction Quality</span>
          <span className="text-sm text-primary-300">Very Good</span>
        </div>
        <div className="h-2 bg-storm-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full" style={{ width: '87%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;