import styled from 'styled-components';
import { primaryColor } from '../../common/colors/color';

export const StyledHeader = styled.header`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const StyledLogoDiv = styled.div`
  width: 120px;
  img {
    width: 100%;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    padding: 10px 0;
  }

  ul li {
    display: inline;
    padding: 27px 0;
    margin: 0 20px;
    color: #ffffff;
    cursor: pointer;
  }

  ul li a {
    text-decoration: none;
    color: white;
  }

  ul li:hover {
    border-bottom: 3px solid white;
  }
`;
