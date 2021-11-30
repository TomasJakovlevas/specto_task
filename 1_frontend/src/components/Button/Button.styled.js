import styled from 'styled-components';
import { primaryColor } from '../../common/colors/color';

export const StyledButton = styled.button`
  background-color: ${primaryColor};
  color: white;
  padding: 3px 10px;
  width: 100px;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
`;
