import styled from 'styled-components';
import { primaryColor } from '../../../common/colors/color';

export const StyledIconNav = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  img {
    width: 40%;
  }

  :hover {
    background-color: #e8e8e8;
  }

  ::before {
    content: attr(data-text);
    position: absolute;

    top: 0;
    right: 100%;

    padding: 3px 10px;
    border-radius: 10px;
    background-color: ${primaryColor};
    text-align: center;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    display: none;
    width: 130px;
  }

  :hover:before {
    display: block;
  }
`;
