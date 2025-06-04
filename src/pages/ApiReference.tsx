import React from 'react';
import Layout from '../components/layout/Layout';

const ApiReference: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">REST API Endpoints</h2>
            
            <div className="space-y-6">
              <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
                <h3 className="text-xl font-medium mb-4">Prediction API</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-primary-400">POST /api/predict</h4>
                    <p className="text-storm-300 mt-2">Generate weather predictions for a specific region</p>
                    <pre className="bg-storm-900 p-4 rounded-md mt-2 overflow-x-auto">
{`{
  "region": "US" | "India" | "China",
  "modelType": "cnn" | "pinn" | "hybrid",
  "timeSteps": number,
  "resolution": number,
  "ensembleSize": number
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
                <h3 className="text-xl font-medium mb-4">Model Management</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-primary-400">GET /api/models</h4>
                    <p className="text-storm-300 mt-2">List available prediction models</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-primary-400">GET /api/models/{'{region}'}</h4>
                    <p className="text-storm-300 mt-2">Get region-specific model details</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">WebSocket API</h2>
            <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
              <h3 className="text-xl font-medium mb-4">Real-time Updates</h3>
              <p className="text-storm-300">
                Connect to <code className="text-primary-400">ws://api.tempestra.ai/predictions</code> for real-time prediction updates
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;