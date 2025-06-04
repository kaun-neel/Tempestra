import React from 'react';
import { Brain, CloudLightning, Droplets, Wind } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tempestra</h1>
          <p className="text-xl text-storm-300">
            Using deep learning to accelerate climate modeling and prediction
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-storm-700 pb-2">Our Mission</h2>
          <p className="mb-4 text-storm-300">
            Tempestra aims to revolutionize climate modeling by creating neural network surrogates 
            that can approximate complex climate simulations at a fraction of the computational cost.
          </p>
          <p className="text-storm-300">
            By leveraging state-of-the-art deep learning techniques, we can accelerate climate research, 
            improve hurricane track prediction, and provide more accessible tools for researchers and 
            decision-makers around the world.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-storm-700 pb-2">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Neural Networks</h3>
              </div>
              <p className="text-storm-300">
                We use convolutional neural networks (CNNs) and physics-informed neural networks (PINNs) 
                to learn the complex patterns in climate data and simulation outputs.
              </p>
            </div>
            
            <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
              <div className="flex items-center mb-4">
                <CloudLightning className="h-8 w-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Storm Prediction</h3>
              </div>
              <p className="text-storm-300">
                Our models can predict hurricane paths, intensity, and other characteristics 
                with increasing accuracy as they learn from historical data and simulation results.
              </p>
            </div>
            
            <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
              <div className="flex items-center mb-4">
                <Droplets className="h-8 w-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Precipitation Modeling</h3>
              </div>
              <p className="text-storm-300">
                Predict rainfall patterns and extreme precipitation events with our specialized 
                models trained on satellite imagery and historical weather data.
              </p>
            </div>
            
            <div className="bg-storm-800/60 backdrop-blur-sm rounded-xl p-6 border border-storm-700">
              <div className="flex items-center mb-4">
                <Wind className="h-8 w-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Climate Simulation</h3>
              </div>
              <p className="text-storm-300">
                Our surrogate models can run in seconds what would take traditional climate models 
                hours or days to compute, enabling more iterations and experiments.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-storm-700 pb-2">How It Works</h2>
          <ol className="space-y-6 mt-6">
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-800 flex items-center justify-center mr-4">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-storm-300">
                  We gather historical climate data, satellite imagery, and outputs from traditional 
                  climate simulations to create comprehensive training datasets.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-800 flex items-center justify-center mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Model Training</h3>
                <p className="text-storm-300">
                  Our neural networks learn to approximate the behavior of complex physical climate models, 
                  recognizing patterns and relationships in the data.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-800 flex items-center justify-center mr-4">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Validation</h3>
                <p className="text-storm-300">
                  We rigorously test our models against held-out test data and compare predictions with 
                  actual outcomes to ensure accuracy and reliability.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-800 flex items-center justify-center mr-4">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prediction & Visualization</h3>
                <p className="text-storm-300">
                  Our platform allows users to interact with the trained models, adjust parameters, 
                  and visualize predictions for different scenarios.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;