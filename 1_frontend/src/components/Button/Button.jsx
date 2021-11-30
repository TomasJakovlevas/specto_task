import React from 'react';

// Style
import { StyledButton } from './Button.styled';

const Button = ({ icon, text, action }) => {
  return (
    <StyledButton onClick={action}>
      <img src={icon} alt='icon' />
      {text}
    </StyledButton>
  );
};

export default Button;
