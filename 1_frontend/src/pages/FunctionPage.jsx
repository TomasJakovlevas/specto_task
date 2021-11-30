import React from 'react';

// Components
import ClientSearch from '../components/ClientSearch/ClientSearch';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import MenuInLeft from '../components/MenuInLeft/MenuInLeft';

// Style
import { PageBody, Wrapper } from './FunctionPage.style';

const FunctionPage = () => {
  return (
    <PageBody>
      <MenuInLeft />

      <Wrapper>
        <MainNavigation />
        <ClientSearch />
      </Wrapper>
    </PageBody>
  );
};

export default FunctionPage;
