'use client';
import {
  Box,
  Card,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TitleArea from '../TitleArea';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import ObiectivCard from '../ObiectivCard';

const Obiective = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || 1);
  const [obiective, setObiective] = useState([]);
  const [page, setPage] = useState(currentPage);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchObiective() {
      try {
        const res = await axios.get(
          `/api/obiective?page=${page}&pageSize=${pageSize}`
        );
        const data = await res.data;
        setObiective(data.obiective);
        setTotalPages(data.pages);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea obiectivelor: ' + error);
      }
    }

    fetchObiective();
  }, [page, pageSize]);

  return (
    <Stack
      py={{ base: '16', md: '24' }}
      px={'1rem'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      minH={'calc(100vh - 400px)'}
      gap={'3rem'}
    >
      <TitleArea text={'Obiective turistice'} />
      <HStack
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={'2rem'}
      >
        {obiective.map((item) => (
          <ObiectivCard key={item.titlu} obiectiv={item} />
        ))}
      </HStack>
      <HStack w="full" gap={'.5rem'} flexWrap={'wrap'}>
        {[...Array(totalPages).keys()].map((x) => (
          <Link
            key={x + 1}
            href={`/obiective?page=${x + 1}&pageSize=${pageSize}`}
          >
            <Box
              border={'1px solid'}
              borderColor={x + 1 === Number(page) ? 'main' : 'black'}
              color={x + 1 === Number(page) ? 'bg' : 'main'}
              bg={x + 1 === Number(page) ? 'main' : 'bg'}
              boxSize={'25px'}
              gap={'2rem'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'0.3rem'}
            >
              {x + 1}
            </Box>
          </Link>
        ))}
      </HStack>
    </Stack>
  );
};

export default Obiective;
