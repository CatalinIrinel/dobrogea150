'use client';

import { Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ObiectivPage = () => {
  const [obiectiv, setObiectiv] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  useEffect(() => {
    const getObiectiv = async () => {
      try {
        const res = await axios.get(`/api/obiective/obiectiv/${slug}`);
        const data = await res.data;
        setObiectiv(data);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea obiectivului: ' + error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) {
      getObiectiv();
    }
  }, [slug]);

  if (loading) {
    return (
      <Stack
        w="full"
        justifyContent="center"
        alignItems="center"
        minH={'calc(100vh - 400px)'}
      >
        <Spinner size="xl" color="main" />
      </Stack>
    );
  }
  return (
    <Stack
      w={'full'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      gap={'.5rem'}
      minH={'calc(100vh - 400px)'}
      pt={'1rem'}
    >
      <Image
        src={obiectiv.pozaCoperta}
        alt={obiectiv.titlu}
        w={'full'}
        h={'300px'}
      />
      <Stack>aici va fi harta</Stack>
      <Stack w={'full'} p={'1.5rem'} gap={'1rem'}>
        <Heading as={'h1'} color={'main'}>
          {obiectiv.titlu}
        </Heading>
        <Text>Stare: {obiectiv.stare}</Text>
        <Text>{obiectiv.categorie.map((item) => item)}</Text>
      </Stack>
      <Stack p={'1rem'}>{obiectiv.descriere}</Stack>
    </Stack>
  );
};

export default ObiectivPage;
