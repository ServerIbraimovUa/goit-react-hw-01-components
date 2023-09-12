import { styled } from 'styled-components';
const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px dashed #000;
  padding: 3px;
`;
const UserList = styled.ul`
  margin-top: 18px;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 26px;

  li {
    display: flex;
    font-size: 24px;
    font-weight: 600;
    flex-direction: column;
    gap: 4px;
  }
`;
export { UserList, Avatar };
