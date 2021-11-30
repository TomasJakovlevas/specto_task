import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Style
import { StyledMain } from './Main.styled';

// Pages
import FunctionPage from '../../pages/FunctionPage';
import MainPage from '../../pages/MainPage';

const Main = () => {
  return (
    <StyledMain>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/function' element={<FunctionPage />} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
