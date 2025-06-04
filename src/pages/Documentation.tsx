import React from 'react';
import Layout from '../components/layout/Layout';

const Documentation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="prose prose-invert">
              <p className="text-storm-300">
                Tempestra is a deep learning climate model surrogate that uses advanced neural networks
                to predict weather patterns and storm trajectories across different regions.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Model Architecture</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Neural Network Types</h3>
              <ul className="list-disc list-inside text-storm-300 space-y-2">
                <li>Convolutional Neural Network (CNN)</li>
                <li>Physics-Informed Neural Network (PINN)</li>
                <li>Hybrid CNN-PINN</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Parameters</h3>
              <ul className="list-disc list-inside text-storm-300 space-y-2">
                <li>Time Steps: Controls prediction horizon (6-120 hours)</li>
                <li>Resolution: Affects spatial detail (1-10km)</li>
                <li>Ensemble Size: Number of model variants (1-50)</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage Guide</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Region Selection</h3>
              <p className="text-storm-300">
                Choose between United States, India, or China for region-specific predictions.
                Each region uses locally trained models optimized for regional weather patterns.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Running Predictions</h3>
              <p className="text-storm-300">
                Adjust model parameters and click "Run Prediction" to generate new forecasts.
                Results include storm paths, confidence intervals, and performance metrics.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;