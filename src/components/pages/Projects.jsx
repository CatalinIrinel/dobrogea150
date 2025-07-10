'use client';
import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TitleArea from '../TitleArea';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <Stack
      w={'300px'}
      borderRadius={'1rem'}
      overflow={'hidden'}
      pb={'1rem'}
      boxShadow={'0 0 1rem rgba(0,0,0,0.5)'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={project.image} alt={project.title} w={'full'} h={'200px'} />
      <Stack w={'full'} p={'1rem'} gap={'1rem'}>
        <Heading as={'h2'}>{project.title}</Heading>
        <Text>{project.dateEnd}</Text>
        <Text>{project.description}</Text>
      </Stack>
      <Link href={`/proiecte/${project.slug}`}>
        <Button px={'1rem'} bgColor={'main'}>
          Despre proiect
        </Button>
      </Link>
    </Stack>
  );
};
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        setProjects(data);
      } catch (error) {
        toast.error(error);
      }
    };
    getProjects();
  }, []);
  return (
    <Stack
      py={{ base: '16', md: '24' }}
      px={'1rem'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'3rem'}
    >
      <TitleArea text={'Proiectele noastre'} />
      <HStack
        w={'full'}
        px={{ base: '1rem', lg: '4rem' }}
        alignItems={'center'}
        justifyContent={'center'}
        flexWrap={'wrap'}
        gap={'1.5rem'}
      >
        {projects.map((item) => (
          <ProjectCard key={item.title} project={item} />
        ))}
      </HStack>
    </Stack>
  );
};

export default Projects;
