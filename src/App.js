import './App.css';
import Footer from './components/Footer.js'
import Section9 from './components/Section9';
import Section7 from './components/Section7';
import Section6 from './components/Section6';
import Section5 from './components/Section5';
import Section4 from './components/Section4';
import Section3 from './components/Section3';
import Section2 from './components/Section2';
import Section1 from './components/Section1';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section9/>
      <Footer/>
    </div>
  );
}

export default App;
