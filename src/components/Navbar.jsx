'use client';
import {
  Stack,
  HStack,
  IconButton,
  Image,
  Link,
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useToggle } from './Context';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { toggle } = useToggle();
  const [navMenu, setNavMenu] = useState([]);
  const [logo, setLogo] = useState('');
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = navbarRef.current?.offsetTop || 0;
      const scrollY = window.scrollY;

      // Trigger only on mobile viewports
      if (window.innerWidth < 768) {
        if (scrollY > offsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getNavbar = async () => {
      try {
        const res = await axios.get('/api/webInfo/navbar');
        const data = res.data.navbar;
        setLogo(data.logo);
        setNavMenu(data.navMenu);
        console.log(data);
      } catch (error) {
        toast.error('A aparut o eroare la preluarea obiectivelor: ' + error);
      } finally {
        setLoading(false);
      }
    };
    getNavbar();
  }, []);

  return (
    <HStack
      ref={navbarRef}
      position={{ base: isSticky ? 'fixed' : 'static', lg: 'fixed' }}
      h={{ base: '80px', lg: 'auto' }}
      top={{ base: 0, md: '30px' }}
      right={0}
      className="Navbar"
      zIndex={1000}
      w={'full'}
      bgColor={{ base: 'main', md: 'transparent' }}
      alignItems={'center'}
      justifyContent={{ base: 'flex-end', md: 'center' }}
      color={'contrast'}
      px={{ base: '1rem', lg: 0 }}
    >
      {loading ? (
        <Stack
          w="full"
          justifyContent="center"
          alignItems="center"
          minH={'calc(100vh - 400px)'}
        >
          <Spinner size="xl" color="main" />
        </Stack>
      ) : isDesktop ? (
        <HStack
          zIndex={1002}
          bgColor={'rgba(41, 41, 41, 0.5)'}
          backdropFilter={'blur(.3rem)'}
          borderRadius={'1rem'}
          gap={'2rem'}
          px={'2rem'}
          py={'1.5rem'}
          w={'max-content'}
          h={'fit-content'}
        >
          <Image w={'150px'} src={logo} alt={'Digidev Social Media'} />
          {navMenu.map((item, index) => (
            <Link zIndex={1003} key={index} href={item.link}>
              <Text
                fontWeight={'bold'}
                _hover={{ textDecor: 'underline' }}
                textTransform={'uppercase'}
                color={'contrast'}
              >
                {item.text}
              </Text>
            </Link>
          ))}
        </HStack>
      ) : (
        <HStack w={'full'} justifyContent={'space-between'}>
          <Link href={'/'}>
            <Image w={'200px'} src={logo} alt={'Digidev Social Media'} />
          </Link>
          <IconButton
            onClick={toggle}
            variant={'ghost'}
            color={'white'}
            fontSize={'4rem'}
          >
            <FiMenu />
          </IconButton>
        </HStack>
      )}
    </HStack>
  );
};

export default Navbar;
