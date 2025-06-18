'use client';
import { HStack, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import BlogHomeCard from './BlogCards';
import TitleArea from '../TitleArea';

const BlogArea = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const { data } = await axios.get('/api/blog/home');
        if (data?.length) {
          setBlogPosts(data);
        }
      } catch (err) {
        console.error(
          'Eroare la încărcarea proiectelor:',
          err.response?.data || err.message
        );
      }
    };
    getBlogPosts();
  }, []);

  return (
    <Stack
      px={{ base: '1rem', lg: '4rem' }}
      w={'full'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'4rem'}
      overflow={'hidden'}
      pb={'3rem'}
    >
      <TitleArea text={'Blog'} />
      <HStack
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        w={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'3rem'}
      >
        {blogPosts.map((item, index) => (
          <BlogHomeCard
            key={index + '-' + item._id}
            project={item}
            data-aos-easing="ease-in"
            data-aos={item.dataAos}
            data-aos-duration="1500"
          />
        ))}
      </HStack>
    </Stack>
  );
};

export default BlogArea;
