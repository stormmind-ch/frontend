import { Text, Center, Title} from '@mantine/core';
import DmgMap from '../components/DamageMap.tsx';

function Home() {
  return (
    <Center>
    <Description/>
   <DmgMap/>

    </Center>

  );
}

function Description() {
  return (
    <Title order={2}>
      Welcome to StormMind!
    </Title>
  )
}

export {Home}