import { AppProps } from 'next/app';
import Home from '../components/Home';

function MyApp({ Component, pageProps }: AppProps) {
  return <Home><Component {...pageProps} /></Home>;
}

export default MyApp;