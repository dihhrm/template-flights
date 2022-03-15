import { chakra } from '@chakra-ui/react';

export default function Header() {
  return (
    <chakra.h1
      textAlign={'center'}
      fontSize={'4xl'}
      py={10}
      fontWeight={'bold'}
    >
      SpaceX Launches
    </chakra.h1>
  );
}
