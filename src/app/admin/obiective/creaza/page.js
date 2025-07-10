'use client';
import { Box, Button, Field, HStack, Input, Stack } from '@chakra-ui/react';

import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
// import Parser from 'html-react-parser';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BiTrash, BiCheck } from 'react-icons/bi';
import TitleArea from '@/components/TitleArea';
import Editor from '@/components/Editorjs';

const CreazaObiectiv = ({ api }) => {
  const [titlu, setTitlu] = useState('');
  const [slug, setSlug] = useState('');
  const [pozaCoperta, setPozaCoperta] = useState('');
  const [pozeGalerie, setPozeGalerie] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [lat,setLat] = useState(0)
  const [long,setLong] = useState(0)
  const [autor,setAutor] = useState('Necunoscut')
  const [judet,setJudet]=useState('Constanta')
  const [localitate,setLocalitate]=useState('Constanta')

  const uploadImages = async (e, poze) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post(
        `${api}/api/articol/poze`,
        bodyFormData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'UPLOAD_SUCCESS' });
      if (poze) {
        setPozeArticol([
          ...pozeArticol,
          { src: data.fileLink, descriereImagine: '' },
        ]);
      } else {
        setPozaCoperta({
          src: data.fileLink,
          descriereImagine: descriereCoperta,
        });
      }
      toast.success('Poza a fost urcată cu succes.');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  const deleteFileHandler = async (index) => {
    setPozeGalerie(pozeGalerie.filter((x, i) => i !== index));
    toast.success('Poza a fost stearsa cu succes.');
  };

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //     const data = await editorInstanceRef.current.save();
  //     const descriere = data.blocks;
  //     try {
  //       dispatch({ type: 'CREATE_REQUEST' });

  //       await axios.post(
  //         `${api}/api/articol/creaza-articol`,
  //         {
  //           titlu,
  //           slug,
  //           descriere,
  //           categorie,
  //           etichete,
  //           dataPostare,
  //           dataActualizare,
  //           userId,
  //           views,
  //           redactor,
  //           pozaCoperta,
  //           pozeArticol,
  //           descriereCoperta,
  //           valid,
  //           counterArticole,
  //           links: links.map((item) => item.link),
  //         },
  //         {
  //           headers: { Authorization: `Bearer ${userInfo.token}` },
  //         }
  //       );

  //       toast.success(`Articol creat cu succes`);

  //       dispatch({ type: 'CREATE_SUCCESS' });
  //       navigate('/user/articole?page=1');
  //     } catch (err) {
  //       toast.error(getError(error));
  //       dispatch({
  //         type: 'CREATE_FAIL',
  //       });
  //     }
  //   };
  return (
    <Stack
      w={'full'}
      maxW={'80rem'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      minH={'100vh'}
      gap={'2rem'}
      px={{ base: '1rem', lg: '3rem' }}
      py={'2rem'}
    >
      <TitleArea text={'Crează un articol nou'} />
      <form onSubmit={''}>
        <Stack w={'full'} gap={'2rem'}>
          <Field.Root isRequired>
            <Field.Label>Titlul:</Field.Label>
            <Input
              type="text"
              value={titlu}
              onChange={(e) => setTitlu(e.target.value)}
            />
          </Field.Root>
          {/* Stack poze */}
          <HStack flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
            <Field.Root>
              <Field.Label>Poza:</Field.Label>

              <Input
                type="file"
                placeholder="Alege imaginea de coperta"
                onChange={(e) => uploadImages(e, false)}
              />
            </Field.Root>
            <Field.Root isRequired>
              <Field.Label>Descriere imagine:</Field.Label>
              <Input
                type="text"
                value={descriereCoperta}
                onChange={(e) => setDescriereCoperta(e.target.value)}
              />
            </Field.Root>
          </HStack>
          <HStack>
            <Field.Root isRequired>
              <Field.Label>Continutul articolului:</Field.Label>
              <Stack
                alignItems={'center'}
                justifyContent={'center'}
                border={'1px solid #000'}
                borderRadius={'1rem'}
                w={'full'}
              >
                <Editor />
              </Stack>
            </Field.Root>
          </HStack>
          <Field.Root>
            <Button
              type="submit"
              bg={'brand.300'}
              color={'brand.100'}
              px={'1rem'}
              _hover={{ transform: 'translateY(-5px)' }}
            >
              Creaza articol
            </Button>
          </Field.Root>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreazaObiectiv;
