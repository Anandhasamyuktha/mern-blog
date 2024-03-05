import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Projects from './pages/projects';
import Signin from './pages/signin';
import Signup from './pages/signup';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/' element={<About/>}></Route>
         <Route path='/' element={<Dashboard/>}></Route>
         <Route path='/' element={<Projects/>}></Route>
         <Route path='/' element={<Signin/>}></Route>
         <Route path='/' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
