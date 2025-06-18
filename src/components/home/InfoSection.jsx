'use client';

import {
  Heading,
  HStack,
  Image,
  Stack,
  StackSeparator,
  Text,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const InfoSection = (props) => {
  const { direction, image, text, button, title, link } = props;
  return (
    <HStack
      flexWrap={'wrap'}
      flexDir={{ base: 'row', lg: direction ? 'row' : 'row-reverse' }}
      w={'100vw'}
      h={'50vh'}
    >
      <Image src={image} alt={title} w={{ base: '300px', lg: '600px' }} />
      <Stack>
        <Heading as={'h2'} fontWeight={'bold'} fontSize={'4rem'}>
          {title}
        </Heading>
        <StackSeparator />
        <Text>{text}</Text>
        <Link href={link}>
          <Button _hover={{ transform: 'translateY(4px)' }}>{button}</Button>
        </Link>
      </Stack>
    </HStack>
  );
};

export default InfoSection;
