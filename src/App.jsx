// @flow strict

import * as React from 'react';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './Components/Questions/Questions';
function App() {
  return (
    <div className='mx-auto container'>
     <Header></Header>
     <MainContainer></MainContainer>
     <ToastContainer></ToastContainer>
     <Questions></Questions>
    </div>
  );
};

export default App;