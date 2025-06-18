'use client';
import {
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { navbarMenu } from './static/texts';
import { FiMenu } from 'react-icons/fi';
import { useToggle } from './Context';

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { toggle } = useToggle();

  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = navbarRef.current?.offsetTop || 0;
      const scrollY = window.scrollY;

      // Trigger only on mobile viewports
      if (window.innerWidth < 768) {
        if (scrollY > offsetTop) {
          setIsSticky(true);
          console.log(offsetTop);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {isDesktop ? (
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
          <Image
            w={'150px'}
            src={'/images/Logo-alb.png'}
            alt={'Digidev Social Media'}
          />
          {navbarMenu.map((item, index) => (
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
            <Image
              w={'200px'}
              src={'/images/Logo-alb.png'}
              alt={'Digidev Social Media'}
            />
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
