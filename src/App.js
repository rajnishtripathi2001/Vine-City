import {React} from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Social from './Pages/Social';
import News from './Pages/News';
import Error from './Pages/Error';

import {Routes, Route } from 'react-router-dom';


function App() {
  return(     
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/news' element={<News/>}/>
        <Route exact path='/social' element={<Social/>}/>
        <Route Component={<Error/>}/>
      </Routes>     
  ) 
}

export default App;
