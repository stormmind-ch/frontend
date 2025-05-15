import { HeroTitle } from '../components/HeroTitle/HeroTitle.tsx';
import DmgMap from "../components/DamageMap.tsx";
import {Center} from "@mantine/core";

function Home() {
  return (
      <Center style={{flexDirection: 'column'}}>
        <HeroTitle />
        <DmgMap/>
      </Center>

  );
}

export { Home };
