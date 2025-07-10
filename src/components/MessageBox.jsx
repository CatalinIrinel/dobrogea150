'use client';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';

function MessageBox(props) {
  return (
    <Box w="full" h={'50px'}>
      <Alert.Root status={props.status || 'info'}>
        <Alert.Indicator />
        <Alert.Title>{props.title || 'Informativ'}</Alert.Title>
        <Alert.Description>{props.message}</Alert.Description>
      </Alert.Root>
    </Box>
  );
}
export default MessageBox;
