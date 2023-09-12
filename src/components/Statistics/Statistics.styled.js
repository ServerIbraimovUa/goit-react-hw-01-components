import { getRandomColor } from 'components/Utils/GetRandomColor';
import styled from 'styled-components';
export const List = styled.ul`
  margin-top: 12px;
  list-style: none;
  display: flex;
  justify-content: center;
  /* gap: 24px; */
  font-size: 24px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #000;
  background-color: ${getRandomColor};
`;
