'use client';
import React from 'react';
import {
  HStack,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { partnersData } from '../static/texts';
import TitleArea from '../TitleArea';

const Partners = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const desktopAnimation = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(calc(-50% - 5rem)); }
  `;

  const mobileAnimation = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(calc(-50% - 2rem)); }
`;
  const scrollAnimation = isDesktop ? desktopAnimation : mobileAnimation;
  return (
    <Stack w={'full'} alignItems={'center'}>
      <TitleArea text={'Parteneri'} />

      <HStack
        w={'full'}
        my={'2rem'}
        overflow={'hidden'}
        sx={{
          '-webkit-mask':
            'linear-gradient(90deg, transparent, white 10%, white 80%, transparent)',
        }}
      >
        <HStack
          className={'animatedDiv'}
          w={'max-content'}
          py={'2rem'}
          gap={{ base: '4rem', lg: '10rem' }}
          color={'contrast'}
          sx={{
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
          animation={`${scrollAnimation} 30s linear infinite`}
        >
          {[...partnersData, ...partnersData].map((item, index) => (
            <Link
              w={'50px'}
              key={index + ' ' + item.name}
              href={item.link}
              isExternal
              rel="noopener noreferrer"
            >
              <HStack justifyContent={'center'} flexWrap={'wrap'}>
                <Image
                  objectFit={'cover'}
                  src={item.image}
                  alt={item.name}
                  w={'50px'}
                  h={'50px'}
                />
                <Text
                  w={{ base: 'fit-content', lg: '80px ' }}
                  textAlign={'center'}
                >
                  {item.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Partners;
