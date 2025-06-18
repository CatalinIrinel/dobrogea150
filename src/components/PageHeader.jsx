'use client';

import { Heading, Stack } from '@chakra-ui/react';

const PageHeader = (props) => {
  const { title } = props;
  return (
    <Stack
      w={'full'}
      h={{ base: '200px', md: '300px' }}
      alignItems={'center'}
      justifyContent={'center'}
      color={'contrast'}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'contain'}
    >
      <Heading as={'h1'} fontSize={{ base: '2rem', md: '3rem' }}>
        {title}
      </Heading>
    </Stack>
  );
};

export default PageHeader;
