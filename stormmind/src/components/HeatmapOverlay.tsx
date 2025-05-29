import {
    useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";
import type { HeatmapPoint } from "../types/types";

interface HeatmapOverlayProps {
    /** Eagerly‑fetched & already‑processed points */
    points: HeatmapPoint[];
}

export const HeatmapOverlay: React.FC<HeatmapOverlayProps> = ({ points }) => {
    const map = useMap();
    const layerRef = useRef<google.maps.visualization.HeatmapLayer | null>(null);

    useEffect(() => {
        if (!map || !window.google?.maps?.visualization?.HeatmapLayer) return;
        layerRef.current?.setMap(null);

        const heatmapData = points.map(
            ({ lat, lng, weight }) => ({
                location: new google.maps.LatLng(lat, lng),
                weight,
            })
        );

        layerRef.current = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
        });

        layerRef.current.setMap(map);

        return () => layerRef.current?.setMap(null);
    }, [map, points]);

    return null;
};