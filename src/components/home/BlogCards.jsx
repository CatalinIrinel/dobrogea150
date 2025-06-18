'use client';

import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

const BlogHomeCard = ({ blogPost }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Card
      data-aos-easing="ease-in"
      data-aos={isDesktop ? 'fade-up' : blogPost.dataAos}
      data-aos-duration="1500"
      data-aos-delay={isDesktop ? blogPost.dataAosDelay : 0}
      maxW={{ base: 'full', md: '450px' }}
      w={{ base: 'full', lg: 'full' }}
      bg={process.env.NEXT_PUBLIC_CARDBG}
      color={'white'}
      boxShadow={'0 0 2rem .1rem rgba(133, 132, 132, 0.3)'}
    >
      <CardBody>
        <Image
          src={blogPost.image}
          alt={blogPost.name}
          borderTopRadius={'lg'}
          objectFit={'contain'}
          w={'full'}
          h={'210px'}
        />
        <Stack mt="6" spacing="3">
          <Heading as={'h3'} size="lg">
            {blogPost.name}
          </Heading>
          <Text>{blogPost.desc}</Text>
          <HStack
            w={'full'}
            py={'1rem'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <HStack w={'full'} py={'1rem'} justifyContent={'center'}>
              <Link
                href={blogPost.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  borderColor={'contrast'}
                  border={'1px solid'}
                  borderRadius={'.75rem'}
                  textDecor={'underline'}
                  color={'contrast'}
                  px={'1rem'}
                  py={'.75rem'}
                >
                  Viziteaza articolul!
                </Box>
              </Link>
            </HStack>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogHomeCard;
