import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const DataBox = ({ text, value, link, iconOne, iconTwo }) => {
  return (
    <HStack
      alignItems={'center'}
      w={'350px'}
      h={'80px'}
      bg={'gradient.buton'}
      // boxShadow={'0 0 32px rgba(0,0,0,0.8)'}
      boxShadow={
        ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
      }
      borderRadius={'1.5rem'}
      p={'1.25rem'}
      justifyContent={'space-between'}
    >
      <Stack>
        <Heading as={'h2'} fontSize={'1.25rem'}>
          {text}
        </Heading>
        <HStack>
          <Box fontSize={'1.5rem'}>{iconOne && <Icon as={iconOne} />}</Box>
          <Text fontSize={'1.25rem'}>{value}</Text>
        </HStack>
      </Stack>
      {link && (
        <Link href={`${link}`}>
          <Flex
            fontSize={'2rem'}
            color={'#000'}
            bg={'#fff'}
            borderRadius={'.55rem'}
            p={'.25rem'}
            _hover={{ bg: '#dbdbdb' }}
          >
            {iconTwo && <Icon as={iconTwo} />}
          </Flex>
        </Link>
      )}
    </HStack>
  );
};

export default DataBox;
