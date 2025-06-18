'use client';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const TitleArea = (props) => {
  const { text } = props;
  return (
    <Heading as={'h2'} fontSize={'4xl'} color={'main'}>
      {text}
    </Heading>
  );
};

export default TitleArea;
