import React from 'react';
import PredictionMap from '../components/prediction/PredictionMap';
import PredictionControls from '../components/prediction/PredictionControls';
import DataComparison from '../components/data/DataComparison';
import MetricsPanel from '../components/data/MetricsPanel';
import ModelInfo from '../components/ui/ModelInfo';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Climate Prediction Dashboard</h1>
        <p className="text-storm-300 max-w-3xl">
          Visualize and predict hurricane paths and climate patterns using our deep learning surrogate model.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-storm-700">
            <div className="p-4 border-b border-storm-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Prediction Visualization</h2>
              <span className="text-xs px-2 py-1 bg-primary-900/50 text-primary-300 rounded-full">Live</span>
            </div>
            <div className="h-[500px]">
              <PredictionMap />
            </div>
          </div>
          
          <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-storm-700 p-4">
            <h2 className="text-xl font-semibold mb-4">Historical vs. Predicted Data</h2>
            <DataComparison />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-storm-700 p-4">
            <h2 className="text-xl font-semibold mb-4">Model Parameters</h2>
            <PredictionControls />
          </div>
          
          <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-storm-700 p-4">
            <h2 className="text-xl font-semibold mb-4">Prediction Metrics</h2>
            <MetricsPanel />
          </div>
          
          <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-storm-700 p-4">
            <ModelInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;