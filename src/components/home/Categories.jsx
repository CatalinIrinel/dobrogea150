'use client';
import React from 'react';

import {
  Card,
  Badge,
  Container,
  Grid,
  GridItem,
  Image,
  Icon,
  Stack,
  Text,
  HStack,
} from '@chakra-ui/react';

import { categoryInfoHome } from '../static/texts';

const CategoryCard = (props) => {
  const { icon, title, image } = props;
  return (
    <Card.Root
      variant="subtle"
      w={'350px'}
      height="350px"
      bgImage={`url(${image})`}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      fontSize={'bold'}
    >
      <Card.Body
        w={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'bg'}
      >
        {typeof icon === 'string' ? (
          <Image src={icon} w={'100px'} alt={title} filter={'invert(1)'} />
        ) : (
          <Icon fontSize={'6rem'}>{icon}</Icon>
        )}
        <Text >{title}</Text>
      </Card.Body>
    </Card.Root>
  );
};

const Categories = () => {
  return (
    <Container maxW="100vw" py={'2rem'}>
      <Stack
        gap={{ base: '10', md: '14' }}
        py={'2rem'}
        px={{ base: '1rem', md: '3rem' }}
      >
        <HStack
          w={'full'}
          alignItems={'center'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          {categoryInfoHome.map((category) => (
            <CategoryCard
              icon={category.icon}
              title={category.text}
              key={category.text}
              image={category.bgImage}
            />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};

export default Categories;
