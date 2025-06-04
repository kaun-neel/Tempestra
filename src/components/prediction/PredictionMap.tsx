import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useModelContext } from '../../context/ModelContext';
import MapLegend from './MapLegend';

const PredictionMap: React.FC = () => {
  const { predictionData, modelConfig, selectedRegion } = useModelContext();
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Region coordinates
  const regionCoordinates = {
    US: { center: [39.8283, -98.5795], zoom: 4 },
    India: { center: [20.5937, 78.9629], zoom: 4 },
    China: { center: [35.8617, 104.1954], zoom: 4 }
  };

  // Get paths based on selected region
  const getRegionPaths = () => {
    const paths = {
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
    return paths[selectedRegion] || paths.US;
  };

  const hurricanePath = getRegionPaths();

  // Generate confidence intervals
  const confidence = hurricanePath.map(point => [
    [point[0] + 0.5, point[1] + 0.5],
    [point[0] - 0.5, point[1] - 0.5]
  ]);

  const confidencePolygons = hurricanePath.map((point, index) => {
    if (index === hurricanePath.length - 1) return null;
    
    const upper = confidence[index][0];
    const lower = confidence[index][1];
    const nextUpper = confidence[index + 1][0];
    const nextLower = confidence[index + 1][1];
    
    return [
      upper,
      nextUpper,
      nextLower,
      lower,
      upper
    ];
  }).filter(Boolean);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const { center, zoom } = regionCoordinates[selectedRegion];
      map.setView(center, zoom);
    }
  }, [selectedRegion]);

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 bg-storm-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-primary-300">Running prediction model...</p>
          </div>
        </div>
      )}
      
      <MapContainer 
        center={regionCoordinates[selectedRegion].center}
        zoom={regionCoordinates[selectedRegion].zoom}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="saturate-[0.3] contrast-[1.2]"
        />
        
        <Polyline 
          positions={hurricanePath} 
          color="#3B82F6" 
          weight={4} 
          opacity={0.8}
          dashArray="6, 10"
        />
        
        {confidencePolygons.map((polygon, index) => (
          <Polyline 
            key={index} 
            positions={polygon} 
            color="#3B82F6" 
            weight={1} 
            opacity={0.3} 
            fill={true} 
            fillColor="#3B82F6" 
            fillOpacity={0.1} 
          />
        ))}
        
        {hurricanePath.map((position, index) => (
          <CircleMarker 
            key={index} 
            center={position} 
            radius={index === 0 ? 8 : 6} 
            fillColor={index === 0 ? "#DC2626" : "#3B82F6"} 
            color={index === 0 ? "#F87171" : "#60A5FA"} 
            weight={2} 
            fillOpacity={0.8}
          >
            <Popup>
              <div className="text-storm-800">
                <h3 className="font-bold">{index === 0 ? "Current Position" : `Predicted Position T+${index}`}</h3>
                <p>Lat: {position[0].toFixed(4)}</p>
                <p>Lng: {position[1].toFixed(4)}</p>
                <p>Confidence: {90 - index * 5}%</p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
        
        <MapLegend />
      </MapContainer>
    </div>
  );
};

export default PredictionMap;