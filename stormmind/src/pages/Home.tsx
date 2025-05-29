import { HeroTitle } from '../components/HeroTitle/HeroTitle.tsx';
import DmgMap from "../components/DamageMap.tsx";
import {Center, Title} from "@mantine/core";
import {FooterSocial} from "../components/Footer/FooterSocial.tsx";
import {fetchDamageData} from "../utils/api.tsx";
import {toDamageHeatmapPoints} from "../utils/transform.tsx";
import type {RawDamageResponse} from "../types/types.tsx";

function Home() {
  return (
      <Center style={{flexDirection: 'column'}}>
        <HeroTitle />
          <Title size={25}>Previous Damages</Title>
          <DmgMap
              fetcher={fetchDamageData}
              processor={(raw) => toDamageHeatmapPoints(raw as RawDamageResponse)}
          />
        <FooterSocial/>
      </Center>

  );
}

export { Home };
