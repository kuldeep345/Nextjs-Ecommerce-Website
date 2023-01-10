import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
      <Footer/>
      </>
  );
}

export default MyApp
