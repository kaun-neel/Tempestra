Tempestra is a deep learning climate model surrogate that uses advanced neural networks to predict weather patterns and storm trajectories across different regions.

Model Architecture
Neural Network Types
Convolutional Neural Network (CNN)
Physics-Informed Neural Network (PINN)
Hybrid CNN-PINN
Parameters
Time Steps: Controls prediction horizon (6-120 hours)
Resolution: Affects spatial detail (1-10km)
Ensemble Size: Number of model variants (1-50)
Usage Guide
Region Selection
Choose between United States, India, or China for region-specific predictions. Each region uses locally trained models optimized for regional weather patterns.

Running Predictions
Adjust model parameters and click "Run Prediction" to generate new forecasts. Results include storm paths, confidence intervals, and performance metrics.
![image](https://github.com/user-attachments/assets/1d9e6377-dc0c-40a2-b665-e09fe74474e5)
