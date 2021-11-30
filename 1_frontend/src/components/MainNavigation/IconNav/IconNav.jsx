import React from 'react';

// Style
import { StyledIconNav } from './IconNav.styled';

const IconNav = ({ icon, tooltip }) => {
  return (
    <StyledIconNav data-text={tooltip}>
      <img src={icon} alt='profile' />
    </StyledIconNav>
  );
};

export default IconNav;
