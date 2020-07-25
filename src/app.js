import React from 'react';
import Contact from './Components/Contact';
import Filter from './Components/Filter';
import InputForm from './Components/InputForm';
import Wrapper from './Components/Wrapper';
import ThemeButton from './Components/ThemeButton';
import './sass/main.scss';

const App = () => {
  return (
    <Wrapper>
      <ThemeButton />
      <InputForm />
      <Filter />
      <Contact />
    </Wrapper>
  );
};

export default App;
