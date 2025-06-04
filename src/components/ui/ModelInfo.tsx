import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ModelInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">About the Model</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-400 hover:text-primary-300 focus:outline-none"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-24 opacity-90'
      }`}>
        <p className="text-sm text-storm-300 mb-4">
          This deep learning surrogate model uses a convolutional neural network architecture to predict 
          hurricane paths based on historical data and climate simulations.
        </p>
        
        {isExpanded && (
          <>
            <h3 className="text-md font-semibold mt-4 mb-2">Model Architecture</h3>
            <ul className="list-disc list-inside text-sm text-storm-300 space-y-1 ml-2">
              <li>Convolutional layers for spatial pattern recognition</li>
              <li>LSTM layers for temporal sequence modeling</li>
              <li>Physics-informed loss functions to enforce physical constraints</li>
              <li>Ensemble approach to quantify prediction uncertainty</li>
            </ul>
            
            <h3 className="text-md font-semibold mt-4 mb-2">Training Data</h3>
            <p className="text-sm text-storm-300 mb-2">
              Trained on 50 years of historical hurricane data and outputs from high-resolution 
              climate models, including:
            </p>
            <ul className="list-disc list-inside text-sm text-storm-300 space-y-1 ml-2">
              <li>Satellite imagery from 1970-2024</li>
              <li>NOAA hurricane database records</li>
              <li>Climate simulation outputs from multiple models</li>
              <li>Sea surface temperature and atmospheric condition data</li>
            </ul>
            
            <div className="mt-4 pt-3 border-t border-storm-700">
              <p className="text-xs text-storm-400 italic">
                Note: This is a demonstration model. In a production environment, the model would 
                be continuously updated with new data and refined based on prediction performance.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModelInfo;