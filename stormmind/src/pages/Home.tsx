import DmgMap from '../components/DamageMap.tsx';
import {Box} from'@mantine/core';

export function Home() {
  return (
    <>
    <Box
    h="calc(100vh - 84px)" 
    display="flex"
    >
    <Box maw={400} w="100%" mx="auto" c="blue.6" bg="#fff">
    
        <DmgMap />
    </Box>
    </Box>

    </>
  );
}
