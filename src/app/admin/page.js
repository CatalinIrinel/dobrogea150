'use client';
import AdminNav from '@/components/admin/AdminNav';
import DataBox from '@/components/admin/DataBox';
import MessageBox from '@/components/MessageBox';
import TitleArea from '@/components/TitleArea';
import { Button, Heading, HStack, Link, Stack, Table } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import {
  FaRegNewspaper,
  FaArrowRightToBracket,
  FaRegClipboard,
} from 'react-icons/fa6';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [articole, setArticole] = useState([]);
  const [obiective, setObiective] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HStack
      className="adminDash"
      w={'full'}
      h={'100vh'}
      alignItems={'flex-start'}
      px={'1rem'}
    >
      <AdminNav toggle={toggle} isOpen={isOpen} />
      <Stack
        w={{ base: 'full', lg: 'calc(100% - 300px)' }}
        gap={'2rem'}
        pt={'2rem'}
      >
        <FaArrowRightToBracket color={'main'} onClick={toggle} />
        <TitleArea text={'Admin Dashboard'} />
        <HStack
          w={'full'}
          gap={'2rem'}
          flexWrap={'wrap'}
          alignItems={'center'}
          justify={'center'}
        >
          <DataBox
            text={'Total articole in blog'}
            value={0}
            link={'/admin/articole'}
            iconTwo={FaRegNewspaper}
          />
          <DataBox
            text={'Obiective turistice'}
            value={0}
            link={'/admin/obiective'}
            iconTwo={FaEye}
          />
          <DataBox
            text={'Trasee turistice'}
            value={0}
            link={'/admin/trasee'}
            iconTwo={FaRegClipboard}
          />
        </HStack>
        <Stack w={'full'} maxW={'80rem'} gap={'3rem'}>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          >
            <Heading as={'h2'} color={'#030303 '}>
              Articole adăugate recent
            </Heading>
            <Link href={'/admin/articole'}>
              <Button
                px={'.5rem'}
                bg={'gradient.buton'}
                _hover={{ transform: 'scale(1.05)' }}
              >
                Toate articolele
              </Button>
            </Link>
          </HStack>
          {articole.length > 0 ? (
            <Table.Root striped colorScheme="brand">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader visibility={'hidden'}>
                    test
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {articole.map((articol) => (
                  <Table.Row key={articol._id}>
                    <Table.Cell p={'10px'}>
                      <Image
                        w={'80px'}
                        src={`${articol.pozaCoperta[0].src}`}
                        alt={articol.descriereCoperta}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Text
                        w={'300px'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        whiteSpace={'nowrap'}
                      >
                        {articol.titlu}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>{articol.categorie}</Table.Cell>
                    <Table.Cell fontWeight={'bold'}>
                      <Box
                        bg={'brand.300'}
                        color={'brand.201'}
                        borderRadius={'1.5rem'}
                        px={'1.25rem'}
                        py={'1rem'}
                        textAlign={'center'}
                      >
                        {articol.views}
                      </Box>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          ) : (
            <MessageBox message={'Momentan nu aveți articole postate'} />
          )}
        </Stack>

        <Stack w={'full'} maxW={'80rem'} gap={'3rem'}>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          >
            <Heading as={'h2'} color={'#030303 '}>
              Obiective adăugate recent
            </Heading>
            <Link href={'/admin/articole'}>
              <Button
                px={'.5rem'}
                bg={'gradient.buton'}
                _hover={{ transform: 'scale(1.05)' }}
              >
                Toate obiectivele
              </Button>
            </Link>
          </HStack>
          {obiective.length > 0 ? (
            <Table.Root striped colorScheme="brand">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader visibility={'hidden'}>
                    test
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {obiective.map((articol) => (
                  <Table.Row key={articol._id}>
                    <Table.Cell p={'10px'}>
                      <Image
                        w={'80px'}
                        src={`${articol.pozaCoperta[0].src}`}
                        alt={articol.descriereCoperta}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Text
                        w={'300px'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        whiteSpace={'nowrap'}
                      >
                        {articol.titlu}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>{articol.categorie}</Table.Cell>
                    <Table.Cell fontWeight={'bold'}>
                      <Box
                        bg={'brand.300'}
                        color={'brand.201'}
                        borderRadius={'1.5rem'}
                        px={'1.25rem'}
                        py={'1rem'}
                        textAlign={'center'}
                      >
                        {articol.views}
                      </Box>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          ) : (
            <MessageBox message={'Momentan nu aveți obiective postate'} />
          )}
        </Stack>
      </Stack>
    </HStack>
  );
};

export default AdminDashboard;
