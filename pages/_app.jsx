import '../styles/globals.css'
import { store , persistor } from '../store/store'
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }else{
    return (
      <>
      <Provider store={store}>
      <Navbar/>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <div className='w-[100vw] overflow-x-hidden'>
        <Component {...pageProps} />
        </div>
        </PersistGate>
        <Footer/>
      </Provider>
        </>
    );
  }

}

export default MyApp
