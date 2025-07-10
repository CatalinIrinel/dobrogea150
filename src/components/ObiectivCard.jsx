import { Card, Heading, HStack, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ObiectivCard = ({ obiectiv }) => {
  const { slug, pozaCoperta, titlu, categorie, judet } = obiectiv;
  return (
    <Link href={`/obiectiv/${slug}`}>
      <Card.Root
        variant="subtle"
        w={'350px'}
        height={'350px'}
        fontSize={'bold'}
        mt={0}
        pt={0}
      >
        <Card.Body
          w={'full'}
          alignItems={'center'}
          justifyContent={'space-between'}
          color={'main'}
          pb={'1rem'}
        >
          <Image
            src={pozaCoperta}
            w={'full'}
            alt={titlu}
            borderRadius={'.5rem'}
          />

          <Heading
            as={'h2'}
            fontSize={'1.5rem'}
            fontWeight={'normal'}
            textAlign={'center'}
          >
            {titlu}
          </Heading>
          <HStack px={'1rem'} w={'full'} justifyContent={'space-between'}>
            <Text fontWeight={'bold'}>
              {judet === 'Constanta' ? 'CT' : 'TL'}
            </Text>
            <Text textAlign={'center'}>{categorie.map((item) => item)}</Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default ObiectivCard;
