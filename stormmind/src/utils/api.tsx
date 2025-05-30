import type {AllMunicipalityForecast, RawDamageResponse} from "../types/types.tsx";

export async function fetchJson<T>(url: string, errorMessage = "Failed to fetch data"):
    Promise<T> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(errorMessage);
    return res.json();
}

export const fetchDamageData = () =>
    fetchJson<RawDamageResponse>(
        import.meta.env.VITE_GROUPED_DAMAGE_URL,
        "Failed to fetch damage data"
    );

export const fetchForecastData = (model: string) =>
    fetchJson<AllMunicipalityForecast>(
        `${import.meta.env.VITE_ALL_FORECAST_URL}/${model}`,
        "Failed to fetch forecast data"
    );
