import type {RawDamageResponse} from "../types/Damages.tsx";
import type {HeatmapPoint} from "../types/HeatMap.tsx";

export function processDamageData(damageResponse: RawDamageResponse): HeatmapPoint[] {
    if (!damageResponse || !Array.isArray(damageResponse.AllGroupedDamages)) {
        console.error("Invalid data format", damageResponse);
        return [];
    }

    return damageResponse.AllGroupedDamages.map(
        (damage) => {
            return {
                lat: damage.latitude,
                lng: damage.longitude,
                weight: calculateWeight(damage.occurrenceCount),
                mun: damage.municipality
            }
        }
    )

}

function calculateWeight(occurrenceCount: number): number {
    const max = 2;
    return Math.min(100, (occurrenceCount / max) * 100);
}
