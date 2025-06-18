'use client';

import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Center,
  Image,
} from '@chakra-ui/react';

const ImageHero = (props) => (
  <Center
    w="full"
    h={{ base: 'fit-content', md: 'calc(100vh - 340px)' }}
    bg="bg.muted"
    color="fg.subtle"
    {...props}
  >
    <Image src={'./images/hero.png'} w={'full'} />
  </Center>
);

const Hero = () => {
  return (
    <Stack
      w={'full'}
      alignItems={'center'}
      justifyContent={'center'}
      color={'bg'}
      gap={'0'}
    >
      <ImageHero />
      <Stack
        className={'hero-text-area'}
        w={'100vw'}
        h={'340px'}
        px={{ base: '16', md: '24' }}
        bg={'main'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={16}
          rowGap={4}
          w={'full'}
        >
          <Heading
            as="h1"
            textStyle={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            textAlign={{ base: 'center', md: 'initial' }}
          >
            Asociația <br />
            Dobrogea 150
          </Heading>
          <Stack gap={{ base: '6', md: '8' }} justifyContent="center">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="white"
              textAlign={{ base: 'center', md: 'initial' }}
            >
              Cultura și patrimoniul, punți între generații.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} gapY="3">
              <Button
                px={'.5rem'}
                bg={'contrast'}
                size={{ base: 'lg', md: 'xl' }}
                color={'main'}
                _hover={{ transform: 'translateY(-4px)' }}
              >
                Obiective
              </Button>
              <Button
                variant="outline"
                size={{ base: 'lg', md: 'xl' }}
                color="bg"
                _hover={{ color: 'main' }}
                px={'.5rem'}
              >
                Trasee
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Hero;
