import { Avatar, UserList } from './Profile.styled';
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
    <>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <h1>{username}</h1>
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
    </>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
