import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Container } from 'components/Utils/Utils.styled';
import { List, Item } from './FriendList.styled';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <Container>
      <h2>Friends</h2>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Item>
        ))}
      </List>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      percentage: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
