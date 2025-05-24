import { HeroTitle } from '../components/HeroTitle/HeroTitle.tsx';
import DmgMap from "../components/DamageMap.tsx";
import {Center, Title} from "@mantine/core";
import {FooterSocial} from "../components/Footer/FooterSocial.tsx";

function Home() {
  return (
      <Center style={{flexDirection: 'column'}}>
        <HeroTitle />
          <Title size={25}>Previous Damages</Title>
        <DmgMap/>
        <FooterSocial/>
      </Center>

  );
}

export { Home };
