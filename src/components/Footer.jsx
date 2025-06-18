'use client';
import { ButtonGroup, IconButton, Image, Stack, Text } from '@chakra-ui/react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack
      w={'full'}
      as="footer"
      bgColor={'main'}
      color={'white'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Stack
        w={'full'}
        justify="space-between"
        alignItems="center"
        direction={{ base: 'column', lg: 'row' }}
        py={{ base: '12', md: '16' }}
        px={{ base: '1 rem', md: '5rem' }}
        spacing="8"
      >
        <Stack
          spacing={{ base: '6', md: '8' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Image
            src={'/images/Logo-alb.png'}
            alt={'Digidev Social Media'}
            w={'300px'}
          />
        </Stack>
        {/* <SimpleGrid
          px={{ base: '1rem', md: 0 }}
          columns={{ base: 1, md: 4 }}
          gap="8"
          width={{ base: 'full', lg: 'auto' }}
        >
          {footerInfo.map((group, idx) => (
            <Stack
              key={idx}
              spacing="4"
              minW={{ lg: '40' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <Text
                fontSize="md"
                fontWeight="semibold"
                color="contrast"
                textDecor={'underline'}
              >
                {group.title}
              </Text>
              <Stack
                spacing="3"
                shouldWrapChildren
                alignItems={{ base: 'center', md: 'flex-start' }}
              >
                {group.links.map((link, idx) => (
                  <Button
                    key={idx}
                    as="a"
                    variant="text"
                    colorScheme="gray"
                    href={link.href}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid> */}
      </Stack>
      <Stack
        w={'full  '}
        px={{ base: '1 rem', md: '5rem' }}
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Asociația Dobrogea 150. All rights
          reserved.
        </Text>
        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Footer;
