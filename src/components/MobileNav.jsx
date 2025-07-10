'use client';
import React, { useEffect, useState } from 'react';
import { useToggle } from './Context';
import { HStack, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { LuX } from 'react-icons/lu';
import axios from 'axios';
import { toast } from 'react-toastify';

const MobileNav = () => {
  const { isOpen, toggle } = useToggle();
  const [loading, setLoading] = useState(true);
  const [navMenu, setNavMenu] = useState([]);

  useEffect(() => {
    const getNavbar = async () => {
      try {
        const res = await axios.get('/api/webInfo/navbar');
        const data = res.data.navbar;
        setNavMenu(data.navMenu);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea obiectivelor: ' + error);
      } finally {
        setLoading(false);
      }
    };
    getNavbar();
  }, []);
  return (
    <Stack
      className="mobileNav"
      display={{ base: 'flex', md: 'none' }}
      w={'300px'}
      top={0}
      transition={'all .8s ease-in-out'}
      right={isOpen ? 0 : '-300px'}
      position={'fixed'}
      zIndex={10001}
      bg={'main'}
      color={'contrast'}
      h={'100vh'}
      px={'2rem'}
      py={'2rem'}
      gap={'4rem'}
    >
      <HStack w={'full'} justifyContent={'flex-end'}>
        <Icon onClick={toggle} fontSize={'2rem'}>
          <LuX />
        </Icon>
      </HStack>
      <Stack gap={'5rem'} w={'full'} alignItems={'flex-end'}>
        {navMenu?.map((item) => (
          <Link
            w={'fit-content'}
            onClick={toggle}
            key={item.text}
            href={item.link}
          >
            <Text
              textAlign={'right'}
              fontSize={'1.25rem'}
              textTransform={'capitalize'}
              color={'contrast'}
              fontWeight={'bold'}
            >
              {item.text}
            </Text>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default MobileNav;
