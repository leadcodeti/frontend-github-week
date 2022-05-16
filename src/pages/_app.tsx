
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'
import { UserProvider } from '../hook/useContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globalStyles.scss'


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
         <ToastContainer theme='colored' />
         <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp;
