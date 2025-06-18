import { Heading, Text, Button, Image, Stack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      textAlign="center"
      py={10}
      px={6}
    >
      <Image
        src={'/not-found.svg'}
        alt={'Digidev Social Media - Not Found 404'}
        w={{ base: '300px', md: '500px' }}
      />
      <Heading as="h1" size="xl" mt={6} mb={2} color={'white'}>
        404 - Pagina nu a fost găsită
      </Heading>
      <Text color="gray.500" mb={6}>
        Link-ul accesat nu există sau a fost mutat.
      </Text>
      <Link href="/" passHref>
        <Button bgColor={'contrast'} color={'white'}>
          Înapoi la prima pagină
        </Button>
      </Link>
    </Stack>
  );
}
