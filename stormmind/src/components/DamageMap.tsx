import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import {fetchDamageData} from '../services/DamageDataService.tsx';
import {processDamageData} from "../utils/ProcessDamageData.tsx";
import type {RawDamageResponse} from "../types/Damages.tsx";


const HeatmapOverlay = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const tryInitHeatmap = async () => {
      if (!window.google?.maps?.visualization?.HeatmapLayer) {
        console.warn('HeatmapLayer not ready yet. Retrying...');
        setTimeout(tryInitHeatmap, 100);
        return;
      }

      try {
        const damageData = await fetchDamageData();
        const rawDamageData = damageData as RawDamageResponse;
        const processedData = processDamageData(rawDamageData);

        const heatmapData = processedData.map((point) => ({
          location: new google.maps.LatLng(point.lat, point.lng),
          weight: point.weight,
        }));

        const heatmap = new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
        });

        heatmap.setMap(map);
      } catch (error) {
        console.error('Error initializing heatmap:', error);
      }
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
      defaultCenter={{ lat: 46.8132, lng: 8.2242 }} // Center of Switzerland
      defaultZoom={7.5}
      gestureHandling="greedy"
      disableDefaultUI={true}
    >
      <HeatmapOverlay />
    </Map>
  </APIProvider>
);

export default DmgMap;