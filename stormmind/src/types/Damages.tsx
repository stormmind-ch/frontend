type RawDamage = {
    municipality: string,
    latitude: number,
    longitude: number,
    occurrence_count: number
}

export type RawDamageResponse = {
    all_grouped_damages: RawDamage[];
};