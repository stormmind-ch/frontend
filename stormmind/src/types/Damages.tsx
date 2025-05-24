type RawDamage = {
    municipality: string,
    latitude: number,
    longitude: number,
    occurrenceCount: number
}

export type RawDamageResponse = {
    AllGroupedDamages: RawDamage[];
};