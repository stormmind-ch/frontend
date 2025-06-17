import type { AllMunicipalityForecast, HeatmapPoint, RawDamageResponse} from "../types/types.tsx";

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
    data: AllMunicipalityForecast,
    selectedMunicipality: string
): HeatmapPoint[] => {
    // Schritt 1: Finde den Forecast der ausgewählten Gemeinde
    const reference = data.forecastDtos.find(
        ({ forecast }) => forecast.municipality.name === selectedMunicipality
    );

    if (!reference) return []; // Falls die Gemeinde nicht gefunden wurde

    const targetCentroidName = reference.forecast.centroid.name;

    // Schritt 2: Filtere alle Forecasts mit demselben Centroid-Namen
    return data.forecastDtos
        .filter(
            ({ forecast }) => forecast.centroid.name === targetCentroidName
        )
        .map(({ forecast }) => ({
            lat: forecast.municipality.coordinates.latitude,
            lng: forecast.municipality.coordinates.longitude,
            weight: calculateWeight(forecast.forecast),
            mun: forecast.municipality.name,
        }));
};
/*export const toForecastHeatmapPoints = (
    data: AllMunicipalityForecast ,
): HeatmapPoint[] =>
    data.forecastDtos.map(({ forecast }) => ({
        lat: forecast.municipality.coordinates.latitude,
        lng: forecast.municipality.coordinates.longitude,
        weight: calculateWeight(forecast.forecast),
        mun: forecast.municipality.name,
    }));*/

function calculateWeight(forecast: number): number {
    if (forecast <= 0.5) {
        return 0;
    }else {
        return forecast;
    }
}
