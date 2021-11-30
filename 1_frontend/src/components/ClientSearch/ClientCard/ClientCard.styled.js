import styled from 'styled-components';
import { seccondaryColor } from '../../../common/colors/color';

export const ClientContainer = styled.div`
  margin-top: 30px;
  h2 {
    margin-bottom: 20px;
  }
`;

export const ClientInfoDiv = styled.div`
  background-color: ${seccondaryColor};
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
  }
`;

export const ClientInfoWrapper = styled.div`
  width: 76%;
  p {
    margin-bottom: 10px;
  }
`;

export const ClientInfoCategoriesWrapper = styled.div`
  width: 21%;
  p {
    margin-bottom: 10px;
  }
`;

export const ClientImportantInfoDiv = styled.div`
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
    span {
      background-color: ${seccondaryColor};
      color: #ffa35f;
      padding: 0 12px;
      margin: 0 5px;
      border-radius: 20px;
      width: 50px;
      font-weight: bold;
    }
  }
`;

export const InfoIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoIconDiv = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${seccondaryColor};
  border-radius: 10px;
`;

export const ClientInfoCategories = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  p {
    padding: 10px;
    background-color: ${seccondaryColor};
    margin-bottom: 10px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
  }

  p:hover {
    background-color: #e8e8e8;
  }
`;
