import styled from 'styled-components';
import { primaryColor, seccondaryColor } from '../../common/colors/color';

export const MenuWrapper = styled.div`
  width: 20%;
  padding: 20px 0;
  overflow-y: scroll;
  min-height: 100vh;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${seccondaryColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${primaryColor};
    outline: 1px solid white;
    border-radius: 5px;
  }
`;

export const MenuSection = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  color: ${primaryColor};
  border-bottom: 2px solid ${seccondaryColor};

  h3 {
    padding: 10px 20px;
  }

  ul {
    list-style: none;
  }

  ul li {
    padding: 5px 20px;
  }

  ul li:hover {
    background-color: ${seccondaryColor};
  }

  :last-child {
    border: none;
  }
`;
