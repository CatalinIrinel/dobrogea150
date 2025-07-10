'use client';
import {
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  Field,
  Input,
  Textarea,
  Center,
} from '@chakra-ui/react';
import { LuImage } from 'react-icons/lu';

const ContactForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('mesaj trimis');
  };
  return (
    <form onSubmit={submitHandler}>
      <Stack gap={{ base: '6', md: '8' }} {...props}>
        <Stack gap={{ base: '4', md: '6' }}>
          <Field.Root>
            <Field.Label>Nume</Field.Label>
            <Input size="lg" />
          </Field.Root>
          <Field.Root>
            <Field.Label>E-Mail</Field.Label>
            <Input size="lg" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Mesaj</Field.Label>
            <Textarea
              placeholder="Spune-ne cum te putem ajuta"
              size="lg"
              rows={4}
              resize="none"
            />
          </Field.Root>
        </Stack>
        <Button
          type={'submit'}
          size={{ base: 'lg', md: 'xl' }}
          alignSelf={{ base: 'stretch', sm: 'start' }}
        >
          Trimite
        </Button>
      </Stack>
    </form>
  );
};

const ImagePlaceholder = (props) => (
  <Center w="full" h="full" bg="bg.muted" color="fg.subtle" {...props}>
    <LuImage size="48px" />
  </Center>
);
const SectionHeader = (props) => {
  const { tagline, headline, description, ...rootProps } = props;
  return (
    <Stack gap={{ base: '6', md: '8' }} {...rootProps}>
      <Stack gap={{ base: '4', md: '5' }}>
        <Stack gap={{ base: '2', md: '3' }}>
          {tagline && (
            <Text
              textStyle={{ base: 'sm', md: 'md' }}
              fontWeight="medium"
              color="colorPalette.fg"
            >
              {tagline}
            </Text>
          )}
          <Heading as="h2" textStyle={{ base: '3xl', md: '4xl' }}>
            {headline}
          </Heading>
        </Stack>
        {description && (
          <Text
            color="fg.muted"
            textStyle={{ base: 'md', md: 'lg' }}
            maxW="3xl"
          >
            {description}
          </Text>
        )}
      </Stack>
      {props.children}
    </Stack>
  );
};

export const ContactPage = () => (
  <Container py={{ base: '16', md: '24' }} px={'1rem'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '12', md: '16' }}>
      <Stack gap={{ base: '8', md: '12' }}>
        <SectionHeader
          tagline="Get in Touch"
          headline="Let's Start a Conversation"
          description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />
        <ContactForm />
      </Stack>
      <ImagePlaceholder height={{ base: 'sm', md: 'full' }} />
    </SimpleGrid>
  </Container>
);
