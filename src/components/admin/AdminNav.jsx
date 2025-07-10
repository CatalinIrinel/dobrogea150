import React from 'react';
import {
  FaHouse,
  FaClipboardCheck,
  FaRegNewspaper,
  FaCartShopping,
  FaArrowRightToBracket,
  FaArrowLeft,
} from 'react-icons/fa6';
import { FaCog, FaEdit } from 'react-icons/fa';
import {
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';

const AdminNav = ({ toggle, isOpen }) => {
  const menuItems = [
    {
      link: '/admin',
      icon: FaHouse,
      text: 'Acasă',
    },
    {
      link: '/admin/articol-nou',
      icon: FaEdit,
      text: 'Crează articol',
    },
    {
      link: '/admin/obiectiv-nou',
      icon: FaCartShopping,
      text: 'Creaza obiectiv',
    },
    {
      link: '/admin/articole',
      icon: FaClipboardCheck,
      text: 'Lista Articole',
    },
    {
      link: '/admin/obiective',
      icon: FaRegNewspaper,
      text: 'Lista Obiective',
    },
  ];
  return (
    <Stack
      w={'400px'}
      h={'100vh'}
      bgColor={'main'}
      color={'white'}
      p={'1rem'}
      borderRadius={'0 2rem 2rem 0'}
      transition={'all .4s ease-in-out'}
      justifyContent={'space-between'}
      alignItems={'flex-start'}
      position={'fixed'}
      zIndex={1000}
      left={isOpen ? 0 : '-450px'}
    >
      <HStack
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        <Image
          w={'250px'}
          src={'/images/Logo-alb.png'}
          alt={'Dobrogea150 - Admin'}
        />

        {isOpen ? (
          <FaArrowLeft color={'main'} onClick={toggle} />
        ) : (
          <FaArrowRightToBracket color={'main'} onClick={toggle} />
        )}
      </HStack>
      <Stack w={'full'} gap={'3rem'}>
        {menuItems.map((item) => (
          <Link
            key={item.text}
            href={item.link}
            onClick={toggle}
            color={'white'}
          >
            <HStack fontSize={'1.25rem'} fontWeight={'bold'}>
              <Icon fontSize={'1.75rem'} as={item.icon} />
              &nbsp;
              <Text>{item.text}</Text>{' '}
            </HStack>
          </Link>
        ))}
      </Stack>
      <HStack>
        <Link href={'/user/setari'}>
          <Icon color={'white'} fontSize={'1.75rem'}>
            <FaCog />
          </Icon>
        </Link>
      </HStack>
    </Stack>
  );
};

export default AdminNav;
