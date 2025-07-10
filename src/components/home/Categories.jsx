'use client';
import React, { useEffect, useState } from 'react';

import {
  Card,
  Container,
  Image,
  Icon,
  Stack,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as GiIcon from 'react-icons/gi';

const CategoryCard = ({ categorieInfo }) => {
  const { icon, bgImage, text, slug } = categorieInfo;
  const isImage = typeof icon === 'string' && icon.startsWith('/');
  const IconCustom = GiIcon[icon];
  return (
    <Link href={`/obiective/${slug}`}>
      <Card.Root
        variant="subtle"
        w={{ base: '175px', lg: '350px' }}
        height={{ base: '175px', lg: '350px' }}
        bgImage={`url(${bgImage})`}
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
          {isImage ? (
            <Image src={icon} w={'100px'} alt={text} filter={'invert(1)'} />
          ) : (
            <Icon fontSize={'6rem'}>
              <IconCustom />
            </Icon>
          )}
          <Text textAlign={'center'}>{text}</Text>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

const Categories = () => {
  const [categorii, setCategorii] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get('/api/webInfo/categorii');
        const data = res.data.categoriiObiective;
        setCategorii(data);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea categoriilor: ' + error);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);
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
          {categorii.map((category) => (
            <CategoryCard key={category.text} categorieInfo={category} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};

export default Categories;
