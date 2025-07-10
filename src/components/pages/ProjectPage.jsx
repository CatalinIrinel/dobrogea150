'use client';

import { Heading, Image, Stack, StackSeparator, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(`/api/projects/${slug}`);
        setProject(data);
      } catch (error) {
        toast.error(error);
      }
    };
    getProject();
  }, [slug]);

  return (
    <Stack
      w={'full'}
      minH={{ base: 'calc(100vh - 400px)', lg: 'calc(100vh - 320px)' }}
      justifyContent={'flex-start'}
      alignItems={'center'}
    >
      {project && (
        <>
          <Image
            w={'full'}
            h={{ base: 'full', lg: '400px' }}
            src={project.image}
            alt={project.title}
          />
          <Stack
            w={'full'}
            maxW={{ base: 'full', lg: '70rem' }}
            px={'1rem'}
            separator={<StackSeparator />}
          >
            <Stack>
              <Heading as={'h1'} fontSize={'2rem'}>
                {project.title}
              </Heading>
              <Text color={'gray.300'}>
                Stare proiect: <strong>{project.state}</strong>
              </Text>
            </Stack>
            <Stack>
              <Text>{project.description}</Text>
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ProjectPage;
