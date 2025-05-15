import { HeroTitle } from '../components/HeroTitle/HeroTitle.tsx';
import DmgMap from "../components/DamageMap.tsx";
import {Center} from "@mantine/core";
import {FooterSocial} from "../components/Footer/FooterSocial.tsx";

function Home() {
  return (
      <Center style={{flexDirection: 'column'}}>
        <HeroTitle />
        <DmgMap/>
          <FooterSocial/>
      </Center>

  );
}

export { Home };
