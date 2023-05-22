import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './Routes';


function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
