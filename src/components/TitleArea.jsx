'use client';
import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const TitleArea = (props) => {
  const { text } = props;
  return (
    <Stack w={'full'} alignItems={'center'} justifyContent={'center'}>
      <Heading
        as={'h2'}
        fontSize={'4xl'}
        color={'main'}
        textTransform={'capitalize'}
      >
        {text}
      </Heading>
    </Stack>
  );
};

export default TitleArea;
