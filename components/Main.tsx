import Header from './Header';
import { Box, SimpleGrid } from '@chakra-ui/react';
import LaunchCard from './LaunchCard';

export default function Main({ data }) {
  return (
    <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Header />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {data?.map((item) => (
          <a key={item.id} href={`/${item.id}`}>
            <LaunchCard title={item.date} stat={item.name} />
          </a>
        ))}
      </SimpleGrid>
    </Box>
  );
}
