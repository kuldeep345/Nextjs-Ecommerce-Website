import '../styles/globals.css'
import { store , persistor} from '../store/store'
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';


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
      <PersistGate loading={null} persistor={persistor}>
      <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </PersistGate>
      </Provider>
        </>
    );
  }

}

export default MyApp
