import '@/styles/globals.css'

//INTERNAL IMPORT
import { Footer, NavBar } from '@/components/componentsindex';

const App = ({ Component, pageProps }) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;