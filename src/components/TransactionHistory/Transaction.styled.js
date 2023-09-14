import { getRandomColor } from 'components/Utils/GetRandomColor';
import { styled } from 'styled-components';

export const Table = styled.table`
  font-size: 20px;
  width: 100%;
  text-align: center;

  thead {
    background-color: yellow;
    color: #000;
    font-size: 14px;
    padding: 20px;
    height: 50px;
  }
  tbody > tr:nth-child(2n) {
    background-color: ${getRandomColor};
  }
`;
