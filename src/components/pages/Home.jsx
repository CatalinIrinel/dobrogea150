import React from 'react';
import Hero from '../home/Hero';
import Categories from '../home/Categories';
import InfoSection from '../home/InfoSection';
import Partners from '../home/Partners';
import { Stack } from '@chakra-ui/react';
import BlogArea from '../home/BlogArea';

const HomePage = () => {
  return (
    <Stack
      w={'full'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'4rem'}
      fontWeight={'bold'}
    >
      <Hero />
      <Categories />
      <Partners />
      <InfoSection
        link={'/despre'}
        direction
        button={'Despre Dobrogea150'}
        image={'/images/bgContact.png'}
        text={'lorem ipsum dolor'}
        title={'lorem ipsum'}
      />
      <BlogArea />
      <InfoSection
        link={'/contact'}
        direction={false}
        button={'Contactează-ne'}
        image={'/images/bgContact.png'}
        text={'lorem ipsum dolor'}
        title={'lorem ipsum'}
      />
    </Stack>
  );
};

export default HomePage;
