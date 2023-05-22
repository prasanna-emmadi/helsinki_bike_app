import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './Routes';
import AppContextProvider from './AppContext';


function App() {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
