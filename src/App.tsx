import React from 'react';
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import SignInForm from './components/SignIn/SignInForm';
import SignUpForm from './components/SignUp/SignUpForm';
import { SignUpActivation } from './components/SignUpActivate/SignUpActivate';
import SelectedMovie from './components/Cards/SelectedMovie/SelectedMovie';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/'
            element={<Home/>}
        />
         <Route path='/movie'
            element={<Catalog/>}
        />
        <Route path='/movie'>
        <Route path=':movieId'
            element={<SelectedMovie/>}  
          />  
        </Route>
        <Route path='sign-in' element={<SignInForm />}
        />
        <Route path='sign-up' element={<SignUpForm />}
        />
        	<Route path='activate/:uid/:token' element={<SignUpActivation/>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
