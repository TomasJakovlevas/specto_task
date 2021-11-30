import styled from 'styled-components';
import { primaryColor } from '../../common/colors/color';

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  thead tr th {
    padding: 10px 10px;
  }

  tbody tr td {
    padding: 5px 10px;
  }
  td:first-child,
  th:first-child {
    border-radius: 10px 0 0 10px;
  }
  td:last-child,
  th:last-child {
    border-radius: 0 10px 10px 0;
  }

  tbody tr:hover {
    background-color: ${primaryColor};
    color: white;
    cursor: pointer;
  }
`;
