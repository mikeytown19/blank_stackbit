// 1. Import the extendTheme function
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc

// 3. Pass the `theme` prop to the `ChakraProvider`

export const wrapRootElement = ({ element }) => (
  <ChakraProvider>
    {element}
  </ChakraProvider>
);
