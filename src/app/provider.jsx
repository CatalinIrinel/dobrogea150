'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';

const myTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        title: process.env.NEXT_PUBLIC_TITLE,
        main: process.env.NEXT_PUBLIC_MAIN,
        contrast: process.env.NEXT_PUBLIC_CONTRAST,
        text: '#0e0e0e',
        bg: '#f0f0f0',
        overlay: 'rgba(0,0,0,0.3)',
      },
      breakpoints: {
        sm: '40rem', //640px
        md: '48rem', //768px
        lg: '64rem', //1024px
        xl: '80rem', //1280px
        '2xl': '96rem', //1536px
      },
    },
  },
});

const system = createSystem(defaultConfig, myTheme);

export function Providers({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
