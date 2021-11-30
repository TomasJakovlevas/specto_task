import React from 'react';

// Style
import { MenuWrapper, MenuSection } from './MenuInLeft.styled';

const MenuInLeft = () => {
  return (
    <MenuWrapper>
      <MenuSection>
        <h3>Dienos Funkcijos</h3>
        <ul>
          <li>Registracija</li>
          <li>Kliento paieška</li>
          <li>Sąskaitos</li>
          <li>Kasa</li>
          <li>Orderiai</li>
          <li>Medžiagų išdavimas</li>
        </ul>
      </MenuSection>
      <MenuSection>
        <h3>Kortelės</h3>
        <ul>
          <li>Fiziniai klientai</li>
          <li>Juridiniai klientai</li>
          <li>Prekių tiekėjai</li>
          <li>Paslaugos</li>
          <li>Prekės</li>
          <li>Darbuotojai</li>
        </ul>
      </MenuSection>
    </MenuWrapper>
  );
};

export default MenuInLeft;
