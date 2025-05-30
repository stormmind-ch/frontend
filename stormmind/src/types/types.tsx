export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Municipality {
    name: string;
    coordinates: Coordinates;
}

export interface RawDamage {
    municipality: Municipality;
    groupedDamages: number;
}

export interface RawDamageResponse {
    AllGroupedDamages: RawDamage[];
}

export interface MunicipalityForecast {
    municipality: Municipality;
    prediction: number;
}

export interface AllMunicipalityForecast {
    forecastDtos: MunicipalityForecast[];
}

export interface HeatmapPoint {
    lat: number;
    lng: number;
    weight: number;
    mun: string;
}