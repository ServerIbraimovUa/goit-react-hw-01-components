import { Avatar, UserList } from './Profile.styled';
import { Container } from 'components/Utils/Utils.styled';
import PropTypes from 'prop-types';
export const Profile = props => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = props;
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <UserList>
        <li>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </UserList>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
