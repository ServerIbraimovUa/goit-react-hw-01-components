import { styled } from 'styled-components';
const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px dashed #000;
  padding: 3px;
`;
const UserList = styled.ul`
  margin-top: 22px;
  list-style: none;
  display: flex;
  justify-content: center;
  /* border-top: 1px solid black; */
  li {
    width: 100%;
    padding: 10px;
    display: flex;
    font-size: 24px;
    font-weight: 600;
    flex-direction: column;
    gap: 4px;
  }
  li + li {
    border-left: 1px solid black;
  }
`;
export { UserList, Avatar };
