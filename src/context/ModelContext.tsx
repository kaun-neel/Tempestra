import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as tf from '@tensorflow/tfjs';

// Types
interface ModelConfig {
  modelType: string;
  timeSteps: number;
  resolution: number;
  ensembleSize: number;
}

interface PredictionData {
  hurricanePath: number[][];
  confidence: number[][][];
  metrics: any;
}

interface PredictionMetrics {
  mae: number;
  rmse: number;
  r2: number;
  speedup: number;
}

interface ModelContextType {
  model: tf.LayersModel | null;
  modelConfig: ModelConfig;
  predictionData: PredictionData | null;
  predictionMetrics: PredictionMetrics | null;
  isModelLoaded: boolean;
  isPredicting: boolean;
  selectedRegion: 'US' | 'India' | 'China';
  updateModelConfig: (config: ModelConfig) => void;
  loadModel: () => Promise<void>;
  runPrediction: () => Promise<void>;
  setSelectedRegion: (region: 'US' | 'India' | 'China') => void;
}

const defaultModelConfig: ModelConfig = {
  modelType: 'cnn',
  timeSteps: 48,
  resolution: 4,
  ensembleSize: 10,
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const ModelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [modelConfig, setModelConfig] = useState<ModelConfig>(defaultModelConfig);
  const [predictionData, setPredictionData] = useState<PredictionData | null>(null);
  const [predictionMetrics, setPredictionMetrics] = useState<PredictionMetrics | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
  const [isPredicting, setIsPredicting] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<'US' | 'India' | 'China'>('US');

  const loadModel = async () => {
    try {
      setIsModelLoaded(false);
      
      const newModel = tf.sequential();
      
      if (modelConfig.modelType === 'cnn' || modelConfig.modelType === 'hybrid') {
        newModel.add(tf.layers.conv2d({
          inputShape: [10, 10, 4],
          filters: 16,
          kernelSize: 3,
          activation: 'relu',
        }));
        newModel.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
        newModel.add(tf.layers.flatten());
        newModel.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        newModel.add(tf.layers.dense({ units: 12 }));
      } else {
        newModel.add(tf.layers.dense({
          inputShape: [20],
          units: 64,
          activation: 'relu',
        }));
        newModel.add(tf.layers.dense({ units: 64, activation: 'relu' }));
        newModel.add(tf.layers.dense({ units: 12 }));
      }
      
      newModel.compile({
        optimizer: 'adam',
        loss: 'meanSquaredError',
      });
      
      setModel(newModel);
      setIsModelLoaded(true);
      
      runPrediction();
      
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Failed to load model:', error);
    }
  };

  const runPrediction = async () => {
    try {
      setIsPredicting(true);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const regionPaths = {
        US: [
          [25.7617, -80.1918],
          [27.9506, -82.4572],
          [29.9511, -90.0715],
          [32.7767, -96.7970],
        ],
        India: [
          [22.5726, 88.3639],
          [19.0760, 72.8777],
          [17.3850, 78.4867],
          [13.0827, 80.2707],
        ],
        China: [
          [31.2304, 121.4737],
          [29.4316, 106.9123],
          [30.5928, 114.3055],
          [23.1291, 113.2644],
        ]
      };

      const simulatedPredictionData = {
        hurricanePath: regionPaths[selectedRegion],
        confidence: regionPaths[selectedRegion].map(point => [
          [point[0] + 0.5, point[1] + 0.5],
          [point[0] - 0.5, point[1] - 0.5]
        ]),
        metrics: {
          mae: 2.34,
          rmse: 3.12,
          r2: 0.87,
        },
      };
      
      const scaledConfidence = simulatedPredictionData.confidence.map(interval => {
        const confidenceFactor = 1 + (modelConfig.ensembleSize / 50) - (modelConfig.resolution / 10);
        return interval.map(point => [
          point[0] + (Math.random() * 0.1 - 0.05) * confidenceFactor, 
          point[1] + (Math.random() * 0.1 - 0.05) * confidenceFactor
        ]);
      });
      
      setPredictionData({
        ...simulatedPredictionData,
        confidence: scaledConfidence,
      });
      
      setPredictionMetrics({
        mae: 2.34 - (modelConfig.ensembleSize / 100) + (modelConfig.resolution / 20),
        rmse: 3.12 - (modelConfig.ensembleSize / 150) + (modelConfig.resolution / 25),
        r2: 0.87 + (modelConfig.ensembleSize / 500) - (modelConfig.resolution / 50),
        speedup: 125 * (modelConfig.modelType === 'cnn' ? 1.2 : 1.0),
      });
      
      setIsPredicting(false);
    } catch (error) {
      console.error('Error running prediction:', error);
      setIsPredicting(false);
    }
  };

  const updateModelConfig = (config: ModelConfig) => {
    setModelConfig(config);
  };

  React.useEffect(() => {
    loadModel();
  }, []);

  const value = {
    model,
    modelConfig,
    predictionData,
    predictionMetrics,
    isModelLoaded,
    isPredicting,
    selectedRegion,
    updateModelConfig,
    loadModel,
    runPrediction,
    setSelectedRegion,
  };

  return <ModelContext.Provider value={value}>{children}</ModelContext.Provider>;
};

export const useModelContext = (): ModelContextType => {
  const context = useContext(ModelContext);
  
  if (context === undefined) {
    throw new Error('useModelContext must be used within a ModelProvider');
  }
  
  return context;
};

export default ModelProvider;