import {React,useState,useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Section1 from '../components/Section1/Section1';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';

import Section7 from '../components/Section7/Section7';
import Section9 from '../components/Section9/Section9';
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      let i = 0;
      //console.log(i)
  
      const interval=setInterval(function(){
      i++
      //console.log(i)
      setCounter(i)
      if(i===5303){
          clearInterval(interval)
      }
  },10)
    }, [])
    return (
      <div className="App">
        <Navbar/>
        <Header counter={counter}/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        
        <Section7/>
        <Section9 counter={counter}/>
        <Footer/>
      </div>
    );
}

export default HomePage