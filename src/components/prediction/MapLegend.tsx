import React from 'react';
import { useMap } from 'react-leaflet';

const MapLegend: React.FC = () => {
  const map = useMap();
  
  React.useEffect(() => {
    if (!map) return;
    
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'bg-storm-800/90 backdrop-blur-sm p-3 rounded-lg text-white text-xs w-48');
      div.innerHTML = `
        <h4 class="font-bold mb-2 text-sm">Legend</h4>
        <div class="flex items-center mb-2">
          <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <span>Current Position</span>
        </div>
        <div class="flex items-center mb-2">
          <div class="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <span>Predicted Positions</span>
        </div>
        <div class="flex items-center mb-2">
          <div class="h-0.5 w-6 bg-blue-500 mr-2" style="border-top: 3px dashed #3B82F6;"></div>
          <span>Predicted Path</span>
        </div>
        <div class="flex items-center">
          <div class="h-4 w-6 bg-blue-500/10 border border-blue-500/30 mr-2"></div>
          <span>Confidence Interval</span>
        </div>
      `;
      return div;
    };
    
    legend.addTo(map);
    
    return () => {
      legend.remove();
    };
  }, [map]);
  
  return null;
};

export default MapLegend;