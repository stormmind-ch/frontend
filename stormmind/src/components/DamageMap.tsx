import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import rawHeatMapData from '../ressources/DmgLocations.tsx'

const HeatmapOverlay = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const tryInitHeatmap = () => {
      if (!window.google?.maps?.visualization?.HeatmapLayer) {
        console.warn('HeatmapLayer not ready yet. Retrying...');
        setTimeout(tryInitHeatmap, 100);
        return;
      }

      const heatmapData = rawHeatMapData.map((point) => ({
        location: new google.maps.LatLng(point.lat, point.lng),
        weight: point.weight,
      }));

      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
      });

      heatmap.setMap(map);
    };

    tryInitHeatmap();
  }, [map]);

  return null;
};

const DmgMap = () => (
  <APIProvider
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    libraries={['visualization']}
  >
    <Map
      style={{ width: '600px', height: '400px' }}
      defaultCenter={{ lat: 46.8132, lng: 8.2242 }} // Zentrum der Schweiz
      defaultZoom={7}
      gestureHandling="greedy"
      disableDefaultUI={true}
    >
      <HeatmapOverlay />
    </Map>
  </APIProvider>
);

export default DmgMap;