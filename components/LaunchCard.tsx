import {
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
interface LaunchCardProps {
  title: string;
  stat: string;
  href: string | null;
}

export default function LaunchCard(props: LaunchCardProps) {
  const { title, stat, href } = props;
  return (
    <a href={`/${href}`}>
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
      >
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    </a>
  );
}
