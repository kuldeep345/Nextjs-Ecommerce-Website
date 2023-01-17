import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { store , persistor} from '../store/store'
import { Provider } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false);
  const [user, setUser] = useState({value:null});
  const [key, setkey] = useState(0);
  const router = useRouter()
  const [progress, setProgress] = useState(0)


  const logout = ()=>{
    localStorage.removeItem("token")
    setUser({value:null})
    setkey(Math.random())
    router.push("/")
  }

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    setShowChild(true);
    const token = localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setkey(Math.random())
    }
  }, [router.query]);

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
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar key={key} user={user} logout={logout}/>
      <ToastContainer />
        <Component {...pageProps} />
        <Footer/>
      </PersistGate>
      </Provider>
        </>
    );
  }

}

export default MyApp
