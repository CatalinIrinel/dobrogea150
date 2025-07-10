'use client';

import { Heading, HStack, Image, Stack, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const InfoSection = (props) => {
  const { direction, image, text, button, title, link } = props;
  return (
    <HStack
      bgColor={'main'}
      flexWrap={'wrap'}
      flexDir={{ base: 'row', lg: direction ? 'row' : 'row-reverse' }}
      w={'100vw'}
      h={'50vh'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={image} alt={title} w={{ base: '300px', lg: '600px' }} />
      <Stack w={{ base: '300px', lg: '600px' }} color={'white'}>
        <Heading
          as={'h2'}
          fontWeight={'bold'}
          fontSize={{ base: '2rem', lg: '4rem' }}
        >
          {title}
        </Heading>
        <Text>{text}</Text>
        <br />
        <Link href={link}>
          <Button px={'1rem'} _hover={{ transform: 'translateY(4px)' }}>
            {button}
          </Button>
        </Link>
      </Stack>
    </HStack>
  );
};

export default InfoSection;
