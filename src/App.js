import {React,useState,useEffect} from 'react';
import HomePage from './Pages/HomePage';
import './App.css';
import Preloader from './components/Preloader/Preloader';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
      setLoading(false);
      }, 2000);
  }, []);

  return(
    <>
    {loading ? (<Preloader/>):(<HomePage/>)}    
    </>
  ) 
}

export default App;
