import { Span } from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <Span>{isOnline}</Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
