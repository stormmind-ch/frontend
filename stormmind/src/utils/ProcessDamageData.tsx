import type {RawDamageResponse} from "../types/Damages.tsx";
import type {HeatmapPoint} from "../types/HeatMap.tsx";

export function processDamageData(damageResponse: RawDamageResponse): HeatmapPoint[] {
    if (!damageResponse || !Array.isArray(damageResponse.all_grouped_damages)) {
        console.error("Invalid data format", damageResponse);
        return [];
    }

    return damageResponse.all_grouped_damages.map(
        (damage) => {
            return {
                lat: damage.latitude,
                lng: damage.longitude,
                weight: calculateWeight(damage.occurrence_count),
                mun: damage.municipality
            }
        }
    )

}

function calculateWeight(occurrenceCount: number): number {
    const max = 130;
    return Math.min(100, (occurrenceCount / max) * 100);
}
