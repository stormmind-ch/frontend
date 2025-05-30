import {
  APIProvider,
  Map as GoogleMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import type { HeatmapPoint } from "../types/types";
import {HeatmapOverlay} from "./HeatmapOverlay.tsx";

interface DmgMapProps {
  /** Asynchronous function returning domain data (e.g. forecast or damage) */
  fetcher: () => Promise<unknown>;
  /** Converts domain data into a flat array of heatmap points */
  processor: (raw: unknown) => HeatmapPoint[];
}

const DmgMap: React.FC<DmgMapProps> = ({ fetcher, processor }) => {
  const [points, setPoints] = useState<HeatmapPoint[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch once on mount (or when the fetcher/processor functions themselves change)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await fetcher();
        if (!cancelled) setPoints(processor(raw));
      } catch (err) {
        if (!cancelled)
          setError((err as Error)?.message ?? "Unknown error while loading map data");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [fetcher, processor]);

  if (error) return <p className="text-red-600">{error}</p>;

  return (
      <APIProvider
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          libraries={["visualization"]}
      >
        <GoogleMap
            style={{ width: "600px", height: "400px" }}
            defaultCenter={{ lat: 46.8132, lng: 8.2242 }}
            defaultZoom={7.5}
            gestureHandling="greedy"
            disableDefaultUI
        >
          <HeatmapOverlay points={points} />
        </GoogleMap>
      </APIProvider>
  );
};

export default DmgMap;