import styled from 'styled-components';
import { primaryColor, seccondaryColor } from '../../common/colors/color';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 30px;
  width: calc(80% - 60px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 2px solid ${seccondaryColor};
  color: ${primaryColor};
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 20px;
    text-decoration: 1px underline;
    border-right: 1px solid ${primaryColor};
  }

  span:last-child {
    border: none;
  }
`;

export const LanguageDiv = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 10px;
  }
`;
