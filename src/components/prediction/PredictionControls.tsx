import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';
import { useModelContext } from '../../context/ModelContext';

const PredictionControls: React.FC = () => {
  const { modelConfig, updateModelConfig, runPrediction, selectedRegion, setSelectedRegion, isPredicting } = useModelContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const parsedValue = type === 'range' ? parseInt(value) : value;
    
    updateModelConfig({
      ...modelConfig,
      [name]: parsedValue,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Region</label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value as 'US' | 'India' | 'China')}
          className="w-full rounded-md bg-storm-900 border border-storm-700 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="US">United States</option>
          <option value="India">India</option>
          <option value="China">China</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Model Type</label>
        <select
          name="modelType"
          value={modelConfig.modelType}
          onChange={handleChange}
          className="w-full rounded-md bg-storm-900 border border-storm-700 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="cnn">Convolutional Neural Network (CNN)</option>
          <option value="pinn">Physics-Informed Neural Network (PINN)</option>
          <option value="hybrid">Hybrid CNN-PINN</option>
        </select>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <label className="block text-sm font-medium">Prediction Timeframe</label>
          <span className="text-sm text-storm-400">{modelConfig.timeSteps} hours</span>
        </div>
        <input
          type="range"
          name="timeSteps"
          min="6"
          max="120"
          step="6"
          value={modelConfig.timeSteps}
          onChange={handleChange}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-storm-500">
          <span>6h</span>
          <span>120h</span>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <label className="block text-sm font-medium">Resolution</label>
          <span className="text-sm text-storm-400">{modelConfig.resolution}km</span>
        </div>
        <input
          type="range"
          name="resolution"
          min="1"
          max="10"
          step="1"
          value={modelConfig.resolution}
          onChange={handleChange}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-storm-500">
          <span>High (1km)</span>
          <span>Low (10km)</span>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between mb-1">
          <label className="block text-sm font-medium">Ensemble Size</label>
          <span className="text-sm text-storm-400">{modelConfig.ensembleSize} models</span>
        </div>
        <input
          type="range"
          name="ensembleSize"
          min="1"
          max="50"
          step="1"
          value={modelConfig.ensembleSize}
          onChange={handleChange}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-xs text-storm-500">
          <span>Single</span>
          <span>Ensemble</span>
        </div>
      </div>
      
      {modelConfig.resolution < 3 && modelConfig.ensembleSize > 25 && (
        <div className="flex items-start space-x-2 p-2 rounded bg-warning-900/30 border border-warning-800/30 text-warning-300 text-sm">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p>High resolution with large ensemble size may impact performance</p>
        </div>
      )}
      
      <button
        onClick={runPrediction}
        disabled={isPredicting}
        className={`w-full flex items-center justify-center space-x-2 bg-primary-700 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-storm-800 ${
          isPredicting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <RefreshCw className={`h-4 w-4 ${isPredicting ? 'animate-spin' : ''}`} />
        <span>{isPredicting ? 'Running Prediction...' : 'Run Prediction'}</span>
      </button>
    </div>
  );
};

export default PredictionControls;