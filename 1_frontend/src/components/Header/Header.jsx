import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { StyledHeader, StyledLogoDiv, StyledNavigation } from './Header.style';

// Icons
import Logo from '../../common/svg/header/Logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoDiv>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </StyledLogoDiv>
      <StyledNavigation>
        <ul>
          <li>
            <Link to='/function'>Funkcijos</Link>
          </li>
          <li>Ataiskaitos</li>
          <li>Sandėlys</li>
          <li>Nustatymai</li>
          <li>Atsijungti</li>
        </ul>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
