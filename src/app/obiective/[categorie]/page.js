'use client';
import MessageBox from '@/components/MessageBox';
import TitleArea from '@/components/TitleArea';
import { HStack, Spinner, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import ObiectivCard from '@/components/ObiectivCard';

const ObiectiveCategorie = () => {
  const { categorie } = useParams();
  const [obiective, setObiective] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchObiective() {
      try {
        const res = await axios.get(`/api/obiective/${categorie}`);
        const data = await res.data;
        setObiective(data);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea obiectivelor: ' + error);
      } finally {
        setLoading(false);
      }
    }

    if (categorie) {
      fetchObiective();
    }
  }, [categorie]);

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
      gap={'3rem'}
      py={'2rem'}
      minH={'calc(100vh - 400px)'}
      px={{ base: '2rem', lg: 0 }}
    >
      <TitleArea text={categorie} />
      <HStack
        w={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'2rem'}
        flexWrap={'wrap'}
      >
        {obiective.length !== 0 ? (
          obiective.map((item) => (
            <ObiectivCard key={item.titlu} obiectiv={item} />
          ))
        ) : (
          <MessageBox message={'Nu sunt obiective in categoria aceasta'} />
        )}
      </HStack>
    </Stack>
  );
};

export default ObiectiveCategorie;
