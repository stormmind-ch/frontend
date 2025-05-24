import type {RawDamageResponse} from "../types/Damages.tsx";

export async function fetchDamageData(): Promise<RawDamageResponse>{
    const vitegroupeddamageurl = import.meta.env.VITE_GROUPED_DAMAGE_URL;
    const response = await fetch(vitegroupeddamageurl);
    if (!response.ok) {
        throw new Error("Failed to fetch Damage Data");
    }
    console.log(response);
    return await response.json();
}
