import React from 'react';

// Style
import { StyledFooter, FooterLinks, LanguageDiv } from './Footer.styled';

// Icons
import LogoDark from '../../common/svg/header/LogoDark.svg';
import Globe from '../../common/svg/language/Globe.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <img src={LogoDark} alt='logo' />
        <span>Privatumo politika</span>
        <span>Teisinės nuostatos</span>
        <span>Pagalba ir kontaktai</span>
      </FooterLinks>
      <LanguageDiv>
        <img src={Globe} alt='globe' />
        <span>Lietuvių</span>
      </LanguageDiv>
    </StyledFooter>
  );
};

export default Footer;
