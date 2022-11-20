import '../styles/globals.scss'
import type { AppProps } from 'next/app'

// internal import
import { NavBar, Footer } from '../components/index.js';

const App = ({ Component, pageProps }: AppProps) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;