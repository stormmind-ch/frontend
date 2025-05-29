import type {AllMunicipalityForecast, HeatmapPoint, RawDamageResponse} from "../types/types.tsx";

export const toDamageHeatmapPoints = (
    data: RawDamageResponse,
    maxWeight = 2
): HeatmapPoint[] =>
    data.AllGroupedDamages.map(({ municipality, groupedDamages }) => ({
        lat: municipality.coordinates.latitude,
        lng: municipality.coordinates.longitude,
        weight: Math.min(100, (groupedDamages / maxWeight) * 100),
        mun: municipality.name,
    }));


export const toForecastHeatmapPoints = (
    data: AllMunicipalityForecast ,
): HeatmapPoint[] =>
    data.forecastDtos.map(({ municipality, prediction }) => ({
        lat: municipality.coordinates.latitude,
        lng: municipality.coordinates.longitude,
        weight: calculateWeight(prediction),
        mun: municipality.name,
    }));

function calculateWeight(forecast: number): number {
    if (forecast <= 0.5) {
        return 0;
    }else {
        return forecast;
    }
}
