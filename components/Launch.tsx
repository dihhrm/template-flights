import Header from './Header';
import LaunchCard from './LaunchCard';
import { Box } from '@chakra-ui/react';

export default function Launch({ launch }) {
  return (
    <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Header />
      <LaunchCard title={launch.date} stat={launch.name} />
    </Box>
  );
}
