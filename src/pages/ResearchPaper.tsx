import React from 'react';
import Layout from '../components/layout/Layout';

const ResearchPaper: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research Paper</h1>
          <p className="text-xl text-storm-300">
            Deep Learning Surrogate Models for Climate Prediction
          </p>
          <p className="text-storm-400 mt-2">Published: March 2024</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
            <p className="text-storm-300">
              This paper presents Tempestra, a novel deep learning approach to climate modeling
              that combines convolutional neural networks with physics-informed neural networks.
              Our model achieves comparable accuracy to traditional numerical weather prediction
              methods while reducing computational requirements by two orders of magnitude.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Data Collection</h3>
              <p className="text-storm-300">
                We utilized 50 years of historical weather data, including satellite imagery,
                ground station measurements, and outputs from high-resolution climate models.
                The dataset covers three major regions: United States, India, and China.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Model Architecture</h3>
              <p className="text-storm-300">
                Our hybrid architecture combines CNNs for spatial feature extraction with
                PINNs to enforce physical constraints. This ensures predictions remain
                physically plausible while leveraging pattern recognition capabilities.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="space-y-4">
              <p className="text-storm-300">
                Tempestra achieves mean absolute errors of 2.34km in storm path prediction,
                with R² scores of 0.87 across all regions. Computational speedup ranges from
                100x to 150x compared to traditional numerical methods.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;