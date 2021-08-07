import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from "./layout/Layout"
import { ColorModeSwitcher } from './components/ColorSwitcher/ColorModeSwitcher';
import GiveawaysState from './context/giveaway/giveawayState'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <GiveawaysState>
        <Layout />
      </GiveawaysState>
    </ChakraProvider>
  );
}

export default App;
