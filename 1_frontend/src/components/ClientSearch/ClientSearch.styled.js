import styled from 'styled-components';
import { primaryColor, seccondaryColor } from '../../common/colors/color';

export const StyledClientSearch = styled.section`
  padding: 20px 30px;
  color: ${primaryColor};
`;

export const SearchDiv = styled.div`
  background-color: ${seccondaryColor};
  margin-top: 10px;
  padding: 25px;
  border-radius: 10px;
`;

export const StyledSearchInput = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #e8e8e8;

  div img {
    width: 90%;
    padding-left: 10px;
  }

  input {
    border: none;
    padding: 5px;
    width: 85%;
    outline: none;
  }
`;

export const TableWrapper = styled.div`
  margin: 30px 0;
  padding: 0 5px;
  height: 140px;
  overflow-y: scroll;

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

export const LoadingDiv = styled.div`
  background-color: red;
  width: 250px;
  display: flex;
  justify-content: space-around;
  padding: 2px 10px;
  border-radius: 20px;
  color: white;
  background-color: ${primaryColor};
  margin: 30px auto;

  img {
    width: 8%;
  }
`;
